# Generated by Django 3.2 on 2022-02-28 07:58

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0002_auto_20220228_0756'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateField(default=datetime.datetime(2022, 2, 28, 7, 58, 40, 342859, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='vehiclenote',
            name='vehicle',
            field=models.ForeignKey(db_column='vehicle_id', on_delete=django.db.models.deletion.CASCADE, related_name='vehicleNote', to='garage_backend.vehicle', unique=True),
        ),
    ]
