from django.test import TestCase
from django.contrib.auth import get_user_model
from django.db import IntegrityError

from garage_backend.models.shop import Shop


class ShopeModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(
            email='shop.tester@test.com',
            name='shop.tester',
            password='test123',
        )
        
    def test_create_shop(self):
        """ Test, create shop """
        
        shop = Shop.objects.create(
            name='my fav shop',
            contact='1234567890',
            address='1234 somewhere st, Vancouver, BC',
            user=self.user,
        )
        
        self.assertEqual(shop.name, 'my fav shop')
        self.assertEqual(shop.user, self.user)
        
    def test_create_shop_with_invalid_contact_and_address(self):
        """ Test, create shop with invalid contact and address raises no error """
        
        shop = Shop.objects.create(
            name='my second fav shop',
            contact=None,
            address=None,
            user=self.user,
        )
        
        self.assertEqual(shop.name, 'my second fav shop')
        self.assertEqual(shop.user, self.user)
        
    def test_create_shop_with_invalid_name(self):
        """ Test, create shop with invalid name raises error """
        
        with self.assertRaises(IntegrityError):
            shop = Shop.objects.create(
                name=None,
                contact='1234567890',
                address='1234 somewhere st, Vancouver, BC',
                user=self.user,
            )
            
    def test_create_shop_with_invalid_user(self):
        """ Test, create shop with invalid user raises error """
        
        with self.assertRaises(IntegrityError):
            shop = Shop.objects.create(
                name='my third fav shop',
                contact='1234567890',
                address='1234 somewhere st, Vancouver, BC',
                user=None,
            )