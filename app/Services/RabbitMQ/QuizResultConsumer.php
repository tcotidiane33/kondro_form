<?php

namespace App\Services\RabbitMQ;

use PhpAmqpLib\Connection\AMQPStreamConnection;

class QuizResultConsumer
{
    public static function consume()
    {
        $connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $channel = $connection->channel();

        $channel->queue_declare('quiz_result_queue', false, false, false, false);

        echo " [*] Waiting for messages. To exit press CTRL+C\n";

        $callback = function ($msg) {
            $data = json_decode($msg->body, true);
            $userId = $data['userId'];
            $quizId = $data['quizId'];
            $score = $data['score'];

            // Traiter les résultats du quiz
            echo " [x] Processing quiz result for user $userId, quiz $quizId, score $score\n";
        };

        $channel->basic_consume('quiz_result_queue', '', false, true, false, false, $callback);

        while ($channel->is_consuming()) {
            $channel->wait();
        }

        $channel->close();
        $connection->close();
    }
}
