from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend.serializers import UserSerializer
from garage_backend.views.view_utils.exception_utils import get_error_message_list
from garage_backend.views.view_utils.object_utils import get_object_by_id


class User(APIView):
    """
    List all users or create a user
    """
        
    def get(self, request, format=None):
        try:
            users = get_user_model().objects.all().order_by("id")
            serializer = UserSerializer(users, many=True)

            return JsonResponse(serializer.data, safe=False)
        
        except Exception:
            print(Exception)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)    
        
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

    def get(self, request, user_id, format=None):
        try:
            user = get_object_by_id(get_user_model(), user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
        
        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, user_id, format=None):
        try:
            user = get_object_by_id(get_user_model(), user_id)
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
        try:
            user = get_object_by_id(get_user_model(), user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = UserSerializer(user)
            user.delete()
            
            return JsonResponse(serializer.data)
        
        except Exception:
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)