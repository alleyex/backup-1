import { Component, DoCheck } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
 
 

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'] 
})
export class MainComponent implements DoCheck {
    place: string;
    isPhone = true;   

    constructor(private scrollToService: ScrollToService) { }
    ngDoCheck() {
        if (window.innerWidth <= 480 && this.isPhone == true) {
            this.isPhone = false;
            this.smallScreen();
        }
        if (window.innerWidth > 480 && this.isPhone == false) {
            this.isPhone = true;
            this.bigScreen();
        }
    }

    smallScreen() {
        this.setPosition('hotel-contain', 'stay', 2);
        this.setPosition('restaurant-contain', 'store', 1);
        this.setPosition('ecotourism-contain', 'store', 3);
        this.setPosition('toll-contain', 'information', 3);
        this.setPosition('traffic-contain', 'information', 3);
    }

    // adject each display block position when  become a big screen.
    bigScreen() {
        this.setPosition('hotel-contain', 'stay', 4);
        this.setPosition('restaurant-contain', 'store', 5);
        this.setPosition('ecotourism-contain', 'store', 5);
        this.setPosition('toll-contain', 'information', 7);
        this.setPosition('traffic-contain', 'information', 7);
    }

    setPosition(nodeId: string, listId: string, position: number) {
        let node = document.getElementById(nodeId);
        let list = document.getElementById(listId);
        list.insertBefore(node, list.childNodes[position]);
    }

    
    onClick(place: string, target: string) {
        //console.log('place:' + place + ' && target:' + target);
        if (this.place == place) {
            this.place = 'other';
            this.setScroll(place, 450);
        } else {
            this.setScroll(target, 450);
            this.place = place;
        }
    }

    setScroll(target: string, time: number) {
        let interval = setInterval(() => {
            let config: ScrollToConfigOptions = {
                container:'stay',
                target: target
            };
            this.scrollToService.scrollTo(config);
            clearInterval(interval);
        }, time);
    }
}
