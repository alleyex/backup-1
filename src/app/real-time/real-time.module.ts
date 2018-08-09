import { NgModule } from '@angular/core'; 

import { WeatherStationComponent } from './weather-station/weather-station.component';
import { WeatherBureauService } from './weather-bureau.service';
import { SharedModule } from '../shared/shared.module';
import { TrafficStatusComponent } from './traffic-status/traffic-status.component';
import { TrafficStatusService } from './traffic-status.service';

@NgModule({
    declarations: [
        WeatherStationComponent,
        TrafficStatusComponent
    ],
    imports:[
       SharedModule
    ],
    exports: [
        WeatherStationComponent,
        TrafficStatusComponent
    ],
    providers:[
        WeatherBureauService,
        TrafficStatusService
    ]
})
export class RealTimeModule {}