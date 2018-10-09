import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class TrafficStatusService {
    constructor(private httpCliend: HttpClient) {}
    check(): RoadStatus[] {
        let items: RoadStatus[] = [];
        const url = 'https://us-central1-mercury-object.cloudfunctions.net/traffic';
        this.httpCliend.get<any>(url).subscribe(result => {
            result.forEach(element => {
                items.push({
                    happendate: element.happendate,
                    name: element.name,
                    roadtype: element.roadtype,
                    comment: element.comment
                });
            });
        });
        return items;
    }
}

export interface RoadStatus {
    happendate: string,
    name: string,
    roadtype: string,
    comment: string
}