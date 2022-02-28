from rest_framework import serializers

from garage_backend import models

class ShopSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Shop
        fields = "__all__"