<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'brand' => $this->brand,
            'price' => $this->price,
            'sport' => $this->sport,
            'gender' => $this->gender,
            'type' => $this->type,
            'image' => $this->image,
            'release_year' => $this->release_year,
            'quantity' => $this->quantity,
            'category'=> $this->category?->name??'Não possui categoria' , 
            'formated_price'=> 'R$ ' .number_format($this->price,2,',','.'),
        ];
    }
}
