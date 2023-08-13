import { Component } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Component({
  selector: 'app-filtered-with-price',
  templateUrl: './filtered-with-price.component.html',
  styleUrls: ['./filtered-with-price.component.css'],
})
export class FilteredWithPriceComponent {
  priceValue: number = 0;

  cartItems: any[] = [];

  addToCart({ product, quantity }: { product: Iproduct; quantity: number }) {
    const existingProduct = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity + quantity > product.quantity
        ? (existingProduct.quantity += quantity)
        : (existingProduct.quantity += 0);
    } else {
      this.cartItems.push({ product: product, quantity: quantity });
    }
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
}
