
from .models import Welcome
from .utils import JsonResponse

def welcome(request):
    # 查询出 order 最大的一个记录
    resp = Welcome.objects.all().order_by('-order').first()
    img = 'http://127.0.0.1:8000/media/' + str(resp.img)
    return JsonResponse({'code': 200, 'msg': '成功', 'result': img})

