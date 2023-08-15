import { Component } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  products: Iproduct[] | undefined;
  id: number = 0;

  constructor(
    private ProductsService: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      this.id = Number(param.get('id')) || 0;

      this.products = this.ProductsService.getCategory(this.id);
      !this.products && this.location.back();
    });
  }
  ProductCategory(id: number) {
    this.router.navigate(['/productCategory', id]);
  }
  ProductDetails(id: number) {
    this.router.navigate(['/singleProduct', id]);
  }
}
