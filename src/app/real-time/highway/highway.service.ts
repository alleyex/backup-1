import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HighwayService {
    constructor(private httpCliend: HttpClient) { }

    getRoadStatus(): RoadStatus[] {
        let list: RoadStatus[] = [];
        const url = 'https://us-central1-mercury-object.cloudfunctions.net/traffic';
        this.httpCliend.get<any>(url).subscribe(result => {
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
}
export interface RoadStatus {
    happendate: string,
    name: string,
    roadtype: string,
    comment: string
}