import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() elementNumber!: number
  @Input() item!: Item;

  @Output() public checkboxClickEmitter = new EventEmitter();
  @Output() public deleteClickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxClick() {
    this.item.isChecked = !this.item.isChecked
    this.checkboxClickEmitter.emit({elementNumber: this.elementNumber, isChecked: this.item.isChecked})
  }

  onDeleteListItemClick() {
    this.deleteClickEmitter.emit(this.elementNumber)
  }
}
