from django.shortcuts import render
from django.shortcuts import render
from .models import Link
from rest_framework import viewsets
from .serializers import LinkSerializer

# Create your views here.

def index(request):

    return render(request, 'ambassador/index.html')


class LinkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ReferralLinks to be viewed or edited.
    """
    queryset = Link.objects.all().order_by('-clicks')
    serializer_class = LinkSerializer