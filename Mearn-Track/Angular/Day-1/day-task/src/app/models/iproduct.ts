export interface Iproduct {
  // id:1,name:"Meadow Wooden Top Coffee Table",quantity:0,price:1200,categoryID:1,Material:"Wood",PrdImgURL:"https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$"},
  id: number;
  name: string;
  quantity: number;
  price: number;
  // priceAfterDiscount: number;
  PrdImgURL: string;
  categoryID: number;
  Material: string;
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
