from django.db import models

from .custom_model import CustomModel


class User(CustomModel):
    username = models.TextField(null=False, blank=False)
    email = models.TextField(null=False, unique=True, blank=False)
    password = models.TextField(null=False, blank=False)
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)