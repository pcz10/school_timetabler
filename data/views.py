from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
from django.contrib.auth.decorators import login_required
from .forms import SubjectForm, TeacherForm, ClassroomForm, ClassForm, ClassesForm
from .models import Subject, Class, Teacher, Classroom, Classes
import collections


@login_required(login_url="login/")
def index(request):
    return render(request, 'data/index.html')


def view(request):
    classes = Classes.objects.order_by('grade')
    grades = Class.objects.order_by('name')
    teachers = Teacher.objects.order_by('name')
    classes_ctr_dict = collections.OrderedDict()
    __fill_dict(classes_ctr_dict)
    serialized_classes = serializers.serialize('json', classes)
    return render(request, 'data/view.html', {'classes': serialized_classes, 'grades': grades,
                                              'classes_counter': classes_ctr_dict, 'teachers': teachers})


def timetable(request):
    if request.is_ajax() and request.POST:
        post_object = Classes()
        post_object.grade = request.POST.get('grade')
        post_object.classes_number = request.POST.get('classes_number')
        post_object.day = request.POST.get('day')
        post_object.room = request.POST.get('room')
        post_object.subject = request.POST.get('subject')
        post_object.teacher = request.POST.get('teacher')
        form = ClassesForm(request.POST or None)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.save()
        return HttpResponse(post_object)
    else:
        dict = collections.OrderedDict()
        __fill_dict(dict)
        zajecia = Classes.objects.order_by('name')
        classes = Class.objects.order_by('name')
        teachers = Teacher.objects.order_by('name')
        classrooms = Classroom.objects.order_by('name')
        subjects = Subject.objects.order_by('name')
        serialized_subjects = serializers.serialize('json', subjects)
        return render(request, 'data/timetable.html',
        {'classes': classes, 'teachers': teachers, 'classrooms': classrooms,
            'classes_counter': dict, 'zajecia': zajecia, 'subjects': subjects,
            'serialized_subjects': serialized_subjects})


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
