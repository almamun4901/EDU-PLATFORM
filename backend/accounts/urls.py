from django.urls import path
# from .views import register, login
from .views import RegisterView, LoginView, user_profile

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("profile/", user_profile, name="profile"),
]
