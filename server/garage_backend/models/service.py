from django.db import models
from django.utils import timezone

from .vehicle import Vehicle


class Service(models.Model):
    
    class Meta:
        ordering = ['-serviceDate']
    
    name = models.TextField(blank=False, null=False, max_length=120)
    mileage = models.IntegerField(blank=False, null=False)
    serviceDate = models.DateField(null=False, default=timezone.now())
    price = models.DecimalField(default=0, max_digits=10, decimal_places=2)
    isWarranty = models.BooleanField(default=False)
    note = models.TextField(null=True, blank=True)
    vehicle = models.ForeignKey(
        Vehicle,
        on_delete=models.CASCADE,
        db_column="vehicle_id",
        related_name="services",
        related_query_name="service",
    )

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)