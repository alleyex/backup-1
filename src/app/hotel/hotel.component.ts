import { Component, OnChanges, Input } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss'],
    animations: [ExpandModel]
})
export class HotelComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        // let cellphone = window.innerWidth <= 480;

        // console.log('---------------------------');
        // console.log('this.place = ' + this.place);
        // console.log('this.isDivVisible = ' + this.isDivVisible);

        // if (cellphone) {
        //     if (this.place == 'hotel') {
        //         if (this.isDivVisible) {
        //             this.isDivVisible = false;
        //         } else {
        //             this.isDivVisible = true;
        //         }
        //     } else if (this.place == 'hotel-close') {
        //         this.isDivVisible = false;
        //     }
        // }
        // else {
            if (this.place == 'hotel') {
                this.isDivVisible = true;
            } else {
                this.isDivVisible = false;
            }
        // }
    }
}
