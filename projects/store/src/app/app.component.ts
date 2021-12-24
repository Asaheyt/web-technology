import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'store';


  constructor(
    private router: Router,
  ) {
  }

  exit() {
    window.localStorage.clear();
    this.router.navigate(["/main"])
  }

  getLocalStorage(): any {
    return window.localStorage.getItem("email");
  }
}
