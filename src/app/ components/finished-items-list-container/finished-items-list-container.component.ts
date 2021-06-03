import { Component, Input, OnInit } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-finished-items-list-container',
  templateUrl: './finished-items-list-container.component.html',
  styleUrls: ['./finished-items-list-container.component.css']
})
export class FinishedItemsListContainerComponent implements OnInit {

  @Input() items: Array<Item> = Array(0)

  constructor() { }

  ngOnInit(): void {
  }

  onListItemClick(event: any) {
    alert(event.elementNumber + " " + event.isChecked)
  }

  onDeleteListItemClick(elementNumber: number) {
    alert(elementNumber)
  }
}
