from django.contrib import admin

# Register your models here.
from .models import Link

class LinkAdmin(admin.ModelAdmin):
    model = Link
    list_display = ['title']

admin.site.register(Link, LinkAdmin)