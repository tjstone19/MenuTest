import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = []

  loggedInPages = [
    {
      title: 'Profile',
      url: '/menu/profile'
    },
    {
      title: 'Upcoming Games',
      url: '/menu/upcoming-games'
    },
    {
      title: 'Invitations',
      url: '/menu/invitations'
    },
    {
      title: 'Sign Out',
      url: '/menu/login'
    },
  ]

  loggedOutPages = [
    {
      title: 'Login',
      url: '/menu/login'
    },
    {
      title: 'First Page',
      url: '/menu/first'
    },
    {
      title: 'Second Page',
      url: '/menu/second'
    },
  ]

  selectedPath = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService) {
    // Sets the selected path whenever the url changes. 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    })

    this.authService.authenticationState.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.pages = this.loggedInPages
      }
      else {
        this.pages = this.loggedOutPages
      }
    })
  }

  ngOnInit() {
  }

}
