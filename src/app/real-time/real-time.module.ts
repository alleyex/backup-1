import { NgModule } from '@angular/core'; 

import { WeatherStationComponent } from './weather-station/weather-station.component';
import { WeatherBureauService } from './weather-bureau.service';
import { SharedModule } from '../shared/shared.module'; 
 
import { HighwayComponent } from './highway/highway.component';
import { HighwayService } from './highway/highway.service';
import { RoadStatusComponent } from './highway/road-status/road-status.component';
 

@NgModule({
    declarations: [
        WeatherStationComponent,         
        HighwayComponent,
        RoadStatusComponent
    ],
    imports:[
       SharedModule
    ],
    exports: [
        HighwayComponent,
        WeatherStationComponent
         
    ],
    providers:[
        WeatherBureauService,
        
        HighwayService
    ]
})
export class RealTimeModule {}