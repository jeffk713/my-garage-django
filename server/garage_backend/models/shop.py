from django.db import models

from .custom_model import CustomModel
from .user import User


class Shop(CustomModel):
    name = models.TextField(null=False, blank=False, max_length=80)
    contact = models.TextField(null=True, max_length=12)
    address = models.TextField(null=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="user_id",
        related_name="shops",
        related_query_name="shop",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)