import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }


  getInfo(): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/users"
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        const res = data.find((a: any) => {
            return a.email === window.localStorage.getItem("email")
          }
        );
        return res;
      }
    ));
  }

}