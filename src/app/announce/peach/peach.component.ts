import { Component, Input } from '@angular/core';
import { BaseComponent } from '../announce.model';
import { MatDialog } from '@angular/material';
import { PriceComponent } from './price.component';

@Component({ 
    templateUrl: './peach.component.html',
    styleUrls: ['./peach.component.scss']
})
export class PeachComponent implements BaseComponent {
    @Input() data: any;

    constructor(private dialog: MatDialog){}

    getPrice(){
        this.dialog.open(PriceComponent);
    }
     
}
