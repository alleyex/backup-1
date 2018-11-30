import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { DatabaseService } from './shared/services/database.service';
import { GuestService } from './shared/services/guest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, DatabaseService, GuestService]
})
export class AppComponent implements OnInit {
  constructor(private guest: GuestService) { }

  ngOnInit() {
    this.guest.Log('reload');
  }
}
