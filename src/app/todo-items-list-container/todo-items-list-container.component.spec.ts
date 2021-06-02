import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsListContainerComponent } from './todo-items-list-container.component';

describe('TodoItemsListContainerComponent', () => {
  let component: TodoItemsListContainerComponent;
  let fixture: ComponentFixture<TodoItemsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
