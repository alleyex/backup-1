import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
    folder$: Observable<any>;
    root : any;
    
    constructor(private storage: AngularFireStorage) {
        this.root = this.storage.ref('hotel').getDownloadURL;
       
    }

      getPictures(){
          //console.log(this.root);
         // console.log('getPictures');
     }







}