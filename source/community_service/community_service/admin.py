from django.contrib import admin
from .models import Welcome
from .models import Banner
from .models import Notice

admin.site.register(Welcome)
admin.site.register(Banner)
admin.site.register(Notice)
