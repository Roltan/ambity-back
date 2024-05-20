<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'vis',
        'name',
        'requirements',
        'duties',
        'conditions',
    ];
    

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
