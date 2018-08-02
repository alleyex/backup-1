import { Injectable } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';
import { element } from '../../../../node_modules/@angular/core/src/render3/instructions';

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
    }

    bigScreen() {
        this.setPosition('hotel-contain', 'stay', 4);
        this.setPosition('restaurant-contain', 'store', 5);
        this.setPosition('ecotourism-contain', 'store', 5);
        this.setPosition('toll-contain', 'information', 7);
        this.setPosition('departure-contain', 'information', 7);
    }

    setPosition(nodeId: string, listId: string, position: number) {
        let node = document.getElementById(nodeId);
        let list = document.getElementById(listId);
        list.insertBefore(node, list.childNodes[position]);
    }

    gatPosition(past: string, place: string, target: string) {

        let el = document.getElementById(past);
        let offset = el.getBoundingClientRect().top
        if (offset < -100) {
            this.setScroll(place, 200, 0, 68);
            setTimeout(() => {
                this.place$.next(place);
                let pastEl = document.getElementById(past + '-contain');
                pastEl.style.display = 'none';

                let placeEl = document.getElementById(place);
                window.scrollTo(0, placeEl.offsetTop);

                setTimeout(() => {
                    pastEl.style.display = 'block';
                }, 900);
                this.setScroll(target, 600, 800, 68);
            }, 400);
          
        } else {
            this.place$.next(place);
            this.setScroll(target, 400, 500, 68);
        }
    }

    private hied(past: string, place: string) {
        let placeEl = document.getElementById(place);
        let pastEl = document.getElementById(past + '-contain');
        pastEl.style.display = 'none';

        window.scrollTo(0, placeEl.offsetTop);
        setTimeout(() => {
            pastEl.style.display = 'block';
            this.place$.next(place);
            console.log('pastEl.style.display  : block');
        }, 900);

    }

    // private before(place: string, target: string ) {
    //     this.setScroll(target, 200, 0, 68);
    //     setTimeout(() => {
    //         this.place$.next(place);  
    //         this.hied(past,place);  
    //    }, 220);
    // }

    private after(time: number, place: string, target: string) {
        let interval = setInterval(() => {
            clearInterval(interval);

            this.setScroll(target, 600, 900, 68);
        }, time);
    }

    setScroll(target: string, duration: number, time: number, adject: number) {
        let interval = setInterval(() => {
            clearInterval(interval);
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