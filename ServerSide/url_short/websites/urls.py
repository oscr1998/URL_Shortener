from django.urls import path
from . import views
from .views import WebsiteViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'websites', views.WebsiteViewSet, basename='website')
urlpatterns = router.urls

# urlpatterns = [
#     path("", views.home, name="home"),
#     path("data/", views.urlData, name="urlData"),
# ]
