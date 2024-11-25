<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RabbitMQ\NotificationProducer;
use App\Services\RabbitMQ\QuizResultProducer;
use App\Services\RabbitMQ\CertificateProducer;
use App\Services\RabbitMQ\DataSyncProducer;

class RabbitMQController extends Controller
{
    public function sendNotification(Request $request)
    {
        NotificationProducer::sendNotification($request->userId, $request->courseId);
        return response()->json(['message' => 'Notification sent successfully']);
    }

    public function sendQuizResult(Request $request)
    {
        QuizResultProducer::sendQuizResult($request->userId, $request->quizId, $request->score);
        return response()->json(['message' => 'Quiz result sent successfully']);
    }

    public function requestCertificate(Request $request)
    {
        CertificateProducer::requestCertificate($request->userId, $request->courseId);
        return response()->json(['message' => 'Certificate request sent successfully']);
    }

    public function sendDataUpdate(Request $request)
    {
        DataSyncProducer::sendDataUpdate($request->courseId, $request->updatedData);
        return response()->json(['message' => 'Data update sent successfully']);
    }
}
