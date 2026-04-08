'use client'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/dialog'
import FormFieldsSportsItem from './form-fields-sports-item'
import { updateSportsItem } from '@/actions/sportsItem'
import { filterFormData } from '@/services/filter-form-data'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/use-toast'
import { Product } from '@/types/product'
import { ResponseErrorType, api } from '@/services/api'


interface DialogUpdateSportsItemProps {
  id: string
  children: React.ReactNode
}

export function DialogUpdateSportsItem({ id, children }: DialogUpdateSportsItemProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState<ResponseErrorType | null>(null)
  const { toast } = useToast()
  
useEffect(() => {
  if (!open || !id) return;

  const requestData = async () => {
    console.log("CHAMANDO API PARA ID:", id);
    const result = await api<any>('GET', `/products/${id}`);
    
    // DEBUG CRÍTICO: O que está vindo no 'result'?
    console.log("DEBUG API RESULT:", result);

    if (result.response && result.response.data) {
      const item = result.response.data;
      
      // 2. Mapeamento direto (Garanta que os nomes batem com o JSON do Laravel)
      setProduct({
        id: item.id,
        name: item.nome,          // Laravel 'nome' -> Frontend 'name'
        brand: item.marca,
        price: item.preço,
        category: item.categoria,
        quantity: item.quantidade,
        image_url: item.imagem,
        sport: item.esporte,
        gender: item.gênero,
        type: item.tipo,
        year: item["ano de lançamento"] || item.ano,
        formated_price: item["preço_formatado"]
      });
    } else if (result.error) {
      // 3. Se deu erro, o log vai te dizer EXATAMENTE o que é (CORS, 404, 500)
      console.error("ERRO DETALHADO:", result.error);
      toast({ title: "Erro: " + (result.error.message || "Falha na API") });
    }
  };

  requestData();
}, [id, open]);

  const submit = async (form: FormData) => {
    const newForm = await filterFormData(form)
    console.log("FORM DATA:", Object.fromEntries(form));
    const { error } = await api('PUT', `/products/${id}`, { data: newForm });
    if (error) {
      setError(error)
      toast({
        title: 'Não foi possível editar o artigo esportivo!',
      })
    } else {
      toast({
        title: 'Artigo esportivo editado com sucesso!',
      })
      setOpen(false)
    }
    
  }
  
  
  return (
    
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar artigo esportivo</DialogTitle>
          <DialogDescription>
            Atualize as informações do artigo esportivo abaixo e clique em
            &quot;Salvar&quot; para aplicar as alterações.
          </DialogDescription>
        </DialogHeader>
        <form action={submit}>
          {product && (<FormFieldsSportsItem key ={product?.id} error={error} Product={product} />)}
        </form>
      </DialogContent>
    </Dialog>
  )}

