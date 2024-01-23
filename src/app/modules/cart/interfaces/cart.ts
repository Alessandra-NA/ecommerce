import { Product } from "../../product/interfaces/product";

export interface Cart {
   products: Product[];
   subtotal: number;
   shippingFee: number;
   total: number;
   paymentMethod: string;
}
