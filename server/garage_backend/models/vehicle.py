from django.db import models

from .custom_model import CustomModel
from .user import User


class Vehicle(CustomModel):
    nickname = models.TextField(blank=False, null=False, max_length=50)
    make = models.TextField(blank=False, null=False, max_length=50)
    model = models.TextField(blank=False, null=False, max_length=50)
    year = models.IntegerField(blank=False, null=False)
    image_url = models.TextField(blank=False, null=False)
    warrantyUntil = models.DateField()
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="user_id",
        related_name="users",
        related_query_name="user"
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)