import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBannerComponent } from './aside-banner.component';

describe('AsideBannerComponent', () => {
  let component: AsideBannerComponent;
  let fixture: ComponentFixture<AsideBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
