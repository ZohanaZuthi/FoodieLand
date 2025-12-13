from rest_framework import serializers
from .models import (
    Category, Author, Recipe, Nutrition,
    IngredientGroup, Ingredient, Instruction
)


# --------------------------
# SIMPLE SERIALIZERS
# --------------------------

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class NutritionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutrition
        fields = ["id", "calories", "total_fat", "protein", "carbs", "cholesterol"]


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class IngredientGroupSerializer(serializers.ModelSerializer):
    items = IngredientSerializer(many=True)

    class Meta:
        model = IngredientGroup
        fields = ["id", "group_name", "items"]


class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ["id", "step_number", "text", "image"]





class RecipeSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()         
    category = CategorySerializer()  
    nutrition = NutritionSerializer()
    ingredient_groups = IngredientGroupSerializer(many=True)
    instructions = InstructionSerializer(many=True)

    class Meta:
        model = Recipe
        fields = "__all__"

  
    def create(self, validated_data):
        nutrition_data = validated_data.pop("nutrition")
        ingredient_groups_data = validated_data.pop("ingredient_groups")
        instructions_data = validated_data.pop("instructions")

        recipe = Recipe.objects.create(**validated_data)

        
        Nutrition.objects.create(recipe=recipe, **nutrition_data)

        for group_data in ingredient_groups_data:
            items = group_data.pop("items")
            group = IngredientGroup.objects.create(recipe=recipe, **group_data)
            for item in items:
                Ingredient.objects.create(group=group, **item)

        for step in instructions_data:
            Instruction.objects.create(recipe=recipe, **step)

        return recipe

    def update(self, instance, validated_data):
        nutrition_data = validated_data.pop("nutrition")
        ingredient_groups_data = validated_data.pop("ingredient_groups")
        instructions_data = validated_data.pop("instructions")

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        Nutrition.objects.update_or_create(recipe=instance, defaults=nutrition_data)

       
        instance.ingredient_groups.all().delete()
        for group_data in ingredient_groups_data:
            items = group_data.pop("items")
            group = IngredientGroup.objects.create(recipe=instance, **group_data)
            for item in items:
                Ingredient.objects.create(group=group, **item)

        
        instance.instructions.all().delete()
        for step in instructions_data:
            Instruction.objects.create(recipe=instance, **step)

        return instance
