from django.contrib.auth import get_user_model

from rest_framework import serializers

from garage_backend.models import Vehicle
from .vehicle_serializer import VehicleSerializer


class UserSerializer(serializers.ModelSerializer):
    vehicles = VehicleSerializer(many=True, read_only=True)
    
    class Meta:
        model = get_user_model()
        fields = [
            'id', 
            'email', 
            'name',
            'vehicles',
        ]