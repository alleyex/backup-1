import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable()
export class GuestService implements OnDestroy {
    constructor(private httpClient: HttpClient,
        private database: DatabaseService,
        private translate: TranslateService) { }

    getIp$: Subscription;
    getArea$: Subscription;

    public Log(event: string) {
        const data = {};
        data['event'] = event;

        const now = new Date();
        data['date'] = now;

        const browserLang = this.translate.getBrowserLang();
        data['browserLang'] = browserLang;

        this.getIp(data);
    }

    private getIp(data: any) {
        const ip = localStorage.getItem('ip');
        if (ip) {
            data['ip'] = ip;
            this.getArea(data);

        } else {
            const url = 'https://api.ipify.org/';
            this.getIp$ = this.httpClient.get(url, { responseType: 'text' }).subscribe(res => {
                localStorage.setItem('ip', res);
                data['ip'] = res;
                this.getArea(data);
            });
        }
    }

    private getArea(data: any) {
        const info = localStorage.getItem('ipinfo');
        if (info) {
            const ipinfo = JSON.parse(info);
            data['address'] = ipinfo.ipAddress;
            data['city'] = ipinfo.cityName;
            data['timeZone'] = ipinfo.timeZone;
            data['longitude'] = ipinfo.longitude;
            data['latitude'] = ipinfo.latitude;
            if (ipinfo.countryCode === 'TW') {
                data['country'] = 'Taiwan';
            } else {
                data['country'] = ipinfo.countryName;
            }
        } else {
            // tslint:disable-next-line:max-line-length
            const url = 'https://api.ipinfodb.com/v3/ip-city/?key=25864308b6a77fd90f8bf04b3021a48c1f2fb302a676dd3809054bc1b07f5b42&format=json';
            this.getArea$ = this.httpClient.get<any>(url).subscribe(res => {
                localStorage.setItem('ipinfo', JSON.stringify(res));
                data['address'] = res.ipAddress;
                data['city'] = res.cityName;
                data['timeZone'] = res.timeZone;
                data['longitude'] = res.longitude;
                data['latitude'] = res.latitude;
                if (res.countryCode === 'TW') {
                    data['country'] = 'Taiwan';
                } else {
                    data['country'] = res.countryName;
                }
            });
        }
        this.save(data);
    }

    private save(data: any) {
        if (data['country'] !== 'Taiwan') {
        const node = 'guests/';
        this.database.update(node, data);
        }
    }

    ngOnDestroy() {
        this.getIp$.unsubscribe();
        this.getArea$.unsubscribe();
    }
}
