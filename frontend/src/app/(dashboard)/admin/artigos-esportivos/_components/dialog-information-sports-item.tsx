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
import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/use-toast'
import { Product } from '@/types/product'

interface DialogInformationSportsItemProps {
  id: string
  children: React.ReactNode
  isInformation?: boolean
}

export function DialogInformationSportsItem({
  id,
  children,
}: DialogInformationSportsItemProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [open, setOpen] = useState<boolean>()
  const { toast } = useToast()

  useEffect(() => {
    const requestData = async () => {
      interface ApiResponse {
        data: any;
      }
      const { response, error } = await api<ApiResponse>('GET', `/products/${id}`);

      if (response && response.data) {
        const item = response.data || response ;
        const product: Product = {
          id: item.id,
          name: item.nome,
          brand: item.marca,
          price: item["preço"],
          sport: item.esporte,
          gender: item["gênero"],
          type: item.tipo,
          year: item["ano de lançamento"] || item.ano,
          category: item.categoria,
          quantity: item.quantidade,
          image_url: item.imagem,
          formated_price: item["preço_formatado"],
        };
          setProduct(product);
        }
      
      if (error){
        console.error("Erro ao buscar informações", error);
      }
    }
    if (id && open) {
       requestData();
    }
   //return () => setSportsItem(null)
  }, [id, open, toast])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informações do artigo esportivo</DialogTitle>
          <DialogDescription>
            Visualize as informações detalhadas do artigo esportivo abaixo.
          </DialogDescription>
        </DialogHeader>
        {product ? ( 
          <FormFieldsSportsItem Product={product ?? undefined} readOnly />
        ) : (
          <div>
              Carregando informações...
          </div>
        )}
        
      </DialogContent>
    </Dialog>
  )
}
