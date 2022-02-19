from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.response import Response
from . models import (
    FoodProvideRequest,
    FoodRequest
)

#Your Serializers here -->

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
 
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            # first_name=validated_data['first_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class FoodProvideRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodProvideRequest
        fields ='__all__'


class FoodRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodRequest
        fields ='__all__'
