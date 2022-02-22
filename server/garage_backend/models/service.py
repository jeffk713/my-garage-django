from django.db import models

from .custom_model import CustomModel
from .vehicle import Vehicle


class Service(CustomModel):
    name = models.CharField(blank=False, null=False, max_length=50)
    mileage = models.IntegerField(blank=False, null=False)
    serviceDate = models.DateField(auto_now_add=True)
    price = models.DecimalField(default=0, max_digits=10, decimal_places=2)
    note = models.TextField()
    vehicle = models.ForeignKey(
        Vehicle,
        on_delete=models.CASCADE,
        db_column="vehicle_id",
        related_name="vehicles",
        related_query_name="vehicle"
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)