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
            'nome' => $this->name,
            'marca' => $this->brand,
            'preço' => $this->price,
            'esporte' => $this->sport,
            'gênero' => $this->gender,
            'tipo' => $this->type,
            'imagem' => $this->image,
            'ano de lançamento' => $this->release_year,
            'quantidade' => $this->quantity,
            'categoria'=> $this->category?->name??'Não possui categoria' , 
            'preço_formatado'=> 'R$ ' .number_format($this->price,2,',','.'),
        ];
    }
}
