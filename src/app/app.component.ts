import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private previousState: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Sends user to dashboard if they are logged in or the log in page if they are not logged in.
      this.authService.authenticationState.subscribe(state => {
        console.log('Auth changed: ', state)

        // if (state) {
        //   this.router.navigate(['members', 'dashboard'])
        // }
        // else {
        //   this.router.navigate(['menu', 'login'])
        // }
      })
    })
  }
}
