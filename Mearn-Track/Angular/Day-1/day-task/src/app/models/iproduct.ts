export interface Iproduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  img: string;
  categoryId: number;
  //   discount: discountOffers;
  //   categoryId: ICategory;
}

export interface ICategory {
  id: number;
  name: string;
}

export enum discountOffers {
  'no discount' = 1,
  '10%' = 1.1,
  '15%' = 1.15,
}
