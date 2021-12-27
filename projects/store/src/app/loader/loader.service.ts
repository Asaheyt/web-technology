import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new BehaviorSubject(false);

  constructor() {
  }

}
