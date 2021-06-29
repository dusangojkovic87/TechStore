import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavigationLinksComponent } from './page-navigation-links.component';

describe('PageNavigationLinksComponent', () => {
  let component: PageNavigationLinksComponent;
  let fixture: ComponentFixture<PageNavigationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNavigationLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
