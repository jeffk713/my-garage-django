from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import exception_utils, object_utils


class Vehicle(APIView):
    """
    create a new vehicle
    """

    def post(self, request, format=None):
        try:
            serializer = serializers.VehicleSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True): 
                    serializer.save()

            return JsonResponse(serializer.data, status=201)
        
        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class VehicleDetail(APIView):
    """
    Retrieve, update, and delete an existing vehicle
    """
 
    def get(self, request, vehicle_id, format=None):
        try:
            vehicle = object_utils.get_object_by_id(models.Vehicle, vehicle_id)
            if not vehicle: 
                return JsonResponse({"error": ["Vehicle not found"]}, status=400)
            serializer = serializers.VehicleSerializer(vehicle)

            return JsonResponse(serializer.data)

        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, vehicle_id, format=None):
        try:
            vehicle = object_utils.get_object_by_id(models.Vehicle, vehicle_id)
            if not vehicle: 
                return JsonResponse({"error": ["Vehicle not found"]}, status=400)
            
            serializer = serializers.VehicleSerializer(vehicle, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()
            
            return JsonResponse(serializer.data)

        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)