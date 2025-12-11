from rest_framework import serializers
from .models import (
    Category, Author, Recipe, Nutrition,
    IngredientGroup, Ingredient, Instruction
)

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
        fields = "__all__"


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["name"]


class IngredientGroupSerializer(serializers.ModelSerializer):
    items = IngredientSerializer(many=True)

    class Meta:
        model = IngredientGroup
        fields = ["group_name", "items"]


class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ["step_number", "text", "image"]


class RecipeSerializer(serializers.ModelSerializer):
    nutrition = NutritionSerializer()
    ingredient_groups = IngredientGroupSerializer(many=True)
    instructions = InstructionSerializer(many=True)
    author = AuthorSerializer()
    category = CategorySerializer()

    class Meta:
        model = Recipe
        fields = "__all__"
