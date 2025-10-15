from django.contrib import admin
from .models import Welcome
from .models import Banner
from .models import Notice
from .models import Bottom
from .models import Collecton
from .models import Area
from .models import UserInfo

admin.site.register(Welcome)
admin.site.register(Banner)
admin.site.register(Notice)
admin.site.register(Bottom)
admin.site.register(Collecton)
admin.site.register(Area)
admin.site.register(UserInfo)
