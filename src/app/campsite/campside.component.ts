import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";


@Component({
    selector: 'app-campsite',
    templateUrl: './campsite.component.html',
    styleUrls: ['./campsite.component.scss'],
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
            transition('true =>false', animate('450ms  ease-out'))
        ])
    ]
})
export class CampsiteComponent implements OnChanges  {
    isDivVisible = false;
    @Input() place: string;
    
    ngOnChanges() {       
        if (this.place == 'campsite') {
            this.isDivVisible = true;
        } else {           
            this.isDivVisible = false;
        }
    }   

}