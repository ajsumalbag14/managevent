<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Delegate extends Model
{
    protected $fillable = [
        'firtname', 'lastname', 'email', 'mobile', 'dateofbirth', 'organization', 'position', 'image'
    ];
}
