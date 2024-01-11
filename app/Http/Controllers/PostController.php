<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // This will be unfinished currently until i find if adham can send
    // the user id
    $incomingFields = $request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);

    //image validation
    if($request->hasFile('image')){
            $incomingFields['image'] = $request->file('image')->store('images','public');
        }
            Post::create($incomingFields);

}
