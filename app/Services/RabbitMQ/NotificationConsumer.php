<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;

class NotificationConsumer
{
    public static function consume()
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('notification_queue', false, false, false, false);

        echo " [*] Waiting for messages. To exit press CTRL+C\n";

        $callback = function ($msg) {
            $data = json_decode($msg->body, true);
            $userId = $data['userId'];
            $courseId = $data['courseId'];

            // Envoyer une notification à l'utilisateur
            echo " [x] Sending notification to user $userId for course $courseId\n";
        };

        $channel->basic_consume('notification_queue', '', false, true, false, false, $callback);

        while ($channel->is_consuming()) {
            $channel->wait();
        }

        $channel->close();
        $connection->close();
    }
}
