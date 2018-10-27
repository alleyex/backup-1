import { Injectable } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';


@Injectable()
export class MainService {
    constructor(private scrollToService: ScrollToService) { }

    place$ = new Subject<string>();

    smallScreen() {
        this.setPosition('hotel-contain', 'stay', 2);
        this.setPosition('restaurant-contain', 'store', 1);
        this.setPosition('ecotourism-contain', 'store', 3);
        this.setPosition('toll-contain', 'information', 3);
        this.setPosition('departure-contain', 'information', 3);
        this.setPosition('tea-content', 'information', 11);
        this.setPosition('visitor-content', 'information', 11);
    }

    bigScreen() {
        this.setPosition('hotel-contain', 'stay', 4);
        this.setPosition('restaurant-contain', 'store', 5);
        this.setPosition('ecotourism-contain', 'store', 5);
        this.setPosition('toll-contain', 'information', 7);
        this.setPosition('departure-contain', 'information', 7);
        this.setPosition('tea-content', 'information', 15);
        this.setPosition('visitor-content', 'information', 15);
    }

    setPosition(nodeId: string, listId: string, position: number) {
        let node = document.getElementById(nodeId);
        let list = document.getElementById(listId);
        list.insertBefore(node, list.childNodes[position]);
    }

    getPosition(past: string, place: string, target: string) {

        let el = document.getElementById(past);

        //元素上邊到視窗上邊的距離;
        let offset = el.getBoundingClientRect().top

        if (offset < -100) {
            // 68 is toolbar height, 
            this.setScroll(place, 200, 0, 68);
            setTimeout(() => {
                this.place$.next(place);
                let pastEl = document.getElementById(past + '-contain');
              //  pastEl.style.display = 'none';
                pastEl.style.visibility = 'hidden';

                let placeEl = document.getElementById(place);
                window.scrollTo(0, placeEl.offsetTop);
                
                setTimeout(() => {
                    // IE not support style.display
                    //pastEl.style.display = 'block';
                    pastEl.style.visibility = 'visible';

                }, 900);
                this.setScroll(target, 600, 1000, 68);
            }, 400);

        } else {
            this.place$.next(place);
            this.setScroll(target, 400, 500, 68);
        }
    }

    setScroll(target: string, duration: number, time: number, adject: number) {
        setTimeout(() => {
            let el = document.getElementById(target);
            let offset = el.getBoundingClientRect().top - adject;
            const config: ScrollToConfigOptions = {
                offset,
                duration: duration,
                easing: 'easeOutQuad',
            };

            this.scrollToService.scrollTo(config);
        }, time);
    }
}