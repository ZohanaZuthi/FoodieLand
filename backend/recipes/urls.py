from django.urls import path
from .api import ContactCreateAPI
from .api import SubscriptionCreateAPI




urlpatterns = [
    # existing URLs ...

    path("contact/", ContactCreateAPI.as_view(), name="contact-api"),
    path("subscribe/", SubscriptionCreateAPI.as_view(), name="subscribe-api"),
]
