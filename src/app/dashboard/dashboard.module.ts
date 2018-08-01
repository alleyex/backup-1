import { NgModule } from '@angular/core';
 
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { RealTimeModule } from '../real-time/real-time.module';
import { AsideRightComponent } from './aside-right/aside-right.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { AnnounceModule } from '../announce/announce.mudule';
import { HotelComponent } from '../hotel/hotel.component';
import { CampsiteComponent } from '../campsite/campside.component';  
import { RestaurantComponent } from '../restaurant/restaurant.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        MainComponent,
        AsideLeftComponent,
        AsideRightComponent,
        FooterComponent,
        HotelComponent,
        CampsiteComponent,
        RestaurantComponent
    ],
    imports: [ 
        SharedModule,
        RealTimeModule,
        AnnounceModule,
        RealTimeModule 
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule {}