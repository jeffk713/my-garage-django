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
            user = request.user
            if not user: 
                return JsonResponse({"error": ["Authentication required"]}, status=400)
            
            serializer = serializers.UserSerializer(user)
            return JsonResponse(serializer.data)
        
        except KeyError as e:
            print(e)
            return JsonResponse({"error": ["Initial sign in required to be reauthenticated"]}, status=400)
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)