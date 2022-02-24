from datetime import date

from django.test import TestCase
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.db import IntegrityError

from garage_backend.models.vehicle import Vehicle
from garage_backend.models.service import Service
from garage_backend.models.parts import Parts


class PartsModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        user = get_user_model().objects.create_user(
            email='parts.tester@test.com',
            name='parts.tester',
            password='test123',
        )
        vehicle = Vehicle.objects.create(
            nickname='parts tester car',
            make='VW',
            model='Tiguan',
            year=2009,
            imageUrl=None,
            warrantyUntil=None,
            user=user,
        )
        cls.service = Service.objects.create(
            name='oil change',
            mileage=15000,
            isWarranty=True,
            note=None,
            vehicle=vehicle,
        )
    
    def test_create_parts(self):
        """ Test, create parts """
        
        parts = Parts.objects.create(
            name = 'oil filter',
            description = 'first oil change',
            warrantyUntil = date(2022, 2, 23),
            price = 50.00,
            service = self.service,
        )
        
        self.assertEqual(parts.name, 'oil filter')
        self.assertEqual(parts.service, self.service)
        
    def test_create_parts_with_missing_description_and_warrantyUntil_and_price(self):
        """ Test, create parts with missing description, warrantyUntil, price raises no error """
        
        parts = Parts.objects.create(
            name = 'oil filter',
            service = self.service,
        )

        self.assertEqual(parts.description, None)
        self.assertEqual(parts.warrantyUntil, None)
        self.assertEqual(parts.price, None)
    
    def test_create_parts_with_no_name(self):
        """ Test, create parts with no name raises error """
        
        with self.assertRaises(IntegrityError):
            parts = Parts.objects.create(
                name = None,
                service = self.service,
            )
    
    def test_create_parts_with_no_service(self):
        """ Test, create parts with no service raises error """
        
        with self.assertRaises(IntegrityError):
            parts = Parts.objects.create(
                name = 'oil filter',
                service = None,
            )