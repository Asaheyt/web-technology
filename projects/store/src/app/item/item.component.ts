import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "./item.service";
import {Profile} from "../model/profile";

@Component({
  selector: 'st-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item?: Item
  @Input() currentUser ?: Profile

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
  ) {
  }

  ngOnInit(): void {
    this.getItem()
    this.getCurrentUser()
  }

  getItem() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.itemService.getItems(id)
      .subscribe(
        data => {
          console.log(data)
          this.item = data
        }
      );
  }

  delete() {
    const email = window.localStorage.getItem("email")
    if (email && this.item) {

      const owners = this.item.owners.filter((itemEmail: any) => {
        if (itemEmail !== email) return itemEmail;
      });

      this.item.owners = owners;


      this.itemService.deleteItem(this.item)
        .subscribe(
          data => {
            this.router.navigateByUrl("/library")

          }
        );

    }

  }

  getCurrentUser() {
    this.itemService.getCurrentUser()
      .subscribe(
        data => {
          this.currentUser = data;
        }
      );
  }
}
