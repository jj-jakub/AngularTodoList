import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-all-list-container',
  templateUrl: './all-list-container.component.html',
  styleUrls: ['./all-list-container.component.css']
})
export class AllListContainerComponent implements OnInit {

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
