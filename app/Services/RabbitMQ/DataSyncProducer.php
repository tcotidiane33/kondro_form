<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class DataSyncProducer
{
    public static function sendDataUpdate($courseId, $updatedData)
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('data_sync_queue', false, false, false, false);

        $data = json_encode(['courseId' => $courseId, 'updatedData' => $updatedData]);
        $msg = new AMQPMessage($data);
        $channel->basic_publish($msg, '', 'data_sync_queue');

        echo " [x] Sent 'Data Update'\n";

        $channel->close();
        $connection->close();
    }
}
