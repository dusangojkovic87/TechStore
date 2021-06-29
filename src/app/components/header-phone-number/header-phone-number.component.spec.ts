import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPhoneNumberComponent } from './header-phone-number.component';

describe('HeaderPhoneNumberComponent', () => {
  let component: HeaderPhoneNumberComponent;
  let fixture: ComponentFixture<HeaderPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
