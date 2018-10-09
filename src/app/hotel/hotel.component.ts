import { Component, OnChanges, Input, OnInit, OnDestroy } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';
import { DeviceService } from '../dashboard/device.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';

import { MenuComponent } from '../restaurant/menu/menu.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { AlbumService } from '../dashboard/album.service';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss'],
    animations: [ExpandModel]
})
export class HotelComponent implements OnInit, OnChanges, OnDestroy {
    constructor(private deviceService: DeviceService,private albumService: AlbumService, private dialog: MatDialog) { }

    @Input() place: string;
    isDivVisible = false;
    isCellphone$: Subscription;
    
    ngOnInit() {
        this.isCellphone$ = this.deviceService.isCellpone$.subscribe(result => { });
        this.albumService.getPictures();
    }

    ngOnChanges() {
        if (this.place == 'hotel') {
            this.isDivVisible = true;
        } else {
            this.isDivVisible = false;
        }

        this.deviceService.checkScreen();
    }

    ngOnDestroy() {
        this.isCellphone$.unsubscribe();
    }

    openMap(lat: number, lng: number) {
        console.log(lat + ':'+lng);
        this.dialog.open(GoogleMapComponent, {
            data: {
                lat: lat,
                lng: lng
            },
            height: '92vh',
            width: '100vw',
        });

    }

     
}
