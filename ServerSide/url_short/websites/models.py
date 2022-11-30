# Create your models here.
from django.db import models

class website_links(models.Model):
    orignal_url = models.CharField(max_length=200)
    short_url= models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.orignal_url
