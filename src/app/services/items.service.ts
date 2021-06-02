import { Injectable } from '@angular/core';
import Item from '../Item'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  private items: Array<Item> = [new Item("ab", true), new Item("cd", false), new Item("ef", true), new Item("gh", false)]

  getItems(): Array<Item> { return this.items }
}