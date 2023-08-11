import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
})
export class ProductCardDirective {
  constructor(public ele: ElementRef) {
    this.ele.nativeElement.style = `border-radius:20px; border:1px solid black; `;
    this.ele.nativeElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.boxShadow = '0px 14px 18px rgba(0, 0, 0, 0.2)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
  }
}
