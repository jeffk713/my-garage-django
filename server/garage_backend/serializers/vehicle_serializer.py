from rest_framework import serializers

from garage_backend import models
from .service_serializer import ServiceSerializer
from .vehicle_note_serializer import VehicleNoteSerializer


class VehicleSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)
    vehicleNote = VehicleNoteSerializer(read_only=True)

    class Meta:
        model = models.Vehicle
        fields = "__all__"