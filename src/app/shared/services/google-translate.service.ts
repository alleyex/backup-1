import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class GoogleTranslateService {
    constructor(private httpClient: HttpClient) { }

    translate(q: string, target: string) {
        const url = 'https://translation.googleapis.com/language/translate/v2';

        const source = 'zh-tw';
        return this.httpClient.get<any>(url, {
            params: new HttpParams()
            .append('q', q)
            .append('source', source)
            .append( 'target', target)
            .append('key', 'AIzaSyCA4W15qGAyT7GjJ3F5IEf9MaPRFliNyPs')
        });
    }
}
