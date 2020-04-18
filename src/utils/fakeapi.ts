import jsonData from "./products.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));

export interface ProductInterface {
  title: string;
  id: number;
  price: string;
  availability: string;
  image_link: string;
  color: string;
  size: string;
}

export const ProductsObject: ProductInterface[] = loadData();
