import datetime

from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db import IntegrityError

from garage_backend.models.vehicle import Vehicle


class VehicleModelTests(TestCase):
    
    @classmethod
    def setUpTestData(User):
        User.prev_vehicle_count = Vehicle.objects.count()
        User.user = get_user_model().objects.create_user(
        email='vehicle.tester@test.com',
        name='vehicle.tester',
        password='test123'
        )
        
    def test_create_vehicle(self):
        ''' Test, register new vehicle '''
        
        Vehicle.objects.create(
            nickname='tester.vehicle',
            make='Toyota',
            model='Tacoma',
            year=2022,
            imageUrl=None,
            warrantyUntil=datetime.datetime(2026, 10, 15),
            user=self.user
        )
        
        current_vehicle_count = Vehicle.objects.count()
        
        self.assertEqual(self.prev_vehicle_count+1, current_vehicle_count)
        
    def test_create_vehicle_with_invalid_user(self):
        ''' Test, register new vehicle with invalid user raises error '''
        
        with self.assertRaises(IntegrityError):
            Vehicle.objects.create(
                nickname='tester.vehicle',
                make='BMW',
                model='340xi',
                year=2022,
                imageUrl=None,
                warrantyUntil=datetime.datetime(2026, 10, 15),
                user=None
            )