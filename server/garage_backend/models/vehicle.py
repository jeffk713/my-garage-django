from django.db import models

from .user import User


class Vehicle(models.Model):
    nickname = models.TextField(blank=False, null=False, max_length=50)
    make = models.TextField(blank=False, null=False, max_length=50)
    model = models.TextField(blank=False, null=False, max_length=50)
    year = models.IntegerField(blank=False, null=False)
    imageUrl = models.TextField(null=True)
    warrantyUntil = models.DateField(null=True)
    shopId = models.IntegerField(null=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="user_id",
        related_name="vehicles",
        related_query_name="vehicle",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)