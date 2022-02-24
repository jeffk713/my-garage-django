from django.contrib.auth.middleware import get_user
from django.http import HttpResponse, JsonResponse
from rest_framework.request import Request
from rest_framework.views import APIView

from garage_backend.models import User


class UserList(APIView):
    """
    List all users or create a user
    """
    
    def get(self, request, format=None):
        """ list all users """
        
    def post(self, request, format=None):
        """ create a user """


class UserDetail(APIView):
    """
    Retrieve, update, or delete an existing user by user ID
    """
    
    def get(self, request, user_id, format=None):
        """ get an existing user by user ID """
    
    def patch(self, request, user_id, format=None):
        """ update an existing user """
        
    def delete(self, request, user_id, format=None):
        """ delete an existing user """