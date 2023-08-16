export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  categoryID: number;
  Material: string;
  PrdImgURL?: string;
  details?: string;
}
