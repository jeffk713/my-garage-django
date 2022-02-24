from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db import IntegrityError
from django.utils import timezone

from garage_backend.models import Vehicle
from garage_backend.models import Service


class ServiceModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        user = get_user_model().objects.create_user(
        email='service.tester@test.com',
        name='service.tester',
        password='test123',
        )
        cls.vehicle = Vehicle.objects.create(
            nickname='service car',
            make='VW',
            model='Tiguan',
            year=2009,
            imageUrl=None,
            warrantyUntil=None,
            shopId=None,
            user=user,
        )


    def test_create_service(self):
        """ test create service for registered vehicle using default values  """
        
        # serviceDate and price will be saved as default value
        service = Service.objects.create(
            name='oil change',
            mileage=15000,
            isWarranty=True,
            note=None,
            vehicle=self.vehicle,
        )
        fail_message = 'Time compare failed'
        
        self.assertEqual(service.name, 'oil change')
        self.assertEqual(service.mileage, 15000)
        self.assertLess(service.serviceDate, timezone.now(), fail_message)
        self.assertEqual(service.price, 0)


    def test_create_service_with_invalid_mileage(self):
        """ test create service with invalid mileage raises error  """
        
        with self.assertRaises(IntegrityError):
            service = Service.objects.create(
                name='oil change2',
                mileage=None,
                isWarranty=True,
                note=None,
                vehicle=self.vehicle,
            )


    def test_create_service_with_no_vhicle(self):
        """ test create service with no vehicle raises error  """
        
        with self.assertRaises(IntegrityError):
            service = Service.objects.create(
                name='oil change3',
                mileage=40000,
                isWarranty=True,
                note=None,
                vehicle=None,
            )