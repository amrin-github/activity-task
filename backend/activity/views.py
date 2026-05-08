from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Activity
from .serializers import ActivitySerializer
from django.db.models import Sum

# Create your views here.

# GET + POST
class ActivityList(APIView):
    def get(self, request):
        activities = Activity.objects.all()
        serializer = ActivitySerializer(
            activities,
            many=True
        )
        return Response(serializer.data)

    def post(self, request):
        serializer = ActivitySerializer(
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

# summary
class Summary(APIView):

    def get(self, request):

        total_entries = Activity.objects.count()

        total_hours = Activity.objects.aggregate(
            Sum('hours')
        )['hours__sum'] or 0

        most_active = (
            Activity.objects
            .values('name')
            .annotate(total=Sum('hours'))
            .order_by('-total')
            .first()
        )

        return Response({
            "total_entries": total_entries,
            "total_hours": total_hours,
            "most_active_user":
                most_active['name']
                if most_active else "None"
        })

# DELETE 
class ActivityDelete(APIView):
    def delete(self, request, id):
        try:
            activity = Activity.objects.get(id=id)
        except Activity.DoesNotExist:
            return Response(
                {"error": "Activity not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        activity.delete()
        return Response(
            {"message": "Deleted successfully"},
            status=status.HTTP_200_OK
        )