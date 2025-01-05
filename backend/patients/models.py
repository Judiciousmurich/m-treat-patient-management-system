from django.db import models
from django.contrib.auth.models import AbstractUser

class Patient(AbstractUser):
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    
    def __str__(self):
        return self.email