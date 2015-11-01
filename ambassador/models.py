from django.db import models

# Create your models here.
from django.db import models
from ambassador import validators


# Create your models here.
class Link(models.Model):
    title = models.CharField(max_length=200, unique=True, blank=False, validators=[validators.validate_not_other_url])
    clicks = models.IntegerField(default=0, blank=False, editable=False)

    def Click(self):
        """
        Click the link.
        :return:
        """
        self.clicks += 1
        self.save()
