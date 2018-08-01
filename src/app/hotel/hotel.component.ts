import { Component, OnChanges, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss'],
    animations: [
        trigger('place', [
            state('false', style({
                overflow: 'hidden',
                height: '0px',
                transform: 'scale(0)'
            })),
            state('true', style({
                overflow: 'hidden',
                height: '*',
                transform: 'scale(1)'
            })),
            transition('false =>true', animate('480ms 200ms ease-in')),
            transition('true =>false', animate('450ms  ease-in'))
        ])
    ]
})
export class HotelComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'hotel') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}
