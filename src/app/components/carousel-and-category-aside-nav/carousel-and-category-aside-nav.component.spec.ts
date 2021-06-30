import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAndCategoryAsideNavComponent } from './carousel-and-category-aside-nav.component';

describe('CarouselAndCategoryAsideNavComponent', () => {
  let component: CarouselAndCategoryAsideNavComponent;
  let fixture: ComponentFixture<CarouselAndCategoryAsideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAndCategoryAsideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAndCategoryAsideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
