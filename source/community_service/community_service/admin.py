from django.contrib import admin
from .models import Welcome
from .models import Banner
from .models import Notice
from .models import Bottom

admin.site.register(Welcome)
admin.site.register(Banner)
admin.site.register(Notice)
admin.site.register(Bottom)
