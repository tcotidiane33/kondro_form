<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;

class CertificateConsumer
{
    public static function consume()
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('certificate_queue', false, false, false, false);

        echo " [*] Waiting for messages. To exit press CTRL+C\n";

        $callback = function ($msg) {
            $data = json_decode($msg->body, true);
            $userId = $data['userId'];
            $courseId = $data['courseId'];

            // Générer le certificat pour l'utilisateur
            echo " [x] Generating certificate for user $userId for course $courseId\n";
        };

        $channel->basic_consume('certificate_queue', '', false, true, false, false, $callback);

        while ($channel->is_consuming()) {
            $channel->wait();
        }

        $channel->close();
        $connection->close();
    }
}
