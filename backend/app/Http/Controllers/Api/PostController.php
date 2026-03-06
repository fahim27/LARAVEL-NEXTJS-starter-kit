<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::get();
        return jsonResponse(true, "Post Fetch Successfully", [
            'posts'  => $posts
        ]);
    }
    public function singlePost($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return jsonResponse(false, "The post is not found");
        }
        return jsonResponse(true, "Post Fetch Successfully", [
            'post'  => $post
        ]);
    }
}
