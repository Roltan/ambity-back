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

        return view('index', ['briefcase'=>$briefcase[0], 'client'=>$client, 'contact'=>$contact]);
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

    public function GetAgency(){
        $client = ClientLogo::where('vis', true)->get();
        $contact = Contact::first();
        return view('agency', ['contact'=>$contact, 'client'=>$client]);
    }

    public function GetProducts(){
        $contact = Contact::first();
        return view('products', ['contact'=>$contact]);
    }

    public function GetBlog(){
        $contact = Contact::first();
        return view('blog', ['contact'=>$contact]);
    }

    public function Sendmail(Request $request){
        $name = $request->name;
        $phone = $request->phone;
        $company = isset($request->company) ? $request->company : " ";
        $email = isset($request->mail) ? $request->mail : " ";
        $description = isset($request->description) ? $request->description : " ";
        $queryUrl = 'https://ambity.bitrix24.ru/rest/1/5z7jpqb4wtf012ll/crm.lead.add.json';

        //данные для битрикса Начало
        $result = Http::post($queryUrl, [
            'fields' => [
                'TITLE' => 'Отклик на сайте Ambity',
                'EMAIL' => [
                    "n0" => [
                        "VALUE" => $email,
                        "VALUE_TYPE" => "WORK",
                    ],
                ],
                'PHONE' => [
                    "n0" => [
                        "VALUE" => $phone,
                        "VALUE_TYPE" => "WORK",
                    ],
                ],
                'UF_CRM_1667412355' => $company,
                'SOURCE_ID' => 'WEB',
                'UF_CRM_1667412400' => $name,
                'UF_CRM_1667412433' => $description,

            ],
            'params' => ["REGISTER_SONET_EVENT" => "Y"]
        ]);
        $result = json_decode($result, 1);
        //данные для битрикса Конец

        //данные для отправки на почту Начало
        $to = 'info@ambity.ru';
        $subject = '=?utf-8?b?'. base64_encode('Новая заявка на сайте Амбити') .'?=';
        $fromMail = 'info@ambity.ru';
        $fromName = 'info';
        $date = date(DATE_RFC2822);
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= "Content-type: text/html; charset=utf-8". "\r\n";
        $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
        $headers .= "Date: ". $date ." \r\n";
        $message ='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
            <html><head></head>
            <body>Имя:'.$name.'<br/>
            Телефон: <a href="tel:'.$phone.'">'.$phone.'</a><br/>';
        isset($request->company) ? $message.='Компания: '.$company.'<br/>' : false;
        isset($request->mail) ? $message.='Email: <a href="mailto:'.$email.'">'.$email.'</a><br/>' : false;
        isset($request->description) ? $message.='Детали проекта: '.$description : false;
        $message.='</body>';
        //данные для отправки на почту Конец

        if(mail(
            $to,//получатель
            $subject,//Тема письма
            $message,
            $headers
        )){
            if (array_key_exists('error', $result)){
                echo "Ошибка при сохранении лида: ".$result['error_description'];
            }else{
                echo json_encode('ok');
            }
        }else{
            echo json_encode('error');
        }
    }
}
