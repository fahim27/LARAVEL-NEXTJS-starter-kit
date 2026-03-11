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
