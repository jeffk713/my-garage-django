from django.http import JsonResponse
from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import object_utils


class Authenticate(APIView):
    """ 
    Reauthenticate a user with session cookie
    """
    
    def get(self, request, format=None):
        try:
            user_id = request.session["user_id"]
            if not user_id: 
                return JsonResponse({"error": ["sesion required"]}, status=400)
            user = object_utils.get_object_by_id(models.User, user_id)
            if not user: 
                return JsonResponse({"error": ["User not found"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            return JsonResponse(serializer.data)
        
        except KeyError as e:
            print(e)
            return JsonResponse({"error": ["Initial sign in required to be reauthenticated"]}, status=400)
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)