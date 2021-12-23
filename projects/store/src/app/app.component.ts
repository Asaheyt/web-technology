import {Component} from '@angular/core';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  exit() {
    window.localStorage.clear();
  }

  getLocalStorage(): any {
    return window.localStorage.getItem("email");
  }
}
