<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientLogo extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'vis',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}