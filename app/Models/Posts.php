<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Posts extends Model
{
    protected $fillable = [
        'title',
        'body',
        'image',
        'label'
    ];
    use CrudTrait;
    use HasFactory;
    
}
