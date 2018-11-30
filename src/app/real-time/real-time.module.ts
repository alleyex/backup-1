import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HighwayComponent } from './highway/highway.component';
import { HighwayService } from './highway/highway.service';
import { RoadStatusComponent } from './highway/road-status/road-status.component';
import { CameraComponent } from './camera/camera.component';
import { WeatherStationComponent } from './weather-station/weather-station.component';
import { WeatherService } from './weather-station/weather.service';


@NgModule({
    declarations: [
        WeatherStationComponent,
        HighwayComponent,
        RoadStatusComponent,
        CameraComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HighwayComponent,
        CameraComponent,
        WeatherStationComponent
    ],
    providers: [
        HighwayService,
        WeatherService
    ]
})
export class RealTimeModule { }
