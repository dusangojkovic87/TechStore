import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFilterSearchComponent } from './main-filter-search.component';

describe('MainFilterSearchComponent', () => {
  let component: MainFilterSearchComponent;
  let fixture: ComponentFixture<MainFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFilterSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
