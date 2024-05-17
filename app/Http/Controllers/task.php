<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task as ModelsTask;
use App\Models\Task_img;
use Exception;
use Illuminate\Http\Request;

class task extends Controller
{
    public function GetTasks(){
        return TaskResource::collection(ModelsTask::with('GetImg')->get());
    }

    public function AddTask(Request $request){
        $task = new ModelsTask;
        try{
            $task->img = $request->input('img');
            $task->h1 = $request->input('h1');
            $task->h2 = $request->input('h2');
            $task->url = $request->input('url');
            $task->client = $request->input('client');
            $task->services = $request->input('services');
            $task->sait = $request->input('sait');
            $task->sait_url = $request->input('sait_url');
            $task->about_project = $request->input('about_project');
            $task->purpose = $request->input('purpose');
            $task->idea = $request->input('idea');
            $task->trademark_style = $request->input('trademark_style');
            $task->guideline = $request->input('guideline');
            $task->result = $request->input('result');
            $task->team = $request->input('team');
            $task->save();
        }
        catch(Exception $e){
            return $e->getMessage();
        }

        return $task;
    }

    public function AddIMGforTask(Request $request){
        try{
            $id = $request->input('task_id');
            foreach ($request->input('url') as $url){
                $task = new task_img;
                $task->task_id = $id;
                $task->url = $url;
                $task->save();
            }
        }
        catch(Exception $e){
            return $e->getMessage();
        }

        return $task;
    }
}
