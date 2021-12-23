import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";

@Component({
  selector: 'st-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      'email': ['', Validators.required],
      'name': ['', Validators.required],
      'nickname': ['', Validators.required],
      'phone': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signUp() {
    const signUpValue = this.signUpForm.value;
    this.registerService.signUp(signUpValue)
      .subscribe(
        data => this.router.navigateByUrl('/login')
      );
  }

}
