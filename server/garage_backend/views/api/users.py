from django.contrib.auth.middleware import get_user
from django.contrib.auth import get_user_model
from django.http import HttpResponse, JsonResponse
from django.db import IntegrityError

from rest_framework.request import Request
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from garage_backend.serializers import UserSerializer


class User(APIView):
    """
    Create a user
    """
        
    def post(self, request, format=None):
        try:
            data = JSONParser().parse(request)
            serializer = UserSerializer(data=data)
            
            if serializer.is_valid(raise_exception=True): 
                serializer.save()
                
            return JsonResponse(serializer.data, status=201)
        
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
        user = self.get_user_by_id(user_id)
        if not user: 
            return JsonResponse({"error": "User not found"}, status=400)
        
        body = request.data
        for (key, value) in body.items():
            user._do_update(self, base_qs, using, pk_val, values, update_fields, forced_update)
        
        user_dict = user.to_dict()
            
        return JsonResponse(user_dict)
        
    def delete(self, request, user_id, format=None):
        """ delete an existing user """