import { Component, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-departure',
    templateUrl: './departure.component.html',
    styleUrls: ['./departure.component.scss']   ,
    animations: [ExpandModel]
})
export class DepartureComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place === 'departure') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}
