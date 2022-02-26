from rest_framework import serializers

from garage_backend import models
from .vehicle_serializer import VehicleSerializer


class UserSerializer(serializers.ModelSerializer):
    vehicles = VehicleSerializer(many=True, read_only=True)

    class Meta:
        model = models.User
        fields = [
            'id', 
            'email', 
            'name',
            'vehicles',
        ]