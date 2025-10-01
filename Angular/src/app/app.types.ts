export interface Product {
  ID: string;
  name: string;
  categoryId?: string;
  expanded?: boolean;
  image?: string;
  price?: number;
}
