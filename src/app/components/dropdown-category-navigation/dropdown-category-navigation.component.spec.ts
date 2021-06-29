import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCategoryNavigationComponent } from './dropdown-category-navigation.component';

describe('DropdownCategoryNavigationComponent', () => {
  let component: DropdownCategoryNavigationComponent;
  let fixture: ComponentFixture<DropdownCategoryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCategoryNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCategoryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
