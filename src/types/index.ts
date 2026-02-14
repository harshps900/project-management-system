export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    count: number;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    slug: string;
    image: string;
    badges?: string[];
}
