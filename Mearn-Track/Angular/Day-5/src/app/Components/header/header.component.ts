import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  products: Iproduct[] | undefined;
  searchValue: string = '';
  constructor(
    private ProductsService: ProductService,
    private router: Router
  ) {}

  filter() {
    this.ProductsService.searchByName(this.searchValue).subscribe((data) => {
      this.products = data;
    });
    console.log('working');
  }

  ProductDetails(id: number) {
    this.router.navigate(['/singleProduct', id]);
  }
}
