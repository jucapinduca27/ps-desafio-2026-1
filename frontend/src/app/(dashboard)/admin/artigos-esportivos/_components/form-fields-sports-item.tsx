'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm ,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { cn } from '@/lib/utils'
import { ResponseErrorType } from '@/services/api'
import { Product } from '@/types/product'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

interface FormFieldsSportsItemProps {
  Product?: Product | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsSportsItem({
  Product,
  readOnly,
  error,
}: FormFieldsSportsItemProps) {
  const { pending } = useFormStatus()
  const [updateImage, setUpdateImage] = useState<string | undefined>()

  return (
    <>
      <FormFieldsGroup>
        {Product && <Input defaultValue={Product.id} type="text" name="id" hidden />}
        <FormField>
        <Label>Imagem do Artigo</Label>
        {updateImage && (
           <img
        src={updateImage}
        alt="Placeholder"
        />
        )}
        <Input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e)=> {
          const file = e.target.files?.[0];
          if (file) setUpdateImage(URL.createObjectURL(file));
        }}
        />
        
        
        </FormField>
        
        <FormField>
          <Label htmlFor="name">Nome</Label>
          <Input 
            id="name"
            name="name"
            defaultValue={Product?.name}
            readOnly={readOnly}
            disabled={pending}
            placeholder="Digite o nome do artigo aqui..."/>
            
        </FormField>
        <FormField>
          <Label htmlFor="brand">Marca</Label>
          <Input
          id="brand"
          name="brand"
          defaultValue={Product?.brand}
          readOnly={readOnly}
          disabled={pending}
          placeholder={"Digite a marca do artigo aqui..."}/>
        </FormField>
        <FormField>
          <Label htmlFor="category">Categoria</Label>
          <select
          id="category"
          name="category"
          defaultValue={Product?.category}
          disabled={readOnly||pending}
          >
            <option value=" " disabled>Escolha a categoria</option>
            <option value="Vestuário">Vestuário</option>
            <option value="Calçados">Calçados</option>
            <option value="Equipamentos">Equipamentos</option>
          </select>
        </FormField>
        <FormField>
          <Label htmlFor="price">Preço</Label>
          <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          defaultValue={Product?.price}
          readOnly={readOnly}
          disabled={pending}
          placeholder={"Digite o preço do artigo aqui..."}/>
        </FormField>
        <FormField>
          <Label htmlFor="quantity">Quantidade</Label>
          <Input
          id="quantity"
          name="quantity"
          defaultValue={Product?.quantity}
          readOnly={readOnly}
          disabled={pending}
          placeholder={"Digite a quantidade em estoque do artigo aqui..."}/> 
        </FormField>
        <FormField>
          <Label htmlFor="category">Ano de Lançamento</Label>
          <Input
          id="year"
          name="year"
          defaultValue={Product?.year}
          type="number"
          readOnly={readOnly}
          disabled={pending}
          placeholder={"Digite o ano de lançamento do artigo aqui..."}/> 
        </FormField>
        <FormField>
          <Label htmlFor="sport">Esporte</Label>
          <select
          id="sport"
          name="sport"
          defaultValue={Product?.sport}
          disabled={readOnly || pending}
          >
            <option value="Futebol">Futebol</option>
            <option value="Basquete">Basquete</option>
            <option value="Vôlei">Vôlei</option>
            <option value="Corrida">Corrida</option>
            <option value="Natação">Natação</option>
          </select>
        </FormField>
        <FormField>
          <Label htmlFor="gender">Gênero</Label>
          <select
          id="gender"
          name="gender"
          defaultValue={Product?.gender}
          disabled={readOnly || pending}
          >
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Unissex">Unissex</option>

          </select>
        </FormField>
      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
