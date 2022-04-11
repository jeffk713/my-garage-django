from django.db import models

from .vehicle import Vehicle


class VehicleNote(models.Model):
    nextAppointment = models.DateTimeField(null=True, auto_now=False, auto_now_add=False)
    lfTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rfTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    lrTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rrTire = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    fBrake = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    rBrake = models.DecimalField(null=True, max_digits=3, decimal_places=1)
    note = models.TextField(null=True, blank=True)
    vehicle = models.OneToOneField(
        Vehicle,
        on_delete=models.CASCADE,
        related_name="vehicleNote",
    )
    
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)