__author__ = 'davidkircos'

from django.core.exceptions import ValidationError

def validate_not_landing(value):
    if value == 'landing':
        raise ValidationError("Link title cannot be 'landing'.")