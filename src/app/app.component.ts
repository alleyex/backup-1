import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { environment } from 'src/environments/environment';

import { DatabaseService } from './shared/services/database.service';
import { GuestService } from './shared/services/guest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatabaseService, GuestService]
})
export class AppComponent implements OnInit {

  constructor(private guest: GuestService) {
    firebase.initializeApp(environment.firebase);
  }

  ngOnInit() {
    this.guest.Log('reload');
  }
}
