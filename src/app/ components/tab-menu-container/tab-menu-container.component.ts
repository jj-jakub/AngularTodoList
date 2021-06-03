import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-menu-container',
  templateUrl: './tab-menu-container.component.html',
  styleUrls: ['./tab-menu-container.component.css']
})
export class TabMenuContainerComponent implements OnInit {

  @Input() public activeItem: String = ""
  @Input() public tabItems!: Array<String>

  @Output() public eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(tabName: String) {
    this.eventEmitter.emit(tabName)
  }
//   constructor() {
//     super()
//     this.onTabChangeEvent = this.onTabChangeEvent.bind(this)
// }

// onTabChangeEvent(item) {
//     this.props.onTabChangeEvent(item)
// }
}
