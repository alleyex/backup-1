import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStation, WeatherBureauService } from '../weather-bureau.service';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'app-weather-station',
    templateUrl: './weather-station.component.html',
    styleUrls: ['./weather-station.component.scss']
})
export class WeatherStationComponent implements OnInit, OnDestroy {
    
    data$: Observable<any>;
   
    interval: any;

    constructor(private weatherBureauService: WeatherBureauService) { }

    ngOnInit() {
        this.data$ = this.weatherBureauService.weather$;
        this.weatherBureauService.check();
        //每5分鐘檢查1次
        this.interval = setInterval(() => {
           this.weatherBureauService.check();
       }, 300000);
    }    

    ngOnDestroy() {
        clearInterval(this.interval);            
    }
}