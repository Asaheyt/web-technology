import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'st-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  authForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signIn() {
    const signInValue = this.authForm.value;
    this.loginService.signIn(signInValue)
      .subscribe(
        data => this.router.navigateByUrl('/')
      );
  }
}
