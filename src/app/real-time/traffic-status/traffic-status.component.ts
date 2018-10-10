import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficStatusService } from '../traffic-status.service';
import { GoogleTranslateService } from 'src/app/shared/services/google-translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-traffic-status',
    templateUrl: './traffic-status.component.html',
    styleUrls: ['./traffic-status.component.scss'],
    providers: [GoogleTranslateService]
})
export class TrafficStatusComponent implements OnInit, OnDestroy {
    constructor(private trafficService: TrafficStatusService, private googleTranslateService: GoogleTranslateService, private translateService: TranslateService) { }

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
        this.googleTranslateService.translate(text, this.translateService.currentLang).subscribe(x => {
            this.marquee = x.data.translations[0].translatedText.substr(0, 260);           
        });
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
