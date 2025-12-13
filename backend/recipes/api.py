from rest_framework.generics import (
    ListAPIView, RetrieveAPIView,
    CreateAPIView, UpdateAPIView, DestroyAPIView
)

from .models import Recipe, Category
from .serializers import RecipeSerializer, CategorySerializer
from rest_framework.generics import CreateAPIView
from .models import ContactMessage
from .serializers import ContactSerializer
from .models import Subscription
from .serializers import SubscriptionSerializer


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
class ContactCreateAPI(CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactSerializer

class SubscriptionCreateAPI(CreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer