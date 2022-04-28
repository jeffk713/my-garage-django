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
            user_id = request.session["user_id"]
            if not user_id: 
                return JsonResponse({"error": ["sesion required"]}, status=400)

            dict_request_data = request.data.dict()
            vehicle_data = {**dict_request_data, "user": user_id}
            serializer = serializers.VehicleSerializer(data=vehicle_data)

            if serializer.is_valid(raise_exception=True): 
                    serializer.save()

            return JsonResponse(serializer.data, status=201)

        except Exception as e:
            print(e)
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

        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, vehicle_id, format=None):
        try:
            vehicle = object_utils.get_object_by_id(models.Vehicle, vehicle_id)
            if not vehicle: 
                return JsonResponse({"error": ["Vehicle not found"]}, status=400)
            
            dict_request_data = request.data.dict()
            serializer = serializers.VehicleSerializer(vehicle, data=dict_request_data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def delete(self, request, vehicle_id, format=None):
        try:
            vehicle = object_utils.get_object_by_id(models.Vehicle, vehicle_id)
            if not vehicle: 
                return JsonResponse({"error": ["Vehicle not found"]}, status=400)

            serializer = serializers.VehicleSerializer(vehicle)
            vehicle.delete()

            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)