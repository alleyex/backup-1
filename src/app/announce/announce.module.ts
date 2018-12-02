import { NgModule } from '@angular/core';
import { AnnounceComponent } from './announce.component';
import { LongStayComponent } from './long-stay/long-stay.component';
import { SharedModule } from '../shared/shared.module';
import { AnnounceService } from './announce.service';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanDirective } from './kanban/kanban.directive';
import { PeachComponent } from './peach/peach.component';
import { PosterComponent } from './long-stay/poster.component';
import { PriceComponent } from './peach/price.component';
import { MicroTripComponent } from './micro-trip/micro-trip.component';

@NgModule({
    declarations: [
        AnnounceComponent,
        LongStayComponent,
        PeachComponent,
        KanbanComponent,
        KanbanDirective,
        PosterComponent,
        PriceComponent,
        MicroTripComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AnnounceComponent
    ],
    providers: [AnnounceService],
    entryComponents: [LongStayComponent, PeachComponent, PosterComponent, PriceComponent]
})
export class AnnounceModule { }
