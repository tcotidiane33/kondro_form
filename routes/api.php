<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RabbitMQController;

Route::post('/send-notification', [RabbitMQController::class, 'sendNotification']);
Route::post('/send-quiz-result', [RabbitMQController::class, 'sendQuizResult']);
Route::post('/request-certificate', [RabbitMQController::class, 'requestCertificate']);
Route::post('/send-data-update', [RabbitMQController::class, 'sendDataUpdate']);
