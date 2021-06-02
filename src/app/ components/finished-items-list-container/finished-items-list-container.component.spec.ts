import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedItemsListContainerComponent } from './finished-items-list-container.component';

describe('FinishedItemsListContainerComponent', () => {
  let component: FinishedItemsListContainerComponent;
  let fixture: ComponentFixture<FinishedItemsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedItemsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedItemsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
