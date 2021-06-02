import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants'
import Item from '../../Item'

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() public activeItem: String = ""

  public items: Array<Item> = [new Item("ab", true), new Item("cd", false), new Item("ef", true), new Item("gh", false)]

  constructor() { }

  ngOnInit(): void {
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
