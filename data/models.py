from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=20)

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
    grade = models.CharField(max_length=5, default='')
    classes_number = models.CharField(max_length=5, default='')
    day = models.CharField(max_length=20, default='')
    room = models.CharField(max_length=50, default='')
    subject = models.CharField(max_length=50, default='')
    teacher = models.CharField(max_length=50, default='')

    def __unicode__(self):
        return str("Day: " + self.day + " Teacher: " + self.teacher + " Subject: " + self.subject +\
            " Room: " + self.room + " Classes_nr: " + self.classes_number)

    def __str__(self):
        return str("Day: " + self.day + " Teacher: " + self.teacher + " Subject: " + self.subject +\
            " Room: " + self.room + " Classes_nr: " + self.classes_number)
