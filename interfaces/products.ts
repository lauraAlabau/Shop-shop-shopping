export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISize[];
    slug: string; // url seo friendly
    tags: string[];
    title: string;
    type: IType;
    gender: 'men'|'women'|'kid'|'unisex'

    createdAt: string,
    updatedAt:string
}

export type ISize = 'XS'|'S'|'M'|'L'|'XL'|'2XL'|'3XL';
export type IType = 'shirts'|'pants'|'hoodies'|'hats';
