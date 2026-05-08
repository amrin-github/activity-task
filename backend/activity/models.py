from django.db import models

# Create your models here.

# activity
class Activity(models.Model):
    name = models.CharField(max_length=20)
    activity = models.CharField(max_length=50)
    hours = models.IntegerField()