import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { MainService } from './main.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, DoCheck,OnDestroy {
    place: string = 'other';
    isPhone = true;
    place$ : Subscription;

    constructor(private mainService: MainService) {}

    ngOnInit() {
        this.place$ = this.mainService.place$.subscribe(x => this.place = x);
    }

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
            this.mainService.setScroll(place, 600, 600, 68);
        } else {
            if (this.place != 'other') {
                this.mainService.getPosition(this.place, place,target);
            } else {
                this.place = place;
                this.mainService.setScroll(target, 600, 600, 68);
            }
        }
    }

    ngOnDestroy(){
        this.place$.unsubscribe();
    }
}
