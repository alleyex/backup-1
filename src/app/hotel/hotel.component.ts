import { Component, OnChanges, Input, OnInit, OnDestroy } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';
import { DeviceService } from '../dashboard/device.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';

import { GoogleMapComponent } from '../google-map/google-map.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss'],
    animations: [ExpandModel]
})
export class HotelComponent implements OnInit, OnChanges, OnDestroy {
    constructor(private deviceService: DeviceService,
        private dialog: MatDialog, private translateService: TranslateService) { }

    @Input() place: string;
    isDivVisible = false;
    isCellphone$: Subscription;
    translate$: Subscription;

    ngOnInit() {
        this.isCellphone$ = this.deviceService.isCellpone$.subscribe(result => { });


        this.translate$ = this.translateService.onLangChange.subscribe((event) => {
            if (this.translateService.currentLang === 'zh-tw') {
                document.querySelector('.booking').classList.remove('notChinese');
            } else {
                document.querySelector('.booking').classList.add('notChinese');
            }
        });
    }

    ngOnChanges() {
        if (this.place === 'hotel') {
            this.isDivVisible = true;
        } else {
            this.isDivVisible = false;
        }

        this.deviceService.checkScreen();
    }

    ngOnDestroy() {
        this.isCellphone$.unsubscribe();
        this.translate$.unsubscribe();
    }

    openMap(lat: number, lng: number) {
        console.log(lat + ':' + lng);
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
