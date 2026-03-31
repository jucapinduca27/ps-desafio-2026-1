import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CategoryType {
    id: string;
    name: string;
}

export interface sportsItem  {
    id: string;
    name: string;
    brand: string;
    price: number;
    sport: string;
    gender: string;
    type: string;
    image_url: string|StaticImport;
    year: number;
    quantity: number;
    category: string;
    
    
}