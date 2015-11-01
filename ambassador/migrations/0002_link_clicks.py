# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ambassador', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='link',
            name='clicks',
            field=models.IntegerField(default=0, editable=False),
        ),
    ]
