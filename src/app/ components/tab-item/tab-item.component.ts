import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants'
import Item from '../../Item'
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() public activeItem: String = ""

  public items: Array<Item> = []
  public Constants = Constants
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems().subscribe(
        items => this.items = items
    )
  }

  onNewItemCreated(newItemText: String) {
    this.itemsService.addListItem(newItemText).subscribe(
      items => this.items = items
    )
  }

  onListItemClick(event: any) {
    this.itemsService.updateListItem(event.elementNumber, event.done, this.items).subscribe(
      items => this.items = items
    )
  }

  onDeleteListItemClick(elementNumber: number) {
    this.itemsService.deleteListItem(elementNumber, this.items).subscribe(
      items => this.items = items
    )
  }
}
