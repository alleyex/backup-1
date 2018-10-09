import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-poster',
    template: `<img src="https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/announce%2Flong-stay%2Fposter.jpg?alt=media&token=8cae2b26-84da-4c44-8c3e-4faa9612769d" 
    style="width: 100% ; height: 100% ;  padding: 0; margin: 0; " alt="" />`
})
export class PosterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
