from rest_framework import serializers

from garage_backend import models

class VehicleNoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.VehicleNote
        fields = "__all__"