from django.contrib import admin

from .models import Teacher
from .models import Subject
from .models import Class
from .models import Classroom
from .models import Schoolday

admin.site.register(Teacher)
admin.site.register(Subject)
admin.site.register(Class)
admin.site.register(Classroom)
admin.site.register(Schoolday)
