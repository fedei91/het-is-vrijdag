from django.shortcuts import render
from datetime import datetime

# Create your views here.


def index(request):
    now = datetime.today()
    day = now.weekday()
    return render(request, "vrijdag/index.html", {"vrijdag": day == 4})