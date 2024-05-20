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
}
