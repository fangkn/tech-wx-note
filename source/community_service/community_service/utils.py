from django.http import JsonResponse as DjangoJsonResponse

class JsonResponse(DjangoJsonResponse):
    def __init__(self, data, **kwargs):
        kwargs.setdefault('json_dumps_params', {}).setdefault('ensure_ascii', False)
        super().__init__(data, **kwargs)