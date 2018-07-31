import { Component, OnInit, ViewChild } from '@angular/core';
import { KanbanItem } from './announce.model';
import { AnnounceService } from './announce.service';
import { KanbanComponent } from './kanban/kanban.component';

@Component({
    selector: 'app-announce',
    templateUrl: './announce.component.html',
    styleUrls: ['./announce.component.scss']
})
export class AnnounceComponent implements OnInit {
    @ViewChild(KanbanComponent) kanban: KanbanComponent;
    kanbans: KanbanItem[];
    index: number;
   
    constructor(private announceService: AnnounceService) { }

    ngOnInit() { 
        this.kanbans = this.announceService.getKanbans();        
    }

    kanbanChanged(index: number) {        
        this.index = index;
    }

    kanbanSelected(index:number){        
        this.kanban.manually(index);
    }

    
}
