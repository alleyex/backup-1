import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficStatusService, RoadStatus } from '../traffic-status.service';

@Component({
    selector: 'app-traffic-status',
    templateUrl: './traffic-status.component.html',
    styleUrls: ['./traffic-status.component.scss']
})
export class TrafficStatusComponent implements OnInit, OnDestroy {
    constructor(private trafficService: TrafficStatusService) { }

    marquee: string;
    status: any;
    interval: any;
    index = -1;
    count = 0;

    ngOnInit() {
        this.trafficService.triffic$.subscribe(val => {
            this.status = val;
            console.log(this.status);

        });

        this.interval = setInterval(() => {
            this.getMarquee();
        }, 5000);
         this.trafficService.check();
    }

    getMarquee() {
       this.count++;
       if (this.count > 1000) {
           this.count = 0;
           this.trafficService.check();
       }

        this.index++;
    
        let text = this.status[this.index % this.status.length].comment;
        this.marquee = text.substr(0,280);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
