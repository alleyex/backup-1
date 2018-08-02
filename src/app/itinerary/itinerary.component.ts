import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-itinerary',
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.scss'],
    animations: [ExpandModel]
})
export class ItineraryComponent  implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {      
        if (this.place == 'itinerary') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}

