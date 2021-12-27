import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LibraryComponent} from "./library/library.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ItemComponent} from "./item/item.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, data: {breadcrumb: 'Main'}},
  {path: 'library', component: LibraryComponent, canActivate: [AuthGuard], data: {breadcrumb: 'Library'}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: {breadcrumb: 'Profile'}},
  {path: 'login', component: LoginComponent, data: {breadcrumb: 'Login'}},
  {path: 'register', component: RegisterComponent, data: {breadcrumb: 'Register'}},
  {path: 'item/:id', component: ItemComponent, canActivate: [AuthGuard], data: {breadcrumb: 'Item'}},
  {path: 'about', loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule), data: {breadcrumb: 'About'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
