# Generated by Django 3.2 on 2022-02-22 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.TextField()),
                ('email', models.TextField(unique=True)),
                ('password', models.TextField()),
                ('created_at', models.DateTimeField()),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
