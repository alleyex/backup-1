import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-tea-shop',
    templateUrl: './tea-shop.component.html',
    styleUrls: ['./tea-shop.component.scss'],
    animations: [ExpandModel]
})
export class TeaShopComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {     
       
        console.log('tea place:' +this.place); 
        if (this.place == 'tea') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}