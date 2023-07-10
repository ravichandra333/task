from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from textdisplaypanel.models import TextModel

# Create your views here.


def home(request):
    return render(request, "index.html")
def demo(request):
    return render(request, "index2.html")

def get_context_data(self, **kwargs):
    context = self().get_context_data(**kwargs)
    text = TextModel.objects.first()
    context["text"] = text
    return context
