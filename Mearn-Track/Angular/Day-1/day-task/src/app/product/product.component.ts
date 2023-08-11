import { Component } from '@angular/core';
import { Store } from './../models/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent extends Store {}
