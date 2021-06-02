import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.css']
})
export class TabMenuContainerComponent implements OnInit {

  @Input() public activeItem: String = ""
  @Input() public tabItems: String = ""

  constructor() { }

  ngOnInit(): void {
  }

//   constructor() {
//     super()
//     this.onTabChangeEvent = this.onTabChangeEvent.bind(this)
// }

// onTabChangeEvent(item) {
//     this.props.onTabChangeEvent(item)
// }
}
