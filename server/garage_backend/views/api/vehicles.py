from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend.models import Vehicle
from garage_backend.serializers import VehicleSerializer


class Vehicle(APIView):
    """
    create a new vehicle
    """
    

class VehicleDetail(APIView):
    """
    Retrieve, update, and delete an existing vehicle
    """