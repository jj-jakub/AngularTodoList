import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMainPageComponent } from './tab-main-page.component';

describe('TabMainPageComponent', () => {
  let component: TabMainPageComponent;
  let fixture: ComponentFixture<TabMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
