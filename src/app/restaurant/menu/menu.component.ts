import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from '../../../../node_modules/rxjs';
import { GoogleMapService } from '../../google-map/google-map.service';
export interface DialogData {
    lat: number;
    lng: number;
  }

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    constructor(private googleMapService: GoogleMapService,public dialogRef: MatDialogRef<MenuComponent>,  @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

 

    lat = 24.347909;
    lng = 121.309995;
    zoom = 15;

    current$ = new Subscription;

    destination = { lat:this.data.lat, lng: this.data.lng };
    origin = { lat: 24.3532974, lng: 121.3125091 }

    ngOnInit() {
        this.destination = {  lat:this.data.lat,  lng: this.data.lng };
        this.current$ = this.googleMapService.location$.subscribe(position => {
            this.origin = { lat:  position.coords.latitude, lng: position.coords.longitude };           
           // console.log(position);
        })
        this.googleMapService.watchLocaltion();
    }

    ngOnDestroy() {
        this.current$.unsubscribe();
        this.googleMapService.clearWatch();
    }
}
