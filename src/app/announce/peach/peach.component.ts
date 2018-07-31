import { Component, Input } from '@angular/core';
import { BaseComponent } from '../announce.model';

@Component({ 
    templateUrl: './peach.component.html',
    styleUrls: ['./peach.component.scss']
})
export class PeachComponent implements BaseComponent {
    @Input() data: any;
     
}
