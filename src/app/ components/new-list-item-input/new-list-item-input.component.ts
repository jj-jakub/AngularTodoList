import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list-item-input',
  templateUrl: './new-list-item-input.component.html',
  styleUrls: ['./new-list-item-input.component.css']
})
export class NewListItemInputComponent implements OnInit {

  public newItemText: String = ""

  constructor() { }

  ngOnInit(): void {
  }

  onAddButtonClick() {
    alert(this.newItemText)
    this.newItemText = ""
  }
}
