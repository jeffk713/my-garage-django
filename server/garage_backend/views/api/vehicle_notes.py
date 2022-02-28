from django.http import JsonResponse
from django.db import IntegrityError

from rest_framework.views import APIView

from garage_backend import models, serializers
from garage_backend.views.view_utils import exception_utils, object_utils


class VehicleNote(APIView):
    """
    Create a vehicle note
    """

    def post(self, request, format=None):
        try:
            serializer = serializers.VehicleNoteSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data, status=201)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)


class VehicleNoteDetail(APIView):
    """
    Retrieve, update, or delete an existing vehicle note by vehicle note ID
    """

    def get(self, request, vehicle_note_id, format=None):
        try:
            vehicle_note = object_utils.get_object_by_id(models.VehicleNote, vehicle_note_id)
            if not vehicle_note: 
                return JsonResponse({"error": ["Vehicle note not found"]}, status=400)
            print(vehicle_note.vehicle)
            serializer = serializers.VehicleNoteSerializer(vehicle_note)
            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def patch(self, request, vehicle_note_id, format=None):
        try:
            vehicle_note = object_utils.get_object_by_id(models.VehicleNote, vehicle_note_id)
            if not vehicle_note: 
                return JsonResponse({"error": ["Vehicle note not found"]}, status=400)

            serializer = serializers.VehicleNoteSerializer(vehicle_note, data=request.data, partial=True)
            if serializer.is_valid(raise_exception=True): 
                serializer.save()

            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            if err := serializer.errors:
                return JsonResponse({"error": exception_utils.get_error_message_list(err)}, status=400)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)

    def delete(self, request, vehicle_note_id, format=None):
        try:
            vehicle_note = object_utils.get_object_by_id(models.VehicleNote, vehicle_note_id)
            if not vehicle_note: 
                return JsonResponse({"error": ["Vehicle note not found"]}, status=400)

            serializer = serializers.VehicleNoteSerializer(vehicle_note)
            vehicle_note.delete()

            return JsonResponse(serializer.data)

        except Exception as e:
            print(e)
            return JsonResponse({"error": ["Server error has occurred"]}, status=500)