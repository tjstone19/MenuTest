import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      usaHockeyNumber: new FormControl(''),
      birthday: new FormControl('')
    });
  }

  login() {
    this.authService.login()
  }

  logout() {
    this.authService.logout()
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
