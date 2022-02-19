from django.contrib import admin
from . models import (
    FoodProvideRequest,
    FoodRequest
)
# Register your models here.
admin.site.register(FoodProvideRequest)
admin.site.register(FoodRequest)
