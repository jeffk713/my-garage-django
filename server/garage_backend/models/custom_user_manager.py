from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomUserManager(BaseUserManager):
  """manager for user profiles"""
  
  def create_user(self, email, name, password=None):
    """create a new user profile"""
    if not email:
        raise ValueError('User must have an email')
    
    email = self.normalize_email(email)
    user = self.model(email=email, name=name)

    print('Print self.model upon creating', user)
    
    # set hashed password, 'set_password' comes from AbstractBaseUser
    user.set_password(password)
    user.save(using=self._db) # standard procedure in django to save
    
    return user

  def create_superuser(self, email, name, password):
    """create an admin user with given details"""
    user = self.create_user(email, name, password) # 'self' parameter is automatically passed in
    
    user.is_superuser = True # is_superuser comes from PermissionsMixin
    user.is_staff = True
    user.save(using=self._db)
    
    return user