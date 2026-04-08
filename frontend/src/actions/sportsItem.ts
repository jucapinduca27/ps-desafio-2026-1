'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createSportsItem(formData: FormData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json', // Importante para evitar o erro 303 que vimos antes
    },
    body: formData, // <-- Agora o nome bate com o parâmetro lá de cima!
  });
  revalidatePath('/admin/artigos-esportivos')
  return await response.json();
}

export async function updateSportsItem(form: FormData) {}

export async function destroySportsItem(id: string) {}
