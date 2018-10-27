import { Component, OnInit } from '@angular/core';
import { RoadStatus, HighwayService } from './highway.service';

@Component({
    selector: 'app-highway',
    templateUrl: './highway.component.html',
    styleUrls: ['./highway.component.scss']
})
export class HighwayComponent implements OnInit {
    statuses: RoadStatus[];
    markedIndex = 100;

    constructor(private realtimeService: HighwayService) { }
       
    ngOnInit(): void {
        this.statuses = this.realtimeService.getRoadStatus();       
    } 
}
