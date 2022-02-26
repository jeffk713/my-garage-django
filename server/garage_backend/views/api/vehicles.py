from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models
from garage_backend.serializers import VehicleSerializer
from garage_backend.views.view_utils.exception_utils import get_error_message_list
from garage_backend.views.view_utils.object_utils import get_object_by_id


class Vehicle(APIView):
    """
    create a new vehicle
    """
    
    def post(self, request, format=None):
        try:
            serializer = VehicleSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True): 
                    serializer.save()

            return JsonResponse(serializer.data, status=201)
        
        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class VehicleDetail(APIView):
    """
    Retrieve, update, and delete an existing vehicle
    """
    
    def get(self, request, vehicle_id, format=None):
        try:
            vehicle = get_object_by_id(models.Vehicle, vehicle_id)
            if not vehicle: 
                return JsonResponse({"error": ["Vehicle not found"]}, status=400)
            serializer = VehicleSerializer(vehicle)

            return JsonResponse(serializer.data)

        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
        
    def patch(self, request, vehicle_id, format=None):
        pass