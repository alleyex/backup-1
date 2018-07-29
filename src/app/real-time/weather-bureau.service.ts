import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
 

@Injectable()
export class WeatherBureauService{
    constructor(private httpCliend: HttpClient) { }

    weatherChanged = new Subject<WeatherStation>();

    getData() {
        const url = '/api/v1/rest/datastore/O-A0003-001';
        this.httpCliend.get<any>(url, {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams()
                .append('Authorization', 'CWB-394C0928-C7D7-4F09-B453-4B60B146947D')
                .append('stationId', 'D2F230')
        }).subscribe(result => {          
            let query = result.records.location[0];
            let data = {
                date: query.time.obsTime.substr(0, 10),
                time: query.time.obsTime.substr(11, 10),
                altitude: query.weatherElement[0].elementValue,
                currentTemp:  query.weatherElement[3].elementValue + ' \xB0C',
                lowTemp: query.weatherElement[16].elementValue + ' \xB0C',
                humidity: Math.round(query.weatherElement[4].elementValue* 100) + ' %',
                rainfall: query.weatherElement[6].elementValue + ' mm'
            };
           
            this.weatherChanged.next(data);
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