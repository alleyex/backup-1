import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { AngularFireDatabase } from 'Angularfire2/database';


@Injectable()
export class WeatherBureauService {
    weather$: Observable<any>;

    constructor(private httpCliend: HttpClient, private db: AngularFireDatabase) {
        this.weather$ = this.db.object('weather-station').valueChanges();
    }
    check() {
        const url = '/api/v1/rest/datastore/O-A0003-001';
        this.httpCliend.get<any>(url, {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams()
                .append('Authorization', 'CWB-394C0928-C7D7-4F09-B453-4B60B146947D')
                .append('stationId', 'D2F230')
        }).subscribe(result => {
            let query = result.records.location[0];
            console.log(query);
            let itemRef = this.db.object('weather-station');
            itemRef.update({
                altitude: query.weatherElement[0].elementValue,
                date: query.time.obsTime.substr(0, 10),
                highest: query.weatherElement[14].elementValue + ' \xB0C',
                humidity: Math.round(query.weatherElement[4].elementValue * 100) + ' %',
                lowest: query.weatherElement[16].elementValue + ' \xB0C',
                rain: query.weatherElement[6].elementValue + ' mm',
                temperature: query.weatherElement[3].elementValue + ' \xB0C',
                time: query.time.obsTime.substr(11, 10)
            });
        });
    }
}

export interface WeatherStation {
    date: string,
    time: string,
    altitude: string,
    currentTemp: string,
    lowTemp: string,
    humidity: string,
    rainfall: string
}