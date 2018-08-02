import { Component, Input, OnChanges } from '@angular/core';
import { ExpandModel } from '../dashboard/main/main.model';

@Component({
    selector: 'app-meeting-room',
    templateUrl: './meeting-room.component.html',
    styleUrls: ['./meeting-room.component.scss'],
    animations: [ExpandModel]
})
export class MeetingRoomComponent implements OnChanges {
    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {      
        if (this.place == 'meeting-room') {
            this.isDivVisible = true;

        } else {
            this.isDivVisible = false;
        }
    }
}