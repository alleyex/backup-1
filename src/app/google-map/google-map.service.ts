import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GoogleMapService {
    location$ = new Subject<Position>();
    findLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.location$.next(position);
            }, (error) => {
                console.log(error);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    watchId: number;
    watchLocaltion() {
        if (navigator.geolocation) {
            this.watchId = navigator.geolocation.watchPosition((position) => {
                this.location$.next(position);
            }, (error) => {
                console.log(error);
            }, {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 10000
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    clearWatch() {
        navigator.geolocation.clearWatch(this.watchId);
    }


    
}