<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class CertificateProducer
{
    public static function requestCertificate($userId, $courseId)
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('certificate_queue', false, false, false, false);

        $data = json_encode(['userId' => $userId, 'courseId' => $courseId]);
        $msg = new AMQPMessage($data);
        $channel->basic_publish($msg, '', 'certificate_queue');

        echo " [x] Sent 'Certificate Request'\n";

        $channel->close();
        $connection->close();
    }
}
