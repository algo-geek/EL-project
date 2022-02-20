from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

from . models import (
    FoodProvideRequest,
    FoodRequest
)
from . serializers import (
    UserSerializer,
    FoodProvideRequestSerializer,
    FoodRequestSerializer

)

from math import radians, cos, sin, asin, sqrt
# Create your views here.

@api_view(['GET'])
def home(request):
    return Response({"message": "Hello World"}, status=status.HTTP_200_OK)


@api_view(['POST'])
def register(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
       
        user_obj = get_object_or_404(User, id = serializer.data['id'])
        token = get_object_or_404(Token, user = user_obj)

        return Response({"serializer-data":serializer.data, "token":token.key, "username":user_obj.username}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def addFoodProvideRequest(request):
    data = request.data
    token_key = data['token']
    # user_obj = get_object_or_404(User, username = data['username'])
    token = get_object_or_404(Token, key = token_key)
    print(token)
    print(data)
    user_obj = token.user
    print(user_obj)
    data['user'] = user_obj.id
    serializer = FoodProvideRequestSerializer(data=data)
    print(serializer)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return Response({"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST) 




def distance(lat1, lat2, lon1, lon2): 
    lon1 = radians(lon1)
    lon2 = radians(lon2)
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * asin(sqrt(a))
    r = 6371
    return(c * r)

@api_view(['POST'])
def getFoodProvideRequest(request):
    data = request.data
    print(data)
    lat = data['lat']
    lon = data['lon']
    result =[]

    objs= FoodProvideRequest.objects.filter(is_active=True)
    for obj in objs:
        dist = distance(lat, obj.lattitude, lon, obj.longitude)
        print(dist)
        if dist <= abs(10):
            result.append(obj)
    serializer = FoodProvideRequestSerializer(result, many=True)

    return Response(serializer.data , status = status.HTTP_200_OK)



@api_view(['POST'])
def requestFood(request):
    data = request.data
    # user_obj = get_object_or_404(User, username = data['username'])
    # data['user'] = user_obj.id
    token_key = data['token']
    # user_obj = get_object_or_404(User, username = data['username'])
    token = get_object_or_404(Token, key = token_key)
    print(token)
    print(data)
    user_obj = token.user
    print(user_obj)
    data['user'] = user_obj.id
    serializer = FoodRequestSerializer(data=data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST)

    



     