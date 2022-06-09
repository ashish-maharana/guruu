<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $fillable = ['name','parent_id','level'];

    public function subCategory() {
        return $this->hasMany('App\Category','parent_id','id') ;
    }

}
