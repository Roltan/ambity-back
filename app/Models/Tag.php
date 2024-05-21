<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'vis',
        'name'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function briefcase() {
        return $this->belongsToMany(Briefcase::class, 'briefcases_tag_cons');    
    }
}
