from rest_framework.generics import (
    ListAPIView, RetrieveAPIView,
    CreateAPIView, UpdateAPIView, DestroyAPIView
)

from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer


# ----------------------------------------------------
# BASIC GET APIs
# ----------------------------------------------------

class RecipeListAPI(ListAPIView):
    queryset = Recipe.objects.all().order_by("-created_at")
    serializer_class = RecipeSerializer


class RecipeDetailAPI(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = "slug"


class CategoryListAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# ----------------------------------------------------
# FULL CRUD APIs
# ----------------------------------------------------

class RecipeCreateAPI(CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeUpdateAPI(UpdateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    lookup_field = "slug"


class RecipeDeleteAPI(DestroyAPIView):
    queryset = Recipe.objects.all()
    lookup_field = "slug"
