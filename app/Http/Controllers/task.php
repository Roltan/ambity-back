<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task as ModelsTask;
use App\Models\Task_img;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class task extends Controller
{
    public function GetTasks(){
        return TaskResource::collection(ModelsTask::with('GetImg')->get());
    }

    public function AddTask(Request $request){
        try{
            $task = ModelsTask::create([
                'img' => $request->input('img'),
                'h1' => $request->input('h1'),
                'h2' => $request->input('h2'),
                'url' => $request->input('url'),
                'client' => $request->input('client'),
                'services' => $request->input('services'),
                'sait' => $request->input('sait'),
                'sait_url' => $request->input('sait_url'),
                'about_project' => $request->input('about_project'),
                'purpose' => $request->input('purpose'),
                'idea' => $request->input('idea'),
                'trademark_style' => $request->input('trademark_style'),
                'guideline' => $request->input('guideline'),
                'result' => $request->input('result'),
                'team' => $request->input('team'),
            ]);
        }
        catch(Exception $e){
            return $e->getMessage();
        }

        return $task;
    }

    public function AddIMGforTask(Request $request){
        try{
            $id = $request->input('task_id');
            $file = Storage::putFile('media', $request->file('img'));
            $task = Task_img::create([
                'task_id' => $id,
                'url' => $file
            ]);
        }
        catch(Exception $e){
            return $e->getMessage();
        }

        return $task;
    }

    public function PatchTask(Request $request){
        try{
            $concept = ModelsTask::where('h1', $request->input('id'))->first();
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
        if($request->input('img')){
            $concept->img = $request->input('img');
            $flag = true;
            $resp = $resp.'img, ';
        }
        if($request->input('url')){
            $concept->url = $request->input('url');
            $flag = true;
            $resp = $resp.'url, ';
        }
        if($request->input('client')){
            $concept->client = $request->input('client');
            $flag = true;
            $resp = $resp.'client, ';
        }
        if($request->input('services')){
            $concept->services = $request->input('services');
            $flag = true;
            $resp = $resp.'services, ';
        }
        if($request->input('sait')){
            $concept->sait = $request->input('sait');
            $flag = true;
            $resp = $resp.'sait, ';
        }
        if($request->input('sait_url')){
            $concept->sait_url = $request->input('sait_url');
            $flag = true;
            $resp = $resp.'sait_url, ';
        }
        if($request->input('about_project')){
            $concept->about_project = $request->input('about_project');
            $flag = true;
            $resp = $resp.'about_project, ';
        }
        if($request->input('purpose')){
            $concept->purpose = $request->input('purpose');
            $flag = true;
            $resp = $resp.'purpose, ';
        }
        if($request->input('idea')){
            $concept->idea = $request->input('idea');
            $flag = true;
            $resp = $resp.'idea, ';
        }
        if($request->input('trademark_style')){
            $concept->trademark_style = $request->input('trademark_style');
            $flag = true;
            $resp = $resp.'trademark_style, ';
        }
        if($request->input('guideline')){
            $concept->guideline = $request->input('guideline');
            $flag = true;
            $resp = $resp.'guideline, ';
        }
        if($request->input('result')){
            $concept->result = $request->input('result');
            $flag = true;
            $resp = $resp.'result, ';
        }
        if($request->input('team')){
            $concept->team = $request->input('team');
            $flag = true;
            $resp = $resp.'team, ';
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
