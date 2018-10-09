import { Component, Input } from '@angular/core';
import { BaseComponent } from '../announce.model';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { PosterComponent } from './poster.component';

@Component({  
    templateUrl: './long-stay.component.html',
    styleUrls: ['./long-stay.component.scss']
})
export class LongStayComponent implements BaseComponent {
    @Input() data: any;
    constructor(private dialog: MatDialog){}
    
    getPrice(){
        this.dialog.open(PosterComponent);
    }
     
}