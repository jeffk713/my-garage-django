from django.utils import timezone

from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db import IntegrityError

from garage_backend.models.vehicle_note import VehicleNote
from garage_backend.models.vehicle import Vehicle


class VehicleNoteModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        user = get_user_model().objects.create_user(
        email='vehicle_note.tester@test.com',
        name='vehicle_note.tester',
        password='test123',
        )
        cls.vehicle = Vehicle.objects.create(
            nickname='vehicle note car',
            make='VW',
            model='Tiguan',
            year=2009,
            imageUrl=None,
            warrantyUntil=None,
            user=user,
        )
    
    def test_create_vehicle_note(self):
        """  Test, create vehicle note """
        
        vehicle_note = VehicleNote.objects.create(
            nextAppointment = timezone.now(),
            lfTire=8,
            rfTire=8,
            lrTire=7.5,
            rrTire=7.5,
            fBrake=11,
            rBrake=8,
            note='test note',
            vehicle = self.vehicle,
        )
        
        self.assertEqual(vehicle_note.note, 'test note')
        self.assertEqual(vehicle_note.vehicle, self.vehicle)
        
    def test_create_vehicle_note_using_with_no_measurements(self):
        """  Test, create vehicle note with no measurements raises no error """
        
        vehicle_note = VehicleNote.objects.create(
            note='test note',
            vehicle = self.vehicle,
        )
        
        self.assertEqual(vehicle_note.nextAppointment, None)
        self.assertEqual(vehicle_note.rfTire, None)
        self.assertEqual(vehicle_note.fBrake, None)
        self.assertEqual(vehicle_note.vehicle, self.vehicle)
        
    def test_create_vehicle_note_using_with_invalid_vehicle(self):
        """  Test, create vehicle note with invalid vehicle raises error """
        
        with self.assertRaises(IntegrityError):
            vehicle_note = VehicleNote.objects.create(
                note='test note',
                vehicle = None,
            )