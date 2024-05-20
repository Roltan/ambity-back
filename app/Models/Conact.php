<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conact extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone',
        'email',
        'adres',
        'telegram',
        'vk',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
