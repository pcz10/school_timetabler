from django.db import models


class Subject(models.Model):
    name = models.CharField(max_length=20)
    hours_per_week = models.IntegerField()

    def __unicode__(self):
        return str(self.name)
    def __str__(self):
        return str(self.name)


class Teacher(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    subject = models.ForeignKey(Subject)

    def __unicode__(self):
        return str(self.name)
    def __str__(self):
        return str(self.name)


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


class Schoolday(models.Model):
    day = models.CharField(max_length=20)

    def __unicode__(self):
        return str(self.day)
    def __str__(self):
        return str(self.day)
