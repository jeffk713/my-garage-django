from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from garage_backend import serializers
from garage_backend.views.view_utils import object_utils


class SignIn(APIView):
    """
    Authenticates a user if user info is correct
    Set session cookie upon sign in
    """
    
    def post(self, request, format=None):
        try:
            body = request.data
            email = body.get("email")
            password = body.get("password")
            
            user = object_utils.get_user_by_email(email)
            if not user:
                return JsonResponse({"error": ["User credentials incorrect"]}, status=400)
            
            is_password_correct = user.check_password(password)
            if not is_password_correct: 
                return JsonResponse({"error": ["User credentials incorrect"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            token = Token.objects.get(user=user).key
            
            userData = {**serializer.data, "token": token}
            return JsonResponse(userData) 
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
        
class SignOut(APIView):
    """
    delete session cookie and sign out the user
    """
    
    def delete(self, request, format=None):
        try:
            user_id = request.session['user_id']
            del request.session['user_id']
            
            return JsonResponse({"data": [{"userId": user_id}]})
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)