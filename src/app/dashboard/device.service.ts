import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DeviceService {
    isCellpone$ = new Subject<boolean>();
    checkScreen() {
        if (window.innerWidth <= 480) {
            this.isCellpone$.next(false);
        }
        if (window.innerWidth > 480) {
            this.isCellpone$.next(true);
        }
    }
}
