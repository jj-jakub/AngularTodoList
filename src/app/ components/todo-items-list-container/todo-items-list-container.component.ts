import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-todo-items-list-container',
  templateUrl: './todo-items-list-container.component.html',
  styleUrls: ['./todo-items-list-container.component.css']
})
export class TodoItemsListContainerComponent implements OnInit {

  @Input() items: Array<Item> = Array(0)

  @Output() listItemClickEmitter = new EventEmitter();
  @Output() deleteListItemClickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onListItemClick(event: any) {
    this.listItemClickEmitter.emit(event)
  }

  onDeleteListItemClick(elementNumber: number) {
    this.deleteListItemClickEmitter.emit(elementNumber)
  }
}
