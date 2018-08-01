import { Component, Input, OnChanges } from "@angular/core";
import { ExpandModel } from "../dashboard/main/main.model";

@Component({
    selector:'app-tollbooth',
    templateUrl:'./tollbooth.component.html',
    styleUrls:['./tollbooth.component.scss'],
    animations: [ExpandModel]
})
export class TollboothComponent implements OnChanges{
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {     
        if (this.place == 'tollbooth') {
            this.isDivVisible = true;
        } else {
            this.isDivVisible = false;
        }
    }
    
}
