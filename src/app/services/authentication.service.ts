import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage, 
    private platform: Platform) { 
      this.platform.ready().then(() => {
        this.checkStoredToken()
      })
  }

  /**
   * Logs the user into the system.
   */
  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 123456').then(res => {
      this.authenticationState.next(true);
    })
  }

  /**
   * Logs the user out of the system.
   */
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    })
  }

  /**
   * Returns true if the user is already authenticated.
   */
  isAuthenticated(): boolean {
    return this.authenticationState.value;
  }

  /**
   * Checks if the user already has a token stored on the device.
   */
  checkStoredToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
}



