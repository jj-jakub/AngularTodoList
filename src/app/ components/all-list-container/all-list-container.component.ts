import { Component, Input, OnInit } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-all-list-container',
  templateUrl: './all-list-container.component.html',
  styleUrls: ['./all-list-container.component.css']
})
export class AllListContainerComponent implements OnInit {

  @Input() items: Array<Item> = Array(0)

  constructor() { }

  ngOnInit(): void {
  }

}
