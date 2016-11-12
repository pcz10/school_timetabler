from django import forms
from .models import Subject, Teacher, Class, Classroom, Classes


class SubjectForm(forms.ModelForm):
    class Meta:
        model = Subject
        fields = "__all__"


class TeacherForm(forms.ModelForm):
    class Meta:
        model = Teacher
        fields = "__all__"


class ClassForm(forms.ModelForm):
    class Meta:
        model = Class
        fields = "__all__"


class ClassroomForm(forms.ModelForm):
    class Meta:
        model = Classroom
        fields = "__all__"


class ClassesForm(forms.ModelForm):
    class Meta:
        model = Classes
        fields = "__all__"
