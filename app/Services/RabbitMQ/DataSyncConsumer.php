<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;

class DataSyncConsumer
{
    public static function consume()
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('data_sync_queue', false, false, false, false);

        echo " [*] Waiting for messages. To exit press CTRL+C\n";

        $callback = function ($msg) {
            $data = json_decode($msg->body, true);
            $courseId = $data['courseId'];
            $updatedData = $data['updatedData'];

            // Synchroniser les données pour le cours
            echo " [x] Synchronizing data for course $courseId with data: " . json_encode($updatedData) . "\n";
        };

        $channel->basic_consume('data_sync_queue', '', false, true, false, false, $callback);

        while ($channel->is_consuming()) {
            $channel->wait();
        }

        $channel->close();
        $connection->close();
    }
}
