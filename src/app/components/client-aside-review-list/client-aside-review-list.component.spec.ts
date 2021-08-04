import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAsideReviewListComponent } from './client-aside-review-list.component';

describe('ClientAsideReviewListComponent', () => {
  let component: ClientAsideReviewListComponent;
  let fixture: ComponentFixture<ClientAsideReviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAsideReviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAsideReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
