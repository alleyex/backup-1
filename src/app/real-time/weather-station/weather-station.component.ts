import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService, WeatherStation } from './weather.service';

@Component({
    selector: 'app-weather-station',
    templateUrl: './weather-station.component.html',
    styleUrls: ['./weather-station.component.scss']
})
export class WeatherStationComponent implements OnInit, OnDestroy {

    weather$: Subscription;
    data: WeatherStation = {
        altitude: '',
        date: '',
        highest: '',
        humidity: '',
        lowest: '',
        rain: '',
        temperature: '',
        time: ''
    };

    interval: any;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weather$ = this.weatherService.weather$.subscribe(result => {
            this.data = result;
        });
        this.weatherService.check();
        this.weatherService.check();
        // 每5分鐘檢查1次
        this.interval = setInterval(() => {
            this.weatherService.check();
        }, 300000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
        this.weather$.unsubscribe();
    }
}
