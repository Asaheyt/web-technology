import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "./item.service";
import {Profile} from "../model/profile";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../model/comment";

@Component({
  selector: 'st-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item?: Item
  @Input() currentUser ?: Profile

  commentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      'text': ['', Validators.required]
    });
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

  comment() {
    const commentText = this.commentForm.value;

    if (this.item && this.currentUser) {
      const comment: Comment = {
        img: this.currentUser.img,
        name: this.currentUser.name,
        text: commentText.text,
      }

      this.item.comments.push(comment);


      this.itemService.comment(this.item)
        .subscribe(
          data => {
            this.commentForm.reset();
            this.router.navigateByUrl(`/main/item/${this.item?.id}`)
          }
        );
    }
  }
}
