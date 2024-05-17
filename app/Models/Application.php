<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'company',
        'email',
        'detals',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}