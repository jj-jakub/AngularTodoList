import { Component, Input, OnInit } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-todo-items-list-container',
  templateUrl: './todo-items-list-container.component.html',
  styleUrls: ['./todo-items-list-container.component.css']
})
export class TodoItemsListContainerComponent implements OnInit {

  @Input() items: Array<Item> = Array(0)

  constructor() { }

  ngOnInit(): void {
  }

}
