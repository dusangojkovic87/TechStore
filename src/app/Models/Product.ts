export interface Product{
  id:number;
  productName:string;
  price:number;
  qt:number;
  avaliability:string;
  rating?:number;
  img:string;
  category:string;
  specialProduct:boolean;
  description:string;
  reviews:any;

}
