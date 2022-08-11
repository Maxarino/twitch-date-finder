import os

from datetime import datetime

from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from dotenv import load_dotenv

from twitchAPI.twitch import Twitch

CLIP_ERROR_RESPONSE = JsonResponse({
    'status_code': 400,
    'error': 'Invalid clip URL.'
})

# Initialise environment variables
load_dotenv()

class GetClipDate(APIView):
    def get(self, request):
        url = self.request.GET.get('q')

        if "clip" not in url:
            return CLIP_ERROR_RESPONSE

        clip_id = url[url.find("clip") + 5:]

        if clip_id == '' or clip_id[0] == ' ':
            return CLIP_ERROR_RESPONSE

        app_id = os.environ.get("TWITCH_APP_ID")
        app_secret = os.environ.get("TWITCH_APP_SECRET")
        twitch = Twitch(app_id, app_secret)

        clip_info = twitch.get_clips(clip_id=clip_id)

        if clip_info["data"] == []:  # No clip with the id entered exists
            return CLIP_ERROR_RESPONSE

        # Want to format the date and time being sent to the frontend
        created_at = clip_info["data"][0]["created_at"].split("T")
        date = created_at[0]
        time = datetime.strptime(created_at[1][:-1], "%H:%M:%S")
        time = time.strftime("%I:%M:%S %p")
        
        return JsonResponse({
            'status_code': 200,
            'date': date,
            'time': time
        })
