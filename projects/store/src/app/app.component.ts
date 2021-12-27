import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Breadcrumb, BreadcrumbService} from "angular-crumbs";

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'store';

  constructor(
    private router: Router,
    private titleService: Title,
    private breadcrumbService: BreadcrumbService,
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'store';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) {
      return title;
    }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles: any) {
    return titles.reduce((prev: any, curr: any) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }

  exit() {
    window.localStorage.clear();
    this.router.navigate(["/main"])
  }

  getLocalStorage(): any {
    return window.localStorage.getItem("email");
  }
}
