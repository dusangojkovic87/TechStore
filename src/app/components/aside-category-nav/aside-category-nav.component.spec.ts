import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCategoryNavComponent } from './aside-category-nav.component';

describe('AsideCategoryNavComponent', () => {
  let component: AsideCategoryNavComponent;
  let fixture: ComponentFixture<AsideCategoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideCategoryNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideCategoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
