import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {  
     
    ngOnInit(){        
        document.querySelector('.camera').addEventListener('click', this.clickVedio);
    }

    clickVedio(e){
        document.querySelector('.camera').classList.toggle('big');            
    }
}