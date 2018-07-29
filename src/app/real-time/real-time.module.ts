import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"; 

import { WeatherStationComponent } from './weather-station/weather-station.component';
import { WeatherBureauService } from './weather-bureau.service';

 

@NgModule({
    declarations: [
        WeatherStationComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        WeatherStationComponent
    ],
    providers:[
        WeatherBureauService
    ]


})
export class RealTimeModule {

}