from django.db import models
from django.utils import timezone

from .service import Service


class Parts(models.Model):
    name = models.TextField(null=False, blank=False, max_length=100)
    description = models.TextField(null=True)
    warrantyUntil = models.DateField(null=True)
    price = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    service = models.ForeignKey(
        Service, 
        on_delete=models.CASCADE,
        db_column="service_id",
        related_name="parts",
        related_query_name="part",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)