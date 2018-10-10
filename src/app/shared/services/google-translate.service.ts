import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class GoogleTranslateService {
    constructor(private httpClient: HttpClient) { }



    // marqueeChanged = new Subject<string>();

    // translateMarquee(text: string, target:string){
    //     this.translate(text, target).subscribe(result=>{
    //         text=this.text(result);
    //     });
    // }



    translate(q: string, target: string) {
        const url = 'https://translation.googleapis.com/language/translate/v2';

        let source = 'zh-tw';
        return this.httpClient.get<any>(url, {
            params:new HttpParams()
            .append('q', q)
            .append('source',source)
            .append( 'target', target)
            .append('key','AIzaSyCA4W15qGAyT7GjJ3F5IEf9MaPRFliNyPs')           
        })
    }

    // private text(text: any) {
    //     return text.data.translations[0].translatedText;
    // }
}