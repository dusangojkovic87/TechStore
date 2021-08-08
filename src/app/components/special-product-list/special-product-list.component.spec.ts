import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductListComponent } from './special-product-list.component';

describe('SpecialProductListComponent', () => {
  let component: SpecialProductListComponent;
  let fixture: ComponentFixture<SpecialProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
