from django.db import models
from django.contrib.auth.models import User
# Create your models here.

MEAL_TIMING =(
    ('BF', 'Breakfast'),
    ("LN", "Lunch"),
    ("DN", "Dinner"),

)
 

class FoodProvideRequest(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    meal_time= models.CharField(max_length=2, choices=MEAL_TIMING)
    is_pending = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    food_item_count = models.IntegerField(default=0)
    is_veg = models.BooleanField(default=True)
    is_packed = models.BooleanField(default=False)
    prep_time = models.FloatField(default=0)
    address = models.TextField()
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    phone_number = models.CharField(max_length=10)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lattitude = models.FloatField(default=0)
    longitude = models.FloatField(default=0)
    def __str__(self):
        return self.title


class FoodRequest(models.Model):
    food_provide_request = models.ForeignKey(FoodProvideRequest, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
    address = models.TextField(null = True, blank= True)
    city = models.CharField(max_length=100, null= True, blank= True)
    pincode = models.CharField(max_length=6, null= True, blank= True)
    phone_number = models.CharField(max_length=10, null= True, blank= True)
    org = models.CharField(max_length=100, null= True, blank= True)
    description = models.TextField( null= True, blank= True)
    servings = models.IntegerField(default=0)

    def __str__(self):
        return self.food_provide_request.title + " by : " + self.user.username
