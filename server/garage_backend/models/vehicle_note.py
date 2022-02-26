from django.db import models

from garage_backend.models.custom_model import CustomModel
from garage_backend.models.vehicle import Vehicle

class VehicleNote(CustomModel):
    nextAppointment = models.DateTimeField(null=True, auto_now=False, auto_now_add=False)
    lfTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rfTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    lrTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rrTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    fBrake = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rBrake = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    note = models.TextField(null=True)
    vehicle = models.ForeignKey(
        Vehicle,
        on_delete=models.CASCADE,
        db_column="vehicle_id",
        related_name="vehicle_notes",
        related_query_name="vehicle_note",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)