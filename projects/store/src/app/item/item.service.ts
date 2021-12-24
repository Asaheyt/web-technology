import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) {
  }


  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getItems(id: any): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/items/" + id
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        return data;
      }
    ));
  }


  deleteItem(item: Item): Observable<any> {
    return this.http.put<any>(
      "http://localhost:3000/items/"+ item.id,
      item
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        return data;
      }
    ));
  }


}
