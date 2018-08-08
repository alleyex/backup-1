import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStation, WeatherBureauService } from '../weather-bureau.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-weather-station',
    templateUrl: './weather-station.component.html',
    styleUrls: ['./weather-station.component.scss']
})
export class WeatherStationComponent implements OnInit,OnDestroy{
    newly: WeatherStation = {
        date: '',
        time: '',
        altitude: '',
        currentTemp: '',
        lowTemp: '',
        humidity: '',
        rainfall: ''
    };
    changed: Subscription;
    interval: any;

    constructor(private weatherBureauService: WeatherBureauService) { }

    ngOnInit() {
        this.changed = this.weatherBureauService.weatherChanged.subscribe(result => {
            this.newly = result;
        });

        // this.getData();

        // //每5分鐘檢查1次
        // this.interval = setInterval(() => {
        //     this.getData();
        // }, 300000);
    }

    getData() {
        this.weatherBureauService.getData();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
        this.changed.unsubscribe();
    }

}