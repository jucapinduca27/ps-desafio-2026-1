import { DashboardContainer } from '@/components/dashboard/dashboard-items'
import {
  TabbleCellImage,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/dashboard/table'
import { api } from '@/services/api'
import { Product } from '@/types/product'
import { Button } from '@/components/button'
import { LuInfo, LuPen, LuPlusCircle, LuTrash } from 'react-icons/lu'
import { DialogUpdateSportsItem } from './dialog-update-sports-item'
import { DialogSportsItemDelete } from './dialog-delete-sports-item'
import { DialogInformationSportsItem } from './dialog-information-sports-item'
import { DialogCreateSportsItem } from './dialog-create-sports-item'

export default async function ListSportsItems() {
  interface ApiResponse {
    data: any[]; // Product[?]
  }

  const { response, error } = await api<ApiResponse>('GET', '/products');

  if (error || !response) {
    return (
      <DashboardContainer className="text-destructive">
        Não foi possível obter os artigos/produtos.
      </DashboardContainer>
    );
  }

  const productsRaw = response?.data || [];

  return (
    <>
      <DashboardContainer className="flex h-min justify-between space-x-0 gap-y-2.5 max-sm:flex-col">
        <DialogCreateSportsItem>
          <Button size="sm">
            <LuPlusCircle />
            Novo artigo esportivo
          </Button>
        </DialogCreateSportsItem>
      </DashboardContainer>

      <DashboardContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Qtd</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsRaw.map((item: any) => {
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

              return (
                <TableRow key={product.id}>
                  <TableCell>
                    <TabbleCellImage src={product.image_url} />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>R$ {product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <DialogInformationSportsItem id={product.id}>
                      <Button variant="default-inverse" size="icon">
                        <LuInfo />
                      </Button>
                    </DialogInformationSportsItem>
                    <DialogUpdateSportsItem id={product.id}>
                      <Button variant="secondary-inverse" size="icon">
                        <LuPen />
                      </Button>
                    </DialogUpdateSportsItem>
                    <DialogSportsItemDelete id={product.id}>
                      <Button variant="destructive-inverse" size="icon">
                        <LuTrash />
                      </Button>
                    </DialogSportsItemDelete>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          {productsRaw.length === 0 && (
            <TableCaption>Nenhum artigo esportivo encontrado.</TableCaption>
          )}
        </Table>
      </DashboardContainer>
    </>
  );
}