import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredWithPriceComponent } from './filtered-with-price.component';

describe('FilteredWithPriceComponent', () => {
  let component: FilteredWithPriceComponent;
  let fixture: ComponentFixture<FilteredWithPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredWithPriceComponent]
    });
    fixture = TestBed.createComponent(FilteredWithPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
