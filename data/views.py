from django.shortcuts import render
from .forms import SubjectForm, TeacherForm, ClassroomForm, ClassForm
from .models import Subject, Class, Teacher, Classroom, Classes
import collections


def index(request):
    return render(request, 'data/index.html')


def view(request):
    return render(request, 'data/view.html')


def timetable(request):
    dict = collections.OrderedDict()
    __fill_dict(dict)
    zajecia = Classes.objects.order_by('subject__name')
    classes = Class.objects.order_by('name')
    teachers = Teacher.objects.order_by('name')
    classrooms = Classroom.objects.order_by('name')
    subjects = Subject.objects.order_by('name')
    return render(request, 'data/timetable.html', 
    {'classes': classes, 'teachers': teachers, 'classrooms': classrooms,
     'classes_counter': dict, 'zajecia': zajecia, 'subjects': subjects})


def addteacher(request):
    form = TeacherForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
    context = {
        "form": form,
    }
    return render(request, 'data/addteacher.html', context)


def addsubject(request):
    form = SubjectForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
    context = {
        "form": form,
    }
    return render(request, 'data/addsubject.html', context)


def addclass(request):
    form = ClassForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
    context = {
        "form": form,
    }
    return render(request, 'data/addclass.html', context)


def addclassroom(request):
    form = ClassroomForm(request.POST or None)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.save()
    context = {
        "form": form,
    }
    return render(request, 'data/addclassroom.html', context)


def __fill_dict(dict):
    dict['1'] = 1
    dict['2'] = 2
    dict['3'] = 3
    dict['4'] = 4
    dict['5'] = 5
    dict['6'] = 6
    dict['7'] = 7
    dict['8'] = 8
    dict['9'] = 9