from rest_framework import serializers
from .models import Collecton

class CollectonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collecton
        fields = ['id','name', 'avatar', 'area']

        depth = 1 ## 外键关联数据


