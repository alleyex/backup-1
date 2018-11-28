import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService, Language } from '../../shared/services/language.service';
import { IpService } from 'src/app/shared/services/ip.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [LanguageService, IpService]
})
export class HeaderComponent implements OnInit {
    @Output() rightnavToggle = new EventEmitter<void>();
    @Output() leftnavToggle = new EventEmitter<void>();


    languages: Language[];

    constructor(private languageService: LanguageService, private ipService: IpService) { }
    ngOnInit() {
        this.languages = this.languageService.getLanguages();
        this.ipService.getClientIp();

    }

    onToggleRightnav() {
        this.rightnavToggle.emit();
        console.log('onToggleRightnav()');
    }
    onToggleLeftnav() {
        this.leftnavToggle.emit();
    }

    languageSelected(code: Language) {
        this.languageService.changeLanguage(code);
    }



}
