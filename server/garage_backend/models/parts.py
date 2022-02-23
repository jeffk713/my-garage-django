from django.db import models
from django.utils import timezone

from garage_backend.models.custom_model import CustomModel
from garage_backend.models.service import Service


class Parts(CustomModel):
    name = models.TextField(null=False, blank=False, max_length=100)
    description = models.TextField(null=True)
    warrantyUntil = models.DateField(null=True)
    price = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    service = models.ForeignKey(
        Service, 
        on_delete=models.CASCADE,
        related_name="parts",
        related_query_name="part",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)