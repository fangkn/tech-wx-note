
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


class Banner(models.Model):
    img = models.ImageField(upload_to='banner', default='bg/banner.png',verbose_name='轮播图')
    order = models.IntegerField(default=0,verbose_name='轮播图排序')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='创建时间')

    class Meta:
        verbose_name_plural = '轮播图表'
    def __str__(self):
        return str(self.img)

class Notice(models.Model):
    title = models.CharField(max_length=255, default='',verbose_name='公告标题')
    content = models.TextField(default='',verbose_name='公告内容')
    img = models.ImageField(upload_to='notice', default='bg/notice.png',verbose_name='公告图片')
    order = models.IntegerField(default=0,verbose_name='公告排序')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='创建时间')

    class Meta:
        verbose_name_plural = '公告表'
    def __str__(self):
        return str(self.title)
