import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IpService {
    constructor(private httpClient: HttpClient) { }

    getClientIp() {
        const ip = localStorage.getItem('ip');
        if (!ip) {
            const url = 'http://ipv4.myexternalip.com/json';
            this.httpClient.get<any>(url).subscribe(res => {
                localStorage.setItem('ip', res.ip);
            });
        }
    }
}
