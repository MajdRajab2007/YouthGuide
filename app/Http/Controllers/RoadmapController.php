<?php

namespace App\Http\Controllers;

use App\Models\Roadmaps;
use Illuminate\Http\Request;

class RoadmapController extends Controller
{
    public function show(){
        $roadmaps = Roadmaps::all();
        return response()->json($roadmaps);
    }


    public function search(Request $request){
        
        $roadmaps = Roadmaps::where('title','LIKE',$request->search)->get();


        return response()->json($roadmaps);
    }
}
