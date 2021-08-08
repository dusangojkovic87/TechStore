import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerListBottomComponent } from './banner-list-bottom.component';

describe('BannerListBottomComponent', () => {
  let component: BannerListBottomComponent;
  let fixture: ComponentFixture<BannerListBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerListBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerListBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
