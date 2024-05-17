<?php

namespace App\Http\Controllers;

use App\Models\Concept;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function GetConcept()
    {
        return Concept::all();
    }

    public function AddConcept(Request $request){
        $concept = new Concept;
        try{
            $concept->h1 = $request->input('h1');
            $concept->h2 = $request->input('h2');
            $concept->h3 = $request->input('h3');
            $concept->url = $request->input('url');
            $concept->save();
        }
        catch(Exception $e){
            return $e->getMessage();
        }
        

        return $concept;
    }
}
