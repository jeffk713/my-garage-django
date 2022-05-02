from django.http import JsonResponse
from django.db import IntegrityError
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from garage_backend import models, serializers


class Register(APIView):
    """
    Register a user
    """
    
    def post(self, request, format=None):
        try:
            body = request.data
            email = body.get("email")
            name = body.get("name")
            password = body.get("password")
            
            user = models.User.objects.create_user(
            email=email,
            name=name,
            password=password,
            )
            serializer = serializers.UserSerializer(user)
            token = Token.objects.get(user=user).key
            
            userData = {**serializer.data, "token": token}
            return JsonResponse(userData) 
        
        except IntegrityError as e:
            print(e)
            return JsonResponse({"error": ["The email has been already registered"]}, status=401)
        except ValueError as e:
            print(e)
            return JsonResponse({"error": ["All fields required"]}, status=400)
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)