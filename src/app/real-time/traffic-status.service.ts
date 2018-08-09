import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "Angularfire2/database";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TrafficStatusService {
    triffic$: Observable<any>;
    
    constructor(private httpCliend: HttpClient, private db: AngularFireDatabase) {
        this.triffic$ = this.db.list('traffic-status').valueChanges();
          }

    check() {
        const url = '/pbsmgt/RoadAllServlet?ajaxAction=roadAllCache';
        return this.httpCliend.get<any>(url).subscribe(result => {
            let filter = result.formData.filter(
                function (result) {
                    return result.area_sn == '20080' || result.area_sn == '20071'
                }).sort(result => result.lastmodified);

            let itemRef = this.db.list('traffic-status');
            itemRef.remove();
            filter.forEach(element => {
                itemRef.push({
                    happendate: element.happendate,
                    name: element.name,
                    roadtype: element.roadtype,
                    comment: element.comment
                });
            });
        });
    }
}

export interface RoadStatus {
    happendate: string,
    name: string,
    roadtype: string,
    comment: string
}