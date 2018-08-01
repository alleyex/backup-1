import { Component, DoCheck } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck {
    place: string = 'other';
    isPhone = true;

    constructor(private mainService: MainService) { }
    ngDoCheck() {
        if (window.innerWidth <= 480 && this.isPhone == true) {
            this.isPhone = false;
            this.mainService.smallScreen();
        }
        if (window.innerWidth > 480 && this.isPhone == false) {
            this.isPhone = true;
            this.mainService.bigScreen();
        }
    }

    onClick(place: string, target: string) {
        if (this.place == place) {
            this.place = 'other';
            this.mainService.setScroll(place, 600, 0 , 68);
        } else {
            if (this.place !='other') {
                this.mainService.gatPosition(this.place);
            }
            this.mainService.setScroll(target, 600, 1100, 68 );
            this.place = place;
        }
    }


}
