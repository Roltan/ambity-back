<?php

namespace App\Http\Controllers;

use App\Models\Briefcase;
use App\Models\ClientLogo;
use App\Models\Concept;
use App\Models\Contact;
use App\Models\Vacancy;
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

    public function GetIndex() {
        $briefcase = Briefcase::where('vis', true)->get();
        $client = ClientLogo::where('vis', true)->get();
        $contact = Contact::first();

        return view('index', ['briefcase'=>[$briefcase[0], $briefcase[1]], 'client'=>$client, 'contact'=>$contact]);
    }

    public function GetCases() {
        $briefcase = Briefcase::where('vis', true)->get();
        $contact = Contact::first();

        return view('cases', ['briefcase'=>[$briefcase[0], $briefcase[1]], 'contact'=>$contact]);
    }

    public function GetCase($urlCase) {
        $briefcase = Briefcase::where('vis', true)->where('url', $urlCase)->first();
        $contact = Contact::first();

        return view('case', ['briefcase'=>$briefcase, 'contact'=>$contact]);
    }

    public function GetVacancy() {
        $vacancy = Vacancy::where('vis', true)->get();
        $contact = Contact::first();

        foreach ($vacancy as $el){
            $el->requirements = explode('.', $el->requirements);
            $el->duties = explode('.', $el->duties);
            $el->conditions = explode('.', $el->conditions);
        }

        return view('vacancy', ['vacancy'=>$vacancy, 'contact'=>$contact]);
    }

    public function GetService($service){
        $contact = Contact::first();
        return view($service, ['contact'=>$contact]);
    }

    public function GetServices(){
        $contact = Contact::first();
        return view('services', ['contact'=>$contact]);
    }

    public function GetCareer(){
        $contact = Contact::first();
        return view('career', ['contact'=>$contact]);
    }
    public function GetContacts(){
        $contact = Contact::first();
        return view('contacts', ['contact'=>$contact]);
    }
}
