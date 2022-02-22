from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .custom_model import CustomModel
from .custom_user_manager import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin, CustomModel):
    name = models.TextField(default='user', max_length=50)
    email = models.EmailField(null=False, blank=False, unique=True)
    password = models.TextField(null=False, blank=False, max_length=50)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']