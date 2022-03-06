from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import exception_utils, object_utils

class UserDetail(APIView):
    """
    Retrieve, update, or delete an existing user by user ID
    """

    def get(self, request, user_id, format=None):
        try:
            user = object_utils.get_object_by_id(models.User, user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            return JsonResponse(serializer.data)
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, user_id, format=None):
        try:
            user = object_utils.get_object_by_id(models.User, user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = serializers.UserSerializer(user, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()
            
            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
        
    def delete(self, request, user_id, format=None):
        try:
            user = object_utils.get_object_by_id(models.User, user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            user.delete()
            
            return JsonResponse(serializer.data)
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)