from django.db import models
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
  """ manager for user """
  
  def create_user(self, email, name, password):
    """ create a new user """
    
    if not email or not name or not password:
        raise ValueError('Please submit all required fields')
    
    email = email.lower()
    user = self.model(email=email, name=name)
    
    # set hashed password, 'set_password' comes from AbstractBaseUser
    user.set_password(password)
    user.save(using=self._db) # standard procedure in django to save
    
    return user

  def create_superuser(self, email, name, password):
    """ create an admin user """
    user = self.create_user(email, name, password) # 'self' parameter is automatically passed in
    
    user.is_superuser = True # is_superuser comes from PermissionsMixin
    user.is_staff = True
    user.save(using=self._db)
    
    return user