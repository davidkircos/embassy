__author__ = 'davidkircos'

from django.core.exceptions import ValidationError

def validate_not_landing(value):
    if value in ['landing', 'api', 'admin']:
        raise ValidationError("Link title cannot be 'landing', 'api' or 'admin'.")
