from django.test import TestCase
from django.contrib.auth import get_user_model


class UserModelTests(TestCase):
  
    def test_create_user_with_email(self):
        ''' Test creating a new user with email successfully '''
        email = 'test.user@test.com'
        password = 'Testpasscode123'
        name = 'tester'
        user = get_user_model().objects.create_user(
        email=email,
        name=name,
        password=password,
        )
        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))  # django user model comes with check_password
        