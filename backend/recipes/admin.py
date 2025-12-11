from django.contrib import admin
from .models import Category, Author, Recipe
from .models import IngredientGroup, Ingredient,Nutrition
from .models import Instruction


admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Recipe)
admin.site.register(IngredientGroup)
admin.site.register(Ingredient)
admin.site.register(Nutrition)
admin.site.register(Instruction)