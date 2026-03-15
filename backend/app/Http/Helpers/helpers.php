<?php

function jsonResponse($success = false, mixed $message = null, $data = [])
{
    $message = is_array($message) ? $message : (is_null($message) ? '' : $message);

    return response()->json([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
}

function sendPhpMailer($message, $subject, $to)
{
    $headers = "From: fahimmbpi@gmail.com \r\n";
    $headers .= "Reply-To: fahimmbpi@gmail.com \r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    mail($to, $subject, $message, $headers);
}
