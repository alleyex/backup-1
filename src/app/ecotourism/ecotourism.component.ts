import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-ecotourism',
    templateUrl: './ecotourism.component.html',
    styleUrls: ['./ecotourism.component.scss'],
    animations: [ExpandModel]
})
export class EcotourismComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'ecotourism') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}
