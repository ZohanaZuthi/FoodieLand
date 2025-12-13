from django.contrib import admin
from .models import Category, Author, Recipe
from .models import IngredientGroup, Ingredient,Nutrition
from .models import Instruction
from .models import ContactMessage
from .models import Subscription


admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Recipe)
admin.site.register(IngredientGroup)
admin.site.register(Ingredient)
admin.site.register(Nutrition)
admin.site.register(Instruction)



@admin.register(Subscription)
class SubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email",)
    search_fields = ("email",)

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "enquiry_type", "created_at")
    search_fields = ("name", "email", "subject")