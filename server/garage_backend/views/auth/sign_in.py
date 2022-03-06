from django.http import JsonResponse
from rest_framework.views import APIView

from garage_backend import serializers
from garage_backend.views.view_utils import object_utils


class SignIn(APIView):
    """
    Authenticates a user if user info is correct
    """
    
    def post(self, request, format=None):
        try:
            body = request.data
            email = body.get("email")
            password = body.get("password")
            
            user = object_utils.get_user_by_email(email)
            is_password_correct = user.check_password(password)
            if not (user and is_password_correct): 
                return JsonResponse({"error": ["User credentials incorrect"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)