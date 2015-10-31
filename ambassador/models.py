from django.db import models

# Create your models here.
from django.db import models
from ambassador import validators

# Create your models here.
class ReferralLink(models.Model):
    title = models.CharField(max_length=200, unique=True, validators=[validators.validate_not_landing])