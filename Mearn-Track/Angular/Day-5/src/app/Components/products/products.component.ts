import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products!: Iproduct[];
  constructor(
    private ProductsService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductsService.allProducts.subscribe((data) => {
      this.products = data;
    });
  }
  ProductDetails(id: number) {
    this.router.navigate(['/singleProduct', id]);
  }
}
