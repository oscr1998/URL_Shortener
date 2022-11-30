from django.http import HttpResponse, JsonResponse
from .models import *
from .serializers import WebsiteSerializer
from rest_framework import viewsets


# Create your views here.
def home(request):
    print(website_links.objects.all())
    return HttpResponse("<h1> TEST TEST TEST</h1>")

class WebsiteViewSet(viewsets.ModelViewSet):
    serializer_class = WebsiteSerializer
    queryset = website_links.objects.all()

