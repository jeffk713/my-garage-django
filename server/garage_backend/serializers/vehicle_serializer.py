from rest_framework.serializers import ModelSerializer

from garage_backend.models import Vehicle


class VehicleSerializer(ModelSerializer):
    class Meta:
        model = Vehicle
        exclude = ["createdAt", "user"]