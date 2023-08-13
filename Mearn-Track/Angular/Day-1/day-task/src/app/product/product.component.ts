import { Iproduct } from './../models/iproduct';
import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from './../models/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent extends Store implements OnChanges {
  @Input() filterValue!: number;

  filteredProducts: Iproduct[] = [];

  constructor() {
    super();
    this.filteredProducts = this.products;
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(
      (product) => product.price >= this.filterValue
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterValue']) {
      this.filterProducts();
    }
  }
  /////////////////////////////////////////////////////////////////

  @Output() addToCartEvent = new EventEmitter<any>();

  addedQuan: { [productId: number]: number } = {};

  addToCart(product: Iproduct) {
    if (this.addedQuan[product.id] > 0) {
      this.addToCartEvent.emit({
        product: product,
        quantity: this.addedQuan[product.id],
      });
    }
  }

  availableQuan(product: any): number {
    const availableQuantity = product.quantity - this.addedQuan[product.id];
    return availableQuantity > 0 ? availableQuantity : 0;
  }
}
