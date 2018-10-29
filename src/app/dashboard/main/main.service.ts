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
        const node = document.getElementById(nodeId);
        const list = document.getElementById(listId);
        list.insertBefore(node, list.childNodes[position]);
    }

    getPosition(past: string, place: string, target: string) {
        const el = document.getElementById(past);

        // 元素上邊到視窗上邊的距離;
        const offset = el.getBoundingClientRect().top;

        if (offset < -100) {
            // 68 is toolbar height
            this.setScroll(place, 200, 0, 68);
            setTimeout(() => {
                this.place$.next(place);
                const pastEl = document.getElementById(past + '-contain');
                pastEl.style.visibility = 'hidden';
                pastEl.style.display = 'none';
                this.setScroll(place, 0, 0, 68);
                setTimeout(() => {
                    this.setScroll(target, 600, 0, 68);
                    pastEl.style.visibility = 'visible';
                    pastEl.style.display = 'block';
                }, 1000);
            }, 200);

        } else {
            this.place$.next(place);
            this.setScroll(target, 500, 1000, 68);
        }
    }

    setScroll(target: string, duration: number, time: number, adject: number) {
        setTimeout(() => {
            const el = document.getElementById(target);
            const offset = el.getBoundingClientRect().top - adject;
            const config: ScrollToConfigOptions = {
                offset,
                duration: duration,
                easing: 'easeOutQuad',
            };

            this.scrollToService.scrollTo(config);
        }, time);
    }
}
