from django.db import models

from .custom_model import CustomModel
from .user import User

class Vehicle(CustomModel):
    nickname = models.CharField(blank=False, null=False, max_length=30)
    make = models.CharField(blank=False, null=False, max_length=30)
    model = models.CharField(blank=False, null=False, max_length=30)
    year = models.IntegerField(blank=False, null=False)
    image_url = models.TextField(blank=False, null=False)
    warranty_until = models.DateField()
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="user_id",
        related_name="users",
        related_query_name="user"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)