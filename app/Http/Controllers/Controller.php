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
use Symfony\Component\Console\Input\Input;

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
            $concept = Concept::create([
                'h1'=>$request->input('h1'),
                'h2'=>$request->input('h2'),
                'h3'=>$request->input('h3'),
                'url'=>$request->input('url'),
            ]);
        }
        catch(Exception $e){
            return $e->getMessage();
        }
        

        return $concept;
    }

    public function PatchConcept(Request $request){
        try{
            $concept = Concept::where('h1', $request->input('id'))->first();
        }
        catch(Exception $e){
            return $e->getMessage();
        }

        $flag = false;
        $resp = 'изменены поля: ';
        if($request->input('h1')){
            $concept->h1 = $request->input('h1');
            $flag = true;
            $resp = $resp.'h1, ';
        }
        if($request->input('h2')){
            $concept->h2 = $request->input('h2');
            $flag = true;
            $resp = $resp.'h2, ';
        }
        if($request->input('h3')){
            $concept->h3 = $request->input('h3');
            $flag = true;
            $resp = $resp.'h3, ';
        }
        if($request->input('url')){
            $concept->url = $request->input('url');
            $flag = true;
            $resp = $resp.'url, ';
        }

        if($flag){
            $concept->save();
            return $resp;
        }
        else{
            return "изменениый не произошло";
        }
    }
}
