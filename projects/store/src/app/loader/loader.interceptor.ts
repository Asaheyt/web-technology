import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from "./loader.service";
import {delay, finalize} from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    this.loader.isLoading.next(true);


    return next.handle(request).pipe(
      delay(100),
      finalize(() => {
        this.loader.isLoading.next(false);
      })
    );
  }
}
