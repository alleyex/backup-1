import { Component, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-coffee-bar',
    templateUrl: './coffee-bar.component.html',
    styleUrls: ['./coffee-bar.component.scss'],
    animations: [ExpandModel]
})
export class CoffeeBarComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'coffee') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}