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

  public items!: Array<Item>;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.getItems()
  }

  onNewItemCreated(newItemText: String) {
    alert(newItemText)
    // TODO Send to server
  }

  private async getAllItems() {
      const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint)
      const text = await res.text()
  
      if (res.ok) {
          return JSON.parse(text)
      } else {
          throw new Error(text)
      }
  }

  async componentDidMount() {
    this.items = await this.getAllItems()
  }

  async onAddNewItemButtonClick(itemText: String) {
    // this.items = await this.addListItem(itemText)
  }

  async listItemClick(elementNumber: number, checked: Boolean) {
    // this.items = await this.updateListItem(elementNumber, checked, this.items)
  }

  async deleteListItemClick(elementNumber: number) {
    // this.items = await deleteListItem(elementNumber, this.items)
  }
}
