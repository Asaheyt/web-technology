import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {Profile} from "../model/profile";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Comment} from "../model/comment";

@Component({
  selector: 'st-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  info ?: Profile;
  edit: boolean = true;

  userForm: FormGroup;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.getInfo();


  }

  ngOnInit(): void {

  }

  getInfo() {
    this.profileService.getInfo()
      .subscribe(
        data => {
          this.info = data;
          this.userForm.setValue({
            name: data.name,
            phone: data.phone,
            nickname: data.nickname,
            email: data.email,
          })
          this.userForm.disable();
        }
      );
  }


  editInfo() {
    this.edit = !this.edit;
    if (this.edit)
      this.userForm.disable();
    else this.userForm.enable();

    if (this.info) {
      this.userForm.setValue({
        name: this.info.name,
        phone: this.info.phone,
        nickname: this.info.nickname,
        email: this.info.email,
      })
    }
  }

  save() {
    const user = this.userForm.value;

    if (this.info) {
      this.info.email = user.email,
      this.info.name = user.name,
      this.info.nickname = user.nickname,
      this.info.phone = user.phone,




      this.profileService.save(this.info)
        .subscribe(
          data => {
            this.getInfo();
            this.edit = !this.edit;
            this.router.navigateByUrl(`/profile`)
          }
        );
    }
  }
}
