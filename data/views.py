from django.shortcuts import render
from .forms import SubjectForm, TeacherForm, ClassroomForm, ClassForm
from .models import Subject


def index(request):
    return render(request, 'data/index.html')

def view(request):
    return render(request, 'data/view.html')

def timetable(request):
    subjects = Subject.objects.order_by('name')
    return render(request, 'data/timetable.html', {'subjects': subjects})

def entry(request):
    return render(request, 'data/entry.html')

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

