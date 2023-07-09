from turtle import title
from django.db import models

# Create your models here.

class TextModel(models.Model):
    content = models.TextField(default='default your text')
    
    
    def __str__(self):
        return self.content

