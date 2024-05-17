<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Concept extends Model
{
    use HasFactory;

    protected $fillable = [
        'h1', 'h2', 'h3', 'url'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
