import { Component, Input, OnInit } from '@angular/core';
import Item from '../../Item'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() elementNumber!: number
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
