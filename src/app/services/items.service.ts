import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Item from '../Item'
import { Constants } from '../constants/Constants'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Array<Item> = []

  constructor(private httpClient: HttpClient) { }

   getAllItems(): Observable<Item[]> {
    let url = Constants.serverAddress + Constants.getTodosEndpoint
    let observable = this.httpClient.get<Item[]>(url)
    observable.subscribe(items => this.items = items)
    return observable
  }

  updateListItem(elementNumber: number, checked: Boolean): Observable<Item[]> {
    let url = Constants.serverAddress + Constants.getTodosEndpoint
    let objectId = this.getItemObjectId(elementNumber)
    let observable = this.httpClient.patch<Item[]>(url, JSON.stringify({
      "_id": objectId,
      "done": checked
    }), {
      headers: {'Content-Type': 'application/json'}
    })
    observable.subscribe(items => this.items = items)
    return observable
  }

  deleteListItem(elementNumber: number): Observable<Item[]> {
    let objectId = this.getItemObjectId(elementNumber)
    let url = Constants.serverAddress + Constants.deleteItemEndpoint + objectId
    let observable = this.httpClient.delete<Item[]>(url)
    observable.subscribe(items => this.items = items)
    return observable
  }

  addListItem(itemText: String): Observable<Item[]> {
    let url = Constants.serverAddress + Constants.getTodosEndpoint
    let observable = this.httpClient.post<Item[]>(url, JSON.stringify({
      "text": itemText
    }), {
      headers: {'Content-Type': 'application/json'}
    }) 
    observable.subscribe(items => this.items = items)
    return observable
  }

  getItemObjectId(itemNumber: number) {
    return this.items[itemNumber].objectId
  }
}