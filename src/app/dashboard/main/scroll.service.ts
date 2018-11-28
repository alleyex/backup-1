import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {
    constructor(private scrollToService: ScrollToService) { }

    public triggerScrollTo(container: string, target: string) {
        const config: ScrollToConfigOptions = {
            container: container,
            target: target,
            duration: 650,
            easing: 'easeOutElastic',
            offset: 20
        };
        this.scrollToService.scrollTo(config);
    }




}