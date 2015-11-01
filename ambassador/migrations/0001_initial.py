# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import ambassador.validators


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200, validators=[ambassador.validators.validate_not_landing], unique=True)),
            ],
        ),
    ]
