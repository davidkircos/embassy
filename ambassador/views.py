from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import Link
from rest_framework import viewsets
from .serializers import LinkSerializer
from django.shortcuts import get_object_or_404
from django.core.urlresolvers import reverse

# Create your views here.

def index(request):
    return render(request, 'ambassador/index.html')

def landing(request):

    return render(request, 'ambassador/landing.html', {'referrer': request.GET.get('link','')})

def referral(request, referrertitle=None):
    referrer = get_object_or_404(Link, title=referrertitle)

    referrer.Click()

    return HttpResponseRedirect("/landing/?link=" + referrertitle)


class LinkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ReferralLinks to be viewed or edited.
    """
    queryset = Link.objects.all().order_by('-clicks')
    serializer_class = LinkSerializer