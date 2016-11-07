from django.conf.urls import url
from data import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^addteacher', views.addteacher, name='addteacher'),
    url(r'^addsubject', views.addsubject, name='addsubject'),
    url(r'^addclassroom', views.addclassroom, name='addclassroom'),
    url(r'^addclass', views.addclass, name='addclass'),
    url(r'^view', views.view, name='view'),
    url(r'^timetable', views.timetable, name='timetable'),
]
