__author__ = 'davidkircos'

from ambassador.models import Link
from rest_framework import serializers

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('id', 'title', 'clicks')