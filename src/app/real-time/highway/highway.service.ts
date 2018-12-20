import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable()
export class HighwayService implements OnDestroy {
    constructor(private httpCliend: HttpClient) { }
    status$: Subscription;

    getRoadStatus(): RoadStatus[] {
        const list: RoadStatus[] = [];
        const url = 'https://us-central1-mercury-object.cloudfunctions.net/traffic';
        this.status$ = this.httpCliend.get<any>(url).subscribe(result => {
            result.forEach(element => {
                list.push({
                    happendate: element.happendate,
                    name: element.name,
                    roadtype: element.roadtype,
                    comment: element.comment
                });
            });
        });
        return list;
    }

    ngOnDestroy() {
        this.status$.unsubscribe();
    }
}

export interface RoadStatus {
    happendate: string;
    name: string;
    roadtype: string;
    comment: string;
}
