import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants'

@Component({
  selector: 'app-tab-main-page',
  templateUrl: './tab-main-page.component.html',
  styleUrls: ['./tab-main-page.component.css']
})
export class TabMainPageComponent implements OnInit {

  public activeItem: String = "abcd"
  public tabItems = Constants.allItemsTabName

  constructor() { }

  ngOnInit(): void {
  }
}
