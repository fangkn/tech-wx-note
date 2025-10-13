
from .models import Welcome
from .models import Banner
from .models import Notice
from .utils import JsonResponse

def welcome(request):
    # 查询出 order 最大的一个记录
    resp = Welcome.objects.all().order_by('-order').first()
    img = 'http://127.0.0.1:8000/media/' + str(resp.img)
    return JsonResponse({'code': 0, 'msg': '成功', 'result': img})

def banner(request):
    resp = Banner.objects.all().order_by('order')
    data = []
    for item in resp:
        data.append({
            'img': 'http://127.0.0.1:8000/media/' + str(item.img),
            'order': item.order,
        })
    return JsonResponse({'code': 0, 'msg': '成功', 'result': data})

def notice(request):
    resp = Notice.objects.all().order_by('-create_time')
    data = []
    for item in resp:
        if not item.is_deleted:
            data.append({
                'title': item.title,
                'content': item.content,
                'img': 'http://127.0.0.1:8000/media/' + str(item.img),
                'create_time': item.create_time.strftime('%Y-%m-%d %H:%M:%S'),
            })
    return JsonResponse({'code': 0, 'msg': '成功', 'result': data})