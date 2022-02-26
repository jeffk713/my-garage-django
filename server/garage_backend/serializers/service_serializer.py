from rest_framework import serializers

from garage_backend import models
from .vehicle_serializer import VehicleSerializer


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = "__all__"