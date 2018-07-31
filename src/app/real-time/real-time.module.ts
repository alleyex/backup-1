import { NgModule } from '@angular/core'; 

import { WeatherStationComponent } from './weather-station/weather-station.component';
import { WeatherBureauService } from './weather-bureau.service';
import { SharedModule } from '../shared/shared.module';

 

@NgModule({
    declarations: [
        WeatherStationComponent
    ],
    imports:[
       SharedModule
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