<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Category extends Model
{   
    
    protected $table = 'categories'; // Forçar nome correto da tabela pra consertar erro

    protected $keyType = 'string';  
    public $incrementing = false;

    use HasFactory, HasUuids;
    protected $fillable = ['id','name'];

    protected static function boot(){
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

}

