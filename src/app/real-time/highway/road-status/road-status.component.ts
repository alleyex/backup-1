import { Component, Input, OnInit } from '@angular/core';
import { RoadStatus } from '../highway.service';
import { GoogleTranslateService } from 'src/app/shared/services/google-translate.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-road-status',
    templateUrl: './road-status.component.html',
    styleUrls: ['./road-status.component.scss'],
    providers: [GoogleTranslateService]
})
export class RoadStatusComponent implements OnInit {
    @Input() status: RoadStatus;

    private original: RoadStatus;
    private english: RoadStatus;

    constructor(private googleTranslateService: GoogleTranslateService, private translateService: TranslateService) { }

    ngOnInit() {
        this.original = Object.assign({}, this.status);

        if (this.translateService.currentLang !== 'zh-tw') {
            this.convert();
        }

        this.translateService.onLangChange.subscribe((event) => {
            if (this.translateService.currentLang === 'zh-tw') {
                this.status = Object.assign({}, this.original);
            } else {
                if (this.english) {
                    this.status = Object.assign({}, this.english);
                } else {
                    this.convert();
                }
            }
        });
    }

    private convert() {

        this.english = Object.assign({}, this.status);

        this.googleTranslateService.translate(this.replace(this.original.comment), 'en').subscribe(result => {
            this.status.comment = this.english.comment = result.data.translations[0].translatedText;
        });

        this.googleTranslateService.translate(this.original.roadtype, 'en').subscribe(result => {
            this.status.roadtype = this.english.roadtype = result.data.translations[0].translatedText;
        });
    }

    replace(comment: string): string {
        comment = comment.replace(/109年/g, '2020年');
        comment = comment.replace(/108年/g, '2019年');
        comment = comment.replace(/107年/g, '2018年');
        comment = comment.replace(/106年/g, '2017年');
        comment = comment.replace(/中橫公路/g, 'Central Cross-lsland Highway');

        return comment;
    }

    getStatusClass() {
        return {
            'badge-danger': this.status.roadtype === '災變',
            'badge-warning': this.status.roadtype === '阻塞',
            'badge-secondary': this.status.roadtype === '交通障礙',
            'badge-primary': this.status.roadtype === '道路施工',
            'badge-action': this.status.roadtype === '交通管制',
            'badge-info': this.status.roadtype === '其他'
        };
    }
}
