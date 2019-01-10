import { Injectable } from '@angular/core';
import { KanbanItem } from './announce.model';
import { LongStayComponent } from './long-stay/long-stay.component';
import { PeachComponent } from './peach/peach.component';

@Injectable()
export class AnnounceService {
    getKanbans() {
        return [
            new KanbanItem(PeachComponent, {
                stop: false
            }),
            new KanbanItem(LongStayComponent, {
                stop: false
            })
        ];
    }

    getCanbans() {
        return [
            new KanbanItem(PeachComponent, {
                stop: false
            })
        ];
    }
}
