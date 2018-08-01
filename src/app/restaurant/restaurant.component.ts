import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';
import { ExpandModel } from '../dashboard/main/main.model';


@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss'],
    animations: [ExpandModel]
})
export class RestaurantComponent implements OnInit, OnChanges {
    constructor(private gallery: Gallery) { }

    isDivVisible = false;
    @Input() place: string;
    ngOnChanges() {
        if (this.place == 'restaurant') {
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
        this.gallery.ref('lightbox').load(this.items);
    }
}

const data = [
    {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic01.jpg?alt=media&token=d2d3a4fe-dd0f-42d0-8e4d-f9e30fd706ca',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic01.jpg?alt=media&token=d2d3a4fe-dd0f-42d0-8e4d-f9e30fd706ca'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic02.jpg?alt=media&token=36ec9ad8-e69c-42b0-abc9-828ed5b5fb65',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic02.jpg?alt=media&token=36ec9ad8-e69c-42b0-abc9-828ed5b5fb65'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic03.jpg?alt=media&token=6773c0d3-b986-459c-80b2-bf7e14e8b6d3',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic03.jpg?alt=media&token=6773c0d3-b986-459c-80b2-bf7e14e8b6d3'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic04.jpg?alt=media&token=21b84a06-6f08-4bd6-8c5e-956a6b4be30e',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic04.jpg?alt=media&token=21b84a06-6f08-4bd6-8c5e-956a6b4be30e'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic05.jpg?alt=media&token=51b9b4cd-8539-4587-aa4e-ae6664890ff5',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic05.jpg?alt=media&token=51b9b4cd-8539-4587-aa4e-ae6664890ff5'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic06.jpg?alt=media&token=5c69c5fe-71b9-40cf-92c9-df5b9330496e',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic06.jpg?alt=media&token=5c69c5fe-71b9-40cf-92c9-df5b9330496e'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic07.jpg?alt=media&token=1905a779-b354-45ec-bd20-b40f249c88d1',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic07.jpg?alt=media&token=1905a779-b354-45ec-bd20-b40f249c88d1'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic08.jpg?alt=media&token=c41e67af-dca3-4cba-8993-2c3b959f5c10',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic08.jpg?alt=media&token=c41e67af-dca3-4cba-8993-2c3b959f5c10'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic09.jpg?alt=media&token=aefcf7b0-86e1-4cee-ab0a-478af04bf3d8',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic09.jpg?alt=media&token=aefcf7b0-86e1-4cee-ab0a-478af04bf3d8'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic09.jpg?alt=media&token=aefcf7b0-86e1-4cee-ab0a-478af04bf3d8',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic09.jpg?alt=media&token=aefcf7b0-86e1-4cee-ab0a-478af04bf3d8'
    }, {
        srcUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic10.jpg?alt=media&token=2da2da4a-ffda-4093-9eda-ed23673b8b8f',
        previewUrl: 'https://firebasestorage.googleapis.com/v0/b/mercury-object.appspot.com/o/restaurant%2Fintroduction%2Fpic10.jpg?alt=media&token=2da2da4a-ffda-4093-9eda-ed23673b8b8f'
    }
];
