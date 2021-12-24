import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {Profile} from "../model/profile";

@Component({
  selector: 'st-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  info ?: Profile;

  constructor(
    private profileService: ProfileService,
  ) {
    if (this.info)
      this.info.img = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';

    this.getInfo();
  }

  ngOnInit(): void {

  }

  getInfo() {
    this.profileService.getInfo()
      .subscribe(
        data => {
          this.info = data;
        }
      );
  }


}
