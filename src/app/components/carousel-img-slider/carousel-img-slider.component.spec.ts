import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImgSliderComponent } from './carousel-img-slider.component';

describe('CarouselImgSliderComponent', () => {
  let component: CarouselImgSliderComponent;
  let fixture: ComponentFixture<CarouselImgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselImgSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
