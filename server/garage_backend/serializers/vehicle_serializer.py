from rest_framework import serializers

from garage_backend import models
from .service_serializer import ServiceSerializer


class VehicleSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)
    
    class Meta:
        model = models.Vehicle
        fields = "__all__"