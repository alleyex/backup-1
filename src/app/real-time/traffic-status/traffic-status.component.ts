import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficStatusService} from '../traffic-status.service';

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
        this.interval = setInterval(() => {
            this.getMarquee();
        }, 5000);
        this.status = this.trafficService.check();
    }

    getMarquee() {
       this.count++;
       if (this.count > 1000) {
           this.count = 0;
           this.status = this.trafficService.check();
       }

        this.index++;
    
        let text = this.status[this.index % this.status.length].comment;
        this.marquee = text.substr(0,260);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
