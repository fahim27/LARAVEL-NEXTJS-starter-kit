<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ValidationExceptionHandler extends Exception
{
    /**
     * Handle validation exception and return JSON response
     *
     * @param ValidationException $exception
     * @return JsonResponse
     */
    public static function handle(ValidationException $exception): JsonResponse
    {

        $errors = $exception->validator->messages()->messages();
        $allErrors = array_reduce($errors, function ($carry, $error) {
            return array_merge($carry, array_values($error));
        }, []);

        return response()->json([
            'success' => false,
            'message' => 'Validation failed',
            'data' => [
                'errors' => $allErrors
            ]
        ], 422);
    }
}
