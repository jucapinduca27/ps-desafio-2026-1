<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{   
    protected $keyType = 'string';
    public $incrementing = false;
    use HasFactory;
    protected $fillable = [
        'name',
        'brand',
        'price',
        'image',
        'release_date',
        'quantity',
        'category_id',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model){
            if(empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
        
    }
}
