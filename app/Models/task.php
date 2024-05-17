<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'img',
        'h1',
        'h2',
        'url',
        'client',
        'services',
        'sait',
        'sait_url',
        'about_project',
        'purpose',
        'idea',
        'trademark_style',
        'guideline',
        'result',
        'team',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function GetImg()
    {
        return $this->hasMany(Task_img::class);
    }
}
