<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class QuizResultProducer
{
    public static function sendQuizResult($userId, $quizId, $score)
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('quiz_result_queue', false, false, false, false);

        $data = json_encode(['userId' => $userId, 'quizId' => $quizId, 'score' => $score]);
        $msg = new AMQPMessage($data);
        $channel->basic_publish($msg, '', 'quiz_result_queue');

        echo " [x] Sent 'Quiz Result'\n";

        $channel->close();
        $connection->close();
    }
}
