<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class NotificationProducer
{
    public static function sendNotification($userId, $courseId)
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('notification_queue', false, false, false, false);

        $data = json_encode(['userId' => $userId, 'courseId' => $courseId]);
        $msg = new AMQPMessage($data);
        $channel->basic_publish($msg, '', 'notification_queue');

        echo " [x] Sent 'Notification'\n";

        $channel->close();
        $connection->close();
    }
}
