import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  signUp(signUpValue: any): Observable<any> {
    return this.http.post(
      "http://localhost:3000/users",
      signUpValue
    ).pipe(catchError(this.formatErrors)).pipe(map(
      data => {
        // this.setAuth(data.user);
        // window.localStorage['email'] = signUpValue;
        return data;
      }
    ));
  }

}
