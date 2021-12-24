import {Component, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {LibraryService} from "./library.service";

@Component({
  selector: 'st-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  items: Item[] = []

  constructor(
    private libraryService: LibraryService,
  ) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.libraryService.getItems()
      .subscribe(
        data => {
          this.items = data.filter((element: any) => {
              const email = window.localStorage.getItem("email")
              if (email) {
                if (element.owners.includes(email)) {
                  return element;
                }
              }
            }
          )
        }
      );
  }

  delete(item: Item) {

    const email = window.localStorage.getItem("email")
    if (email) {

      const owners = item.owners.filter((itemEmail: any) => {
        if(itemEmail !== email) return itemEmail;
      });

      item.owners = owners;
    }

    this.libraryService.deleteItem(item)
      .subscribe(
        data => {
          this.getItems();

        }
      );
  }

}
