from django.test import TestCase
from django.contrib.auth import get_user_model


class UserModelTests(TestCase):
  
    def test_create_user_with_email(self):
        ''' Test, register a new user '''
        
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
        
    def test_email_converted_to_lowercase(self):
        ''' Test, email is converted to lowercase upon register '''
        
        email = 'UPPER.TESTER@TEST.COM'
        password = 'Testpasscode123'
        name = 'tester.upper'
        user = get_user_model().objects.create_user(
        email=email,
        name=name,
        password=password,
        )
        self.assertEqual(user.email, 'upper.tester@test.com')
    
    def test_new_user_with_invalid_email(self):
        ''' Test, register new user with no email raises error '''
        
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'testname', 'test123')

    def test_new_user_with_invalid_name(self):
        ''' Test, register new user with no name raises error '''
        
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('invalid.name@test.com', None, 'test123')
    
    def test_new_user_with_invalid_password(self):
        ''' Test, register new user with no password raises error '''
        
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('invalid.name@test.com', 'testname', None)