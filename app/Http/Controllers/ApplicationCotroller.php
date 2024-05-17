<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Exception;
use Illuminate\Http\Request;

class ApplicationCotroller extends Controller
{
    public function GetApplication(){
        return Application::all();
    }

    public function AddApplication(Request $request){
        try{
            $concept = Application::create([
                'name'=>$request->input('name'),
                'phone'=>$request->input('phone'),
                'company'=>$request->input('company'),
                'email'=>$request->input('email'),
                'detals'=>$request->input('detals'),
            ]);
        }
        catch(Exception $e){
            return $e->getMessage();
        }
        
        return $concept;
    }
}
