from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import exception_utils, object_utils


class Shop(APIView):
    """
    Create a shop
    """
    
    def post(self, request, format=None):
        try:
            serializer = serializers.ShopSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data, status=201)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class ShopDetail(APIView):
    """
    Retrieve, update, or delete an existing shop by shop ID
    """

    def get(self, request, shop_id, format=None):
        try:
            shop = object_utils.get_object_by_id(models.Shop, shop_id)
            if not shop: 
                return JsonResponse({"error": ["Shop not found"]}, status=400)
            
            serializer = serializers.ShopSerializer(shop)
            return JsonResponse(serializer.data)
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
    
    def patch(self, request, shop_id, format=None):
        try:
            shop = object_utils.get_object_by_id(models.Shop, shop_id)
            if not shop: 
                return JsonResponse({"error": ["Shop not found"]}, status=400)
            
            serializer = serializers.ShopSerializer(shop, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()
            
            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)
        
    def delete(self, request, shop_id, format=None):
        try:
            shop = object_utils.get_object_by_id(models.Shop, shop_id)
            if not shop: 
                return JsonResponse({"error": ["Shop not found"]}, status=400)
            
            serializer = serializers.ShopSerializer(shop)
            shop.delete()
            
            return JsonResponse(serializer.data)
        
        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)