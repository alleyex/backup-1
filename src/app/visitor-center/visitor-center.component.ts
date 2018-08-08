import { Component, OnChanges, Input } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-visitor-center',
    templateUrl: './visitor-center.component.html',
    styleUrls: ['./visitor-center.component.scss'],
    animations: [ExpandModel]
})
export class VisitorCenterComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'visitor') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}