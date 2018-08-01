import { Component, Input, OnChanges } from "@angular/core";
import { ExpandModel } from "../dashboard/main/main.model";


@Component({
    selector: 'app-campsite',
    templateUrl: './campsite.component.html',
    styleUrls: ['./campsite.component.scss'],
    animations: [ExpandModel]
})
export class CampsiteComponent implements OnChanges  {
    isDivVisible = false;
    @Input() place: string;
    
    ngOnChanges() {       
        if (this.place == 'campsite') {
            this.isDivVisible = true;
        } else {           
            this.isDivVisible = false;
        }
    }   

}