import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Item from '../Item'
import { Constants } from '../constants/Constants'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

   getAllItems(): Observable<Item[]> {
    let url =  Constants.serverAddress + Constants.getTodosEndpoint
    return this.httpClient.get<Item[]>(url)
  }

  updateListItem(elementNumber: number, checked: Boolean, items: Array<Item>): Observable<Item[]> {
    let url = Constants.serverAddress + Constants.getTodosEndpoint
    let objectId = this.getItemObjectId(elementNumber, items)
    return this.httpClient.patch<Item[]>(url, JSON.stringify({
      "_id": objectId,
      "done": checked
    }), {
      headers: {'Content-Type': 'application/json'}
    })
  }

  deleteListItem(elementNumber: number, items: Array<Item>): Observable<Item[]> {
    let objectId = this.getItemObjectId(elementNumber, items)
    let url = Constants.serverAddress + Constants.deleteItemEndpoint + objectId
    return this.httpClient.delete<Item[]>(url)
  }

  addListItem(itemText: String): Observable<Item[]> {
    let url = Constants.serverAddress + Constants.getTodosEndpoint
    return this.httpClient.post<Item[]>(url, JSON.stringify({
      "text": itemText
    }), {
      headers: {'Content-Type': 'application/json'}
    }) 
  }

  getItemObjectId(itemNumber: number, items: Array<Item>) {
    return items[itemNumber]._id
  }
}