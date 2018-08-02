import { Component, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    animations: [ExpandModel]
})
export class ProductComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'product') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}
