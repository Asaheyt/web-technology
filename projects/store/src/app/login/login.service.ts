import {Injectable} from '@angular/core';
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  signIn(signInValue: any): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/users"
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        const res = data.find((a: any) => {
            return a.email === signInValue.email && a.password === signInValue.password
          }
        );
        if (res) {
          window.localStorage['email'] = signInValue.email;
        }
        return data;
      }
    ));
  }


}
