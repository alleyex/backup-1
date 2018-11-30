import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './database.service';

@Injectable()
export class GuestService {
    constructor(private httpClient: HttpClient, private database: DatabaseService) { }

    public async Log() {
        const data = {};

        const now = new Date();
        data['date'] = now;

        this.getIp(data);
    }

    private getIp(data: any) {
        const ip = localStorage.getItem('ip');
        if (ip) {
            data['ip'] = ip;
            this.save(data);

        } else {
            const url = 'https://api.ipify.org/';
            this.httpClient.get(url, { responseType: 'text' }).subscribe(res => {
                localStorage.setItem('ip', res);
                data['ip'] = res;
                this.save(data);
            });
        }
    }

    private save(data: any) {
        const node = 'guests/';
        this.database.update(node, data);
    }
}
