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
