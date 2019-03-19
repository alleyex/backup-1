import { Component, OnInit, ViewChild } from '@angular/core';
import { KanbanItem } from './announce.model';
import { AnnounceService } from './announce.service';
import { KanbanComponent } from './kanban/kanban.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-announce',
    templateUrl: './announce.component.html',
    styleUrls: ['./announce.component.scss']
})
export class AnnounceComponent implements OnInit {
    @ViewChild(KanbanComponent) kanban: KanbanComponent;
    kanbans: KanbanItem[];
    index: number;
    translate$: Subscription;

    constructor(private announceService: AnnounceService, private translateService: TranslateService) { }

    ngOnInit() {
        this.kanbans = this.announceService.getKanbans();
        this.translate$ = this.translateService.onLangChange.subscribe((event) => {
            if (this.translateService.currentLang === 'zh-tw') {
                // this.kanbans = this.announceService.getKanbans();
                this.kanbans = this.announceService.getCanbans();
            } else {
                this.kanbans = this.announceService.getCanbans();

            }
        });
    }

    kanbanChanged(index: number) {
        this.index = index;
    }

    kanbanSelected(index: number) {
        this.kanban.manually(index);
    }


}
