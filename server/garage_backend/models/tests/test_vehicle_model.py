from datetime import date

from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db import IntegrityError

from garage_backend.models.vehicle import Vehicle


class VehicleModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(
        email='vehicle.tester@test.com',
        name='vehicle.tester',
        password='test123',
        )
        
    def test_create_vehicle(self):
        ''' Test, register new vehicle '''
        
        vehicle = Vehicle.objects.create(
            nickname='tester.vehicle',
            make='Toyota',
            model='Tacoma',
            year=2022,
            imageUrl=None,
            warrantyUntil=date(2026, 10, 15),
            shopId=None,
            user=self.user,
        )
        
        self.assertEqual(vehicle.nickname, 'tester.vehicle')
        self.assertEqual(vehicle.user, self.user)
        
    def test_create_vehicle_with_invalid_user(self):
        ''' Test, register new vehicle with invalid user raises error '''
        
        with self.assertRaises(IntegrityError):
            Vehicle.objects.create(
                nickname='tester.vehicle',
                make='BMW',
                model='340xi',
                year=2022,
                imageUrl=None,
                warrantyUntil=date(2026, 10, 15),
                shopId=None,
                user=None,
            )