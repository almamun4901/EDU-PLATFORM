from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the Django Backend API!"})

urlpatterns = [
    path('', home),  # ✅ New homepage route
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
]
