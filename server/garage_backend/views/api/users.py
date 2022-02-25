from django.contrib.auth.middleware import get_user
from django.contrib.auth import get_user_model
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError

from rest_framework.request import Request
from rest_framework.views import APIView


class User(APIView):
    """
    Create a user
    """
        
    def post(self, request, format=None):
        try:
            body = request.data
            email = body.get("email")
            name = body.get("name")
            password = body.get("password")
            
            if not (email and name and password):
                return JsonResponse({"error": "Email, name, and password are required"}, status=400)
                
            user = User(
                email=email,
                password=password,
                name=name
            )
            user.save()
            user_dict = user.to_dict()
            
            return JsonResponse(user_dict, status=201)
        
        except IntegrityError as e:
            return JsonResponse({"error": "User already exists"}, status=400)
        except Exception as e:
            return JsonResponse({"error": "Server error has occurred"}, status=500)


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
                return JsonResponse({"error": "User not found"}, status=400)
            user_dict = user.to_dict()
            
            return JsonResponse(user_dict)
        
        except Exception as e:
            return JsonResponse({"error": "Server error has occurred"}, status=500)
    
    def patch(self, request, user_id, format=None):
        """ update an existing user """
        
    def delete(self, request, user_id, format=None):
        """ delete an existing user """