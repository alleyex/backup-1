import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, GalleryConfig, GalleryRef } from '@ngx-gallery/core';
import { ExpandModel } from '../dashboard/main/main.model';
import { MatDialog } from '@angular/material';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-campsite',
    templateUrl: './campsite.component.html',
    styleUrls: ['./campsite.component.scss'],
    animations: [ExpandModel]
})
export class CampsiteComponent implements OnInit, OnChanges {
    constructor(private gallery: Gallery, private dialog: MatDialog, private translateService: TranslateService) { }

    isDivVisible = false;
    @Input() place: string;
    ngOnInit() {
        this.album();

        this.translateService.onLangChange.subscribe((event) => {
            if (this.translateService.currentLang === 'zh-tw') {
               const el = document.querySelector('.order').classList.remove('notChinese');
            } else {
                const el = document.querySelector('.order').classList.add('notChinese');
            }
        });
    }

    ngOnChanges() {
        if (this.place === 'campsite') {
            this.isDivVisible = true;
        } else {
            this.isDivVisible = false;
        }
    }

    // tslint:disable-next-line:member-ordering
    items: GalleryItem[];
    // tslint:disable-next-line:member-ordering
    imageData = data;

    album() {
        const items = this.imageData.map(item => {
            return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl });
        });
        const album = this.gallery.ref('camping');
        album.load(items);
    }

    openMap(lat: number, lng: number) {
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
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-1.jpg?alt=media&token=b7f9d880-92a1-4e7b-bbe1-beef7f4855cf',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-1.jpg?alt=media&token=b7f9d880-92a1-4e7b-bbe1-beef7f4855cf'
    },
    {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-2.jpg?alt=media&token=3fb54ad2-eeed-45e1-9ae4-3d136b8c8d01',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-2.jpg?alt=media&token=3fb54ad2-eeed-45e1-9ae4-3d136b8c8d01'
    },
    {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-3.jpg?alt=media&token=6e0b3081-86bc-4399-8e7c-ba361bbac0ba',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-3.jpg?alt=media&token=6e0b3081-86bc-4399-8e7c-ba361bbac0ba'
    },
    {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-4.jpg?alt=media&token=c84a7e02-81af-44df-806a-e37919922ef2',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-4.jpg?alt=media&token=c84a7e02-81af-44df-806a-e37919922ef2'
    },
    {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-5.jpg?alt=media&token=dafe6e60-5fdc-4537-8733-63414f37d385',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-5.jpg?alt=media&token=dafe6e60-5fdc-4537-8733-63414f37d385'
    },
    {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-6.jpg?alt=media&token=54224725-31ea-4227-88c0-07a28b4de5ca',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-6.jpg?alt=media&token=54224725-31ea-4227-88c0-07a28b4de5ca'
    }, {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-7.jpg?alt=media&token=bfc1d471-2a91-4918-b398-bd47fe9b3dca',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-7.jpg?alt=media&token=bfc1d471-2a91-4918-b398-bd47fe9b3dca'
    }, {
        // tslint:disable-next-line:max-line-length
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-8.jpg?alt=media&token=c13decbc-45b2-46f9-8801-fe52c8bea8f9',
        // tslint:disable-next-line:max-line-length
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/camping%2Falbum%2F%E5%9C%96%E7%89%87%E9%9B%86-8.jpg?alt=media&token=c13decbc-45b2-46f9-8801-fe52c8bea8f9'
    }
];
