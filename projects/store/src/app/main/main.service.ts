import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient,
  ) {
  }


  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getItems(): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/items"
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        return data;
      }
    ));
  }

  addItem(item: Item): Observable<any> {
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
