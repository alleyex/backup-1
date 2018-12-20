import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { GoogleMapService } from './google-map.service';

export interface DialogData {
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, OnDestroy {

    constructor(private googleMapService: GoogleMapService,
        public dialogRef: MatDialogRef<GoogleMapComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    lat = 24.347944;
    lng = 121.309882;
    zoom = 15;

    current$: Subscription;

    destination = { lat: this.data.lat, lng: this.data.lng };
    origin = { lat: 24.347944, lng: 121.309882 }

    ngOnInit() {
        this.destination = { lat: this.data.lat, lng: this.data.lng };
        this.current$ = this.googleMapService.location$.subscribe(position => {
            this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
            // console.log(position);
        })
        this.googleMapService.watchLocaltion();
    }

    ngOnDestroy() {
        this.current$.unsubscribe();
    }
}
