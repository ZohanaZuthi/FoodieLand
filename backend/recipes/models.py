from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=100,unique=True)
    icon=models.ImageField(upload_to="category-icons/",blank=True,null=True)
    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to="authors/")
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    
    author = models.ForeignKey(Author, on_delete=models.SET_NULL, null=True, related_name="recipes")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="recipes")

    description = models.TextField()

    prep_time = models.CharField(max_length=50)
    cook_time = models.CharField(max_length=50)
    servings = models.CharField(max_length=50, blank=True, null=True)

    image = models.ImageField(upload_to="recipes/")

    is_featured = models.BooleanField(default=False)
    is_hot = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            from django.utils.text import slugify
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Nutrition(models.Model):
    recipe = models.OneToOneField(
        Recipe,
        on_delete=models.CASCADE,
        related_name="nutrition"
    )

    calories = models.CharField(max_length=50)
    total_fat = models.CharField(max_length=50)
    protein = models.CharField(max_length=50)
    carbs = models.CharField(max_length=50)
    cholesterol = models.CharField(max_length=50)

    def __str__(self):
        return f"Nutrition for {self.recipe.title}"
class IngredientGroup(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="ingredient_groups"
    )
    group_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.group_name} ({self.recipe.title})"
class Ingredient(models.Model):
    group = models.ForeignKey(
        IngredientGroup,
        on_delete=models.CASCADE,
        related_name="items"
    )
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
class Instruction(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="instructions"
    )
    step_number = models.PositiveIntegerField()
    text = models.TextField()
    image = models.ImageField(upload_to="instructions/", blank=True, null=True)

    class Meta:
        ordering = ["step_number"]

    def __str__(self):
        return f"Step {self.step_number} for {self.recipe.title}"
