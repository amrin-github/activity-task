from django.urls import path
from .views import ActivityList, Summary, ActivityDelete

urlpatterns = [
    path('activities/',ActivityList.as_view()),
    path('summary/',Summary.as_view()),
    path('activities/<int:id>/',ActivityDelete.as_view()),
]