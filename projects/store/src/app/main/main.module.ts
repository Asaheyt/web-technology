import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {ItemComponent} from "../item/item.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    ItemComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule
    ]
})
export class MainModule {
}
