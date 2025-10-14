
from .models import Welcome
from .models import Banner
from .models import Notice
from .utils import JsonResponse

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

    data['bannerList'] = bannerList

    noticeResp = Notice.objects.all().order_by('order')
    data['noticeList'] = []
    for item in noticeResp:
        if not item.is_deleted:
            data['noticeList'].append({
                'title': item.title,
                'content': item.content,
                'img': 'http://127.0.0.1:8000/media/' + str(item.img),
                'order': item.order,
                'create_time': item.create_time.strftime('%Y-%m-%d %H:%M:%S'),
            })
    return JsonResponse({'code': 0, 'msg': '成功', 'data': data})
    

