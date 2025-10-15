
from .models import Welcome
from .models import Banner
from .models import Notice
from .models import Bottom
from .models import Collecton
from .utils import JsonResponse

from django.utils import timezone
 

def welcome(request):
    # 查询出 order 最大的一个记录
    resp = Welcome.objects.all().order_by('-order').first()
    img = 'http://127.0.0.1:8000/media/' + str(resp.img)
    return JsonResponse({'code': 0, 'msg': '成功', 'result': img})

def index(request):
    data = {}

    bannerResp = Banner.objects.all().order_by('order')
    bannerList = []
    for item in bannerResp: 
        bannerList.append({
            'img': 'http://127.0.0.1:8000/media/' + str(item.img),
            'order': item.order,
        })

    data['banner_list'] = bannerList

    noticeResp = Notice.objects.all().order_by('order')
    data['notice_list'] = []
    for item in noticeResp:
        if not item.is_deleted:
            data['notice_list'].append({
                'title': item.title,
                'content': item.content,
                'img': 'http://127.0.0.1:8000/media/' + str(item.img),
                'order': item.order,
                'create_time': item.create_time.strftime('%Y-%m-%d %H:%M:%S'),
            })
            
    bottomResp = Bottom.objects.all().order_by('order')
    data['bottom_list'] = []
    for item in bottomResp:
        if not item.is_deleted:
            data['bottom_list'].append({
                'img': 'http://127.0.0.1:8000/media/' + str(item.img),
                'order': item.order,
            })
            
    return JsonResponse({'code': 0, 'msg': '成功', 'data': data})
    

def collecton(request):
    queryset = Collecton.objects.filter(is_deleted=False).order_by('-create_time')
    data_list = []
    for obj in queryset:
        data_list.append({
            'id': obj.id,
            'name': obj.name,
            'avatar': 'http://127.0.0.1:8000/media/' + str(obj.avatar),
            'area': obj.area.name if obj.area else '',
        })

    # 今日采集人数
    today = timezone.localdate()
    today_count = queryset.filter(create_time__date=today).count()

    return JsonResponse({
        'code': 0,
        'msg': '成功',
        'data': data_list,
        'today_count': today_count,
    })