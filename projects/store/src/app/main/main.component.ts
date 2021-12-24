import {Component, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {MainService} from "./main.service";

@Component({
  selector: 'st-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: Item[] = []

  constructor(
    private mainService: MainService,
  ) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.mainService.getItems()
      .subscribe(
        data => {
          this.items = data;
        }
      );
  }

  checkOwner(item: Item): boolean {
    const email = window.localStorage.getItem("email")
    if (email) {
      if (!(item.owners.includes(email))) {
        return true;
      }
    }

    return false;
  }

  addItem(item: Item) {

    const email = window.localStorage.getItem("email")
    if (email) {
      item.owners.push(email);
    }

    this.mainService.addItem(item)
      .subscribe(
        data => {
          this.items = data;
        }
      );

  }
}
