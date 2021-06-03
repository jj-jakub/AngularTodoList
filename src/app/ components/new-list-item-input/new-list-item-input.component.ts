import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-list-item-input',
  templateUrl: './new-list-item-input.component.html',
  styleUrls: ['./new-list-item-input.component.css']
})
export class NewListItemInputComponent implements OnInit {

  public newItemText: String = ""

  @Output() public eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddButtonClick() {
    this.eventEmitter.emit(this.newItemText)
    this.newItemText = ""
  }
}
