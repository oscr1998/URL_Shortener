from rest_framework import serializers
from .models import website_links

class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = website_links
        fields = '__all__'
