import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStation, WeatherBureauService } from '../weather-bureau.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-weather-station',
    templateUrl: './weather-station.component.html',
    styleUrls: ['./weather-station.component.scss']
})
export class WeatherStationComponent implements OnInit, OnDestroy {

    weather$: Subscription;
    data: WeatherStation = {
        altitude:'',
        date:'',
        highest: '',
        humidity:'',
        lowest:'',
        rain: '',
        temperature: '',
        time: ''
    };

    interval: any;

    constructor(private weatherBureauService: WeatherBureauService) { }

    ngOnInit() {
        this.weather$ = this.weatherBureauService.weather$.subscribe(result => {
            this.data = result;           
        });
        this.weatherBureauService.check();
        this.weatherBureauService.check();
        //每5分鐘檢查1次
        this.interval = setInterval(() => {
            this.weatherBureauService.check();
        }, 300000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
        this.weather$.unsubscribe();
    }
}