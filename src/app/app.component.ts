import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { DatabaseService } from './shared/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, DatabaseService]
})
export class AppComponent {
  constructor(private authService: AuthService, private databaseService: DatabaseService) { }

  onClick() {
    this.authService.registerByEmail('alleyex@gmail.com', 'abc123');
  }

  isLogin() {
    console.log('is login');
    const isLogged = this.authService.isLogin();
    console.log(isLogged);
  }

  state() {
    this.authService.checkState();
  }

  logout() {
    this.authService.signOut();
  }

  logWithFacebook() {
    this.authService.loginWithFacebook();
  }

  setData() {
    this.databaseService.set();
  }

  update() {
    this.databaseService.update();
  }

  delete() {
    this.databaseService.delete();
  }

  fetch() {
    this.databaseService.fetch();
  }
}
