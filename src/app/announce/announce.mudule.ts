import { NgModule } from "@angular/core";
import { AnnounceComponent } from "./announce.component";
import { LongStayComponent } from "./long-stay/long-stay.component";
import { SharedModule } from "../shared/shared.module";
import { AnnounceService } from "./announce.service";
import { KanbanComponent } from "./kanban/kanban.component"; 
import { KanbanDirective } from "./kanban/kanban.directive";
import { PeachComponent } from "./peach/peach.component";

@NgModule({
    declarations: [
       AnnounceComponent,
       LongStayComponent,
       PeachComponent,
       KanbanComponent,
       KanbanDirective       
    ],
    imports:[         
         SharedModule
        ],
    exports: [
        AnnounceComponent      
    ],
    providers:[AnnounceService],
    entryComponents: [LongStayComponent ,PeachComponent]
})
export class AnnounceModule { }