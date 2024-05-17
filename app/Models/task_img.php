<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task_img extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'url'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
