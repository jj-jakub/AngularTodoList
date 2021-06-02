import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListContainerComponent } from './all-list-container.component';

describe('AllListContainerComponent', () => {
  let component: AllListContainerComponent;
  let fixture: ComponentFixture<AllListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
