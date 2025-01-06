from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Patient

class PatientAdmin(UserAdmin):
    list_display = ('username', 'email', 'phone', 'is_staff')
    search_fields = ('username', 'email', 'phone')
    ordering = ('email',)

admin.site.register(Patient, PatientAdmin)