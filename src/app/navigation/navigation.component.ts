import { Component,  OnChanges, Input } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [ExpandModel]
})
export class NavigationComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place === 'navigation') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}
