from django.contrib.auth.middleware import get_user
from django.contrib.auth import get_user_model
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError

from rest_framework.request import Request
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from garage_backend.serializers import UserSerializer
from garage_backend.views.view_utils.exception_utils import get_error_message_list

class User(APIView):
    """
    Create a user
    """
        
    def post(self, request, format=None):
        try:
            serializer = UserSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data, status=201)

        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class UserDetail(APIView):
    """
    Retrieve, update, or delete an existing user by user ID
    """
    
    def get_user_by_id(self, user_id):
        try:
            return get_user_model().objects.get(pk=user_id)
        except get_user_model().DoesNotExist:
            return None

    def get(self, request, user_id, format=None):
        try:
            user = self.get_user_by_id(user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
        
        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, user_id, format=None):
        try:
            user = self.get_user_by_id(user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = UserSerializer(user, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()
            
            return JsonResponse(serializer.data)

        except Exception:
            if err := serializer.errors:
                return JsonResponse({"error": get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
        
    def delete(self, request, user_id, format=None):
        """ delete an existing user """