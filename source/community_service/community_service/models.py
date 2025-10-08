
from faulthandler import is_enabled
from tabnanny import verbose
from django.db import models

# 要安装 pillow 库，用于处理图片 支持上传文件
# pip install pillow

class  Welcome(models.Model):
    img = models.ImageField(upload_to='welcome', default='bg/welcome.png')
    order = models.IntegerField(default=0)
    is_deleted = models.BooleanField(default=False)
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = '欢迎表'
    
