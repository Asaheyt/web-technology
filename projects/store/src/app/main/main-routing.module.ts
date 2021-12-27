import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {ItemComponent} from "../item/item.component";
import {AuthGuard} from "../auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'item/:id', component: ItemComponent, canActivate: [AuthGuard], data: {breadcrumb: 'Item'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
