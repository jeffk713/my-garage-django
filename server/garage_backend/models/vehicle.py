from django.db import models

from .user import User


class Vehicle(models.Model):
    nickname = models.TextField(blank=False, null=False, max_length=50)
    make = models.TextField(blank=False, null=False, max_length=50)
    model = models.TextField(blank=False, null=False, max_length=50)
    year = models.IntegerField(blank=False, null=False)
    imageFile = models.FileField(null=True, upload_to="media/")
    imageUrl = models.TextField(null=True, blank=True)
    warrantyUntil = models.DateField(null=True, blank=True)
    shopId = models.IntegerField(null=True, blank=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="user_id",
        related_name="vehicles",
        related_query_name="vehicle",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)