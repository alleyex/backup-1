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
import { CampsiteComponent } from '../campsite/campsite.component';  
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { AppRoutingModule } from '../app-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { GalleryModule } from '@ngx-gallery/core';
import { MainService } from './main/main.service';
import { TollboothComponent } from '../tollbooth/tollbooth.component';
import { DepartureComponent } from '../departure/departure.component';
import { EcotourismComponent } from '../ecotourism/ecotourism.component';
import { ProductComponent } from '../product/product.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ItineraryComponent } from '../itinerary/itinerary.component';
import { MeetingRoomComponent } from '../meeting-room/meeting-room.component';
import { TeaShopComponent } from '../tea-shop/tea-shop.component';

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
        RestaurantComponent,
        TollboothComponent,
        DepartureComponent,
        EcotourismComponent,
        ProductComponent,
        NavigationComponent,
        ItineraryComponent,
        MeetingRoomComponent,
        TeaShopComponent
    ],
    imports: [ 
        SharedModule,
        RealTimeModule,
        AnnounceModule,
        RealTimeModule ,
        AppRoutingModule,
        ScrollToModule.forRoot(),
        GalleryModule.forRoot()
    ],
    exports: [
        DashboardComponent
    ],
    providers: [MainService],
})
export class DashboardModule {}