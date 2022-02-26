from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import exception_utils, object_utils


class Service(APIView):
    """
    create a service
    """
    
    def post(self, request, format=None):
        try:
            serializer = serializers.ServiceSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data, status=201)

        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class ServiceDetail(APIView):
    """
    Retrieve, update, and delete an existing service
    """
    
    def get(self, request, service_id, format=None):
        try:
            service = object_utils.get_object_by_id(models.Service, service_id)
            if not service: 
                return JsonResponse({"error": ["Service not found"]}, status=400)
            serializer = serializers.ServiceSerializer(service)

            return JsonResponse(serializer.data)
        
        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)