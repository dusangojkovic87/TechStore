import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSpecialProductsComponent } from './aside-special-products.component';

describe('AsideSpecialProductsComponent', () => {
  let component: AsideSpecialProductsComponent;
  let fixture: ComponentFixture<AsideSpecialProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSpecialProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSpecialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
