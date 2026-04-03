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
  const [Product, setProduct] = useState<Product | null>(null)
  const [open, setOpen] = useState<boolean>()
  const { toast } = useToast()

  useEffect(() => {
    const requestData = async () => {
      interface ApiResponse {
        data: Product;
      }
      const { response, error } = await api<ApiResponse>('GET', `/products/${id}`);

      if (response) {
        setProduct(response.data || response);
      } 
      if (error){
        console.error("erro", error);
      }
    }
    if (id) {
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
        <FormFieldsSportsItem sportsItem={Product} readOnly />
      </DialogContent>
    </Dialog>
  )
}
