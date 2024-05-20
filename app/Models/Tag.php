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

    public function GetBriefcaseHasTag() {
        return $this->belongsToMany(Briefcase::class, 'BriefcasesTagCon');    
    }
}
