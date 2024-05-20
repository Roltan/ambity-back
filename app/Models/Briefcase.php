<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Briefcase extends Model
{
    use HasFactory;

    protected $fillable = [
        'vis',
        'img',
        'name',
        'description',
        'url',
        'video',
        'html',
        'seo_title',
        'seo_description',
        'seo_image',
        'og_url',
        'og_image',
        'og_type',
        'og_title',
        'og_description',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function GetTag() {
        return $this->belongsToMany(Tag::class, 'BriefcasesTagCon');    
    }
}
