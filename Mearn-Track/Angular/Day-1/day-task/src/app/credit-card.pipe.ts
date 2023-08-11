import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    let creditDashed = '';
    for (let i = 0; i < value.length; i += 4) {
      creditDashed += value.slice(i, i + 4) + ' - ';
    }

    return creditDashed.slice(0, creditDashed.length - 2);
  }
}
