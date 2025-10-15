
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

class Bottom(models.Model):
    img = models.ImageField(upload_to='bottom', default='bg/bottom.png',verbose_name='底部图片')
    order = models.IntegerField(default=0,verbose_name='底部排序')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='创建时间')

    class Meta:
        verbose_name_plural = '底部表'
    def __str__(self):
        return str(self.img)


class Collecton(models.Model):
    name = models.CharField(max_length=255, default='',verbose_name='采集人姓名')
    name_pingyin = models.CharField(max_length=255, default='',verbose_name='采集人姓名拼音', null=True)
    avatar = models.ImageField(upload_to='collecton/%Y/%m/%d/',default='default.png',verbose_name='采集人头像')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='采集时间')
    area = models.ForeignKey('Area', null=True, verbose_name='风格区域', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = '采集表'
    def __str__(self):
        return str(self.name)

class Area(models.Model):
    name = models.CharField(max_length=255, default='',verbose_name='区域名称')
    desc = models.TextField(default='',verbose_name='区域简称')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='创建时间')
    user = models.ForeignKey(to='UserInfo', null=True, verbose_name='负责用户', on_delete=models.CASCADE) # 和用户 是一对多的关系，一个用户可以负责多个区域

    class Meta:
        verbose_name_plural = '区域表'
    def __str__(self):
        return str(self.name)

class UserInfo(models.Model):
    name = models.CharField(max_length=255, default='',verbose_name='用户姓名')
    avatar = models.ImageField(upload_to='user',default='default.png',verbose_name='用户头像')
    score = models.IntegerField(default=0,verbose_name='用户积分')
    is_deleted = models.BooleanField(default=False,verbose_name='是否删除')
    create_time = models.DateTimeField(auto_now_add=True,verbose_name='创建时间')

    class Meta:
        verbose_name_plural = '用户表'
    def __str__(self):
        return str(self.name)



