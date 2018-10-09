import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class WeatherBureauService {
    weather$= new Subject<WeatherStation>();
    constructor(private httpCliend: HttpClient) { }
    
    check() {
        let data: WeatherStation;
        const url = 'https://us-central1-mercury-object.cloudfunctions.net/weather';
        this.httpCliend.get<any>(url, {
            observe: 'body',
            responseType: 'json'
        }).subscribe(result => {
            let query = result.records.location[0];
            data = {
                altitude: query.weatherElement[0].elementValue,
                date: query.time.obsTime.substr(0, 10),
                highest: query.weatherElement[14].elementValue + ' \xB0C',
                humidity: Math.round(query.weatherElement[4].elementValue * 100) + ' %',
                lowest: query.weatherElement[16].elementValue + ' \xB0C',
                rain: query.weatherElement[6].elementValue + ' mm',
                temperature: query.weatherElement[3].elementValue + ' \xB0C',
                time: query.time.obsTime.substr(11, 10)
            };

            this.weather$.next(data);
        });
       
    }
}

export interface WeatherStation {
    altitude: string ,
    date: string,
    highest: string,
    humidity: string,
    lowest: string,
    rain: string,
    temperature: string,
    time: string
}