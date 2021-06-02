import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListItemInputComponent } from './new-list-item-input.component';

describe('NewListItemInputComponent', () => {
  let component: NewListItemInputComponent;
  let fixture: ComponentFixture<NewListItemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewListItemInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
