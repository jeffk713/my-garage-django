from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend.models import Vehicle
from garage_backend.serializers import VehicleSerializer


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