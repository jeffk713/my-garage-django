from rest_framework.serializers import ModelSerializer

from garage_backend.models import Vehicle
from .service_serializer import ServiceSerializer


class VehicleSerializer(ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)
    
    class Meta:
        model = Vehicle
        fields = "__all__"