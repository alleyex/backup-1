import { Injectable } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from '../../../../node_modules/rxjs';

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

    gatPosition(past: string,place: string, target: string) {
        let el = document.getElementById(past);
        let offset = el.getBoundingClientRect().top
        let abs = Math.abs(offset)/3;

        if (offset < -200) {
            this.setScroll(past, abs, 0, -100);
            this.after(abs,place, target);
        }else{
            this.after(0,place, target);
        }
    }

    private after(time: number, place: string,target: string) {
        let interval = setInterval(() => {
            clearInterval(interval);
            this.place$.next(place);
            this.setScroll(target, 600, 600, 68);  
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