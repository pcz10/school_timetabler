from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=20)
    hours_per_week = models.IntegerField() #todo: do wyjebania

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Teacher(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject)

    def __unicode__(self):
        return str(self.name + " " + self.surname)

    def __str__(self):
        return str(self.name + " " + self.surname)


class Class(models.Model):
    name = models.CharField(max_length=5)
    students_amount = models.IntegerField()

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Classroom(models.Model):
    name = models.CharField(max_length=5)
    capacity = models.IntegerField()

    def __unicode__(self):
        return str(self.name)

    def __str__(self):
        return str(self.name)


class Classes(models.Model):
    classes_number = models.IntegerField()
    day = models.CharField(max_length=20)
    teacher = models.ForeignKey(Teacher) 
    subject = models.ForeignKey(Subject)
    room = models.ForeignKey(Classroom)

    def __unicode__(self):
        return str(self.day + self.teacher + self.subject + self.room + str(self.classes_number))

    def __str__(self):
        return str(self.day + self.teacher + self.subject + self.room + str(self.classes_number))
