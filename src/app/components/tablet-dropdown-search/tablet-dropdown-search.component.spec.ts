import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletDropdownSearchComponent } from './tablet-dropdown-search.component';

describe('TabletDropdownSearchComponent', () => {
  let component: TabletDropdownSearchComponent;
  let fixture: ComponentFixture<TabletDropdownSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletDropdownSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletDropdownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
