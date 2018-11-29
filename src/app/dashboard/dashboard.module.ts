import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { GalleryModule, GalleryConfig } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { DashboardComponent } from './dashboard.component';
import { MainService } from './main/main.service';
import { MainComponent } from './main/main.component';
import { AsideRightComponent } from './aside-right/aside-right.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RealTimeModule } from '../real-time/real-time.module';
import { AnnounceModule } from '../announce/announce.mudule';
import { HotelComponent } from '../hotel/hotel.component';
import { CampsiteComponent } from '../campsite/campsite.component';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { TollboothComponent } from '../tollbooth/tollbooth.component';
import { DepartureComponent } from '../departure/departure.component';
import { EcotourismComponent } from '../ecotourism/ecotourism.component';
import { ProductComponent } from '../product/product.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ItineraryComponent } from '../itinerary/itinerary.component';
import { MeetingRoomComponent } from '../meeting-room/meeting-room.component';
import { TeaShopComponent } from '../tea-shop/tea-shop.component';
import { VisitorCenterComponent } from '../visitor-center/visitor-center.component';
import { CoffeeBarComponent } from '../coffee-bar/coffee-bar.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { GoogleMapService } from '../google-map/google-map.service';
import { DeviceService } from './device.service';
import { MenuComponent } from '../restaurant/menu/menu.component';
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
        TeaShopComponent,
        VisitorCenterComponent,
        CoffeeBarComponent,
        GoogleMapComponent,
        MenuComponent
    ],
    imports: [
        SharedModule,
        RealTimeModule,
        AnnounceModule,
        RealTimeModule,
        AppRoutingModule,
        AgmCoreModule,
        AgmDirectionModule,
        ScrollToModule.forRoot(),
        GalleryModule.forRoot({
            thumb: false,
            panSensitivity: 2000,
            nav: false,
            loop: true
        }),
        LightboxModule.forRoot(),
        GallerizeModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [MainService, GoogleMapService, DeviceService],
    entryComponents: [GoogleMapComponent, MenuComponent]
})
export class DashboardModule { }
