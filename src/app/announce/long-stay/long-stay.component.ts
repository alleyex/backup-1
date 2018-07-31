import { Component, Input } from '@angular/core';
import { BaseComponent } from '../announce.model';

@Component({  
    templateUrl: './long-stay.component.html',
    styleUrls: ['./long-stay.component.scss']
})
export class LongStayComponent implements BaseComponent {
    @Input() data: any;
}