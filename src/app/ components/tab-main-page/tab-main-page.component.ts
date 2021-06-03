import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants'

@Component({
  selector: 'app-tab-main-page',
  templateUrl: './tab-main-page.component.html',
  styleUrls: ['./tab-main-page.component.css']
})
export class TabMainPageComponent implements OnInit {

  public tabItems = [Constants.allItemsTabName, Constants.finishedItemsTabName, Constants.todoItemsTabName] 
  public activeItem: String = this.tabItems[0]

  constructor() { }

  ngOnInit(): void {
  }

  onTabItemChanged(tabName: String) {
    this.activeItem = tabName
  }
}
