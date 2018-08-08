import { Component, Input, OnChanges } from "@angular/core";
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { ExpandModel } from "../dashboard/main/main.model";
import { MatDialog } from "@angular/material";
import { GoogleMapComponent } from "../google-map/google-map.component";


@Component({
    selector: 'app-campsite',
    templateUrl: './campsite.component.html',
    styleUrls: ['./campsite.component.scss'],
    animations: [ExpandModel]
})
export class CampsiteComponent implements OnChanges {
    constructor(private gallery: Gallery, private dialog: MatDialog) { }

    isDivVisible = false;
    @Input() place: string;

    ngOnChanges() {
        if (this.place == 'campsite') {
            this.isDivVisible = true;
        } else {
            this.isDivVisible = false;
        }
    }
    items: GalleryItem[];
    imageData = data;
    ngOnInit() {
        this.items = this.imageData.map(item => {
            return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
        });
        this.gallery.ref('camping').load(this.items);
    }

    openMap(lat: number, lng: number) {
        console.log(lat + ':'+lng);
        this.dialog.open(GoogleMapComponent, {
            data: {
                lat: lat,
                lng: lng
            },
            height: '92vh',
            width: '100vw',
        });

    }



}

const data = [
    {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-1.jpg?alt=media&token=c0e36ca8-9a5b-4c6e-9e5c-7275809de071',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-1.jpg?alt=media&token=c0e36ca8-9a5b-4c6e-9e5c-7275809de071'
    },
    {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-11.jpg?alt=media&token=7069bed5-734c-4109-8719-2f9610c19ffb',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-11.jpg?alt=media&token=7069bed5-734c-4109-8719-2f9610c19ffb'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-12.jpg?alt=media&token=dfb4e40f-c1d5-4ab0-bb4b-9d1e5716c605',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-12.jpg?alt=media&token=dfb4e40f-c1d5-4ab0-bb4b-9d1e5716c605'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-13.jpg?alt=media&token=825ba80f-f224-4df7-ae91-2897f4e99ffe',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2Fpic1-1-13.jpg?alt=media&token=825ba80f-f224-4df7-ae91-2897f4e99ffe'
    }

];