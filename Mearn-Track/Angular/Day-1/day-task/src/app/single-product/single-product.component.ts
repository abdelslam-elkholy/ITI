import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  product: Iproduct | undefined;
  id: number = 0;
  currentIndex: number = 0;
  idsList: number[] = [];

  constructor(
    private ProductsService: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.idsList = this.ProductsService.ProductsIds;

    this.activateRoute.paramMap.subscribe((param) => {
      this.id = Number(param.get('id')) || 0;

      this.product = this.ProductsService.getSingleProduct(this.id);
      !this.product && this.location.back();
    });
  }

  previous() {
    console.log('hey im working fine');

    this.currentIndex = this.idsList.indexOf(this.id);
    this.router.navigate(['/singleProduct', this.idsList[--this.currentIndex]]);
  }

  next() {
    console.log('hey im working fine');

    this.currentIndex = this.idsList.indexOf(this.id);
    this.router.navigate([
      '/singleProduct',
      this.idsList[this.currentIndex + 1],
    ]);
  }
}
