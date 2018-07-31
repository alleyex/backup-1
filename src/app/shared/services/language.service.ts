import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    languageChanged = new Subject<Language>();

    private past: Language;
    public default: Language;

    constructor(private translate: TranslateService) {
        this.default = this.languages[0];
        translate.setDefaultLang('zh-tw');
        let browserLang = translate.getBrowserLang();
        let setLang = browserLang.match(/en|vi|th|zh-tw/) ? browserLang : 'zh-tw';
        translate.use(setLang);

    }

    private languages: Language[] = [
        { code: 'zh-tw', region: 'Chinese (PRC)', display: '正體中文' },
        { code: 'en', region: 'English', display: 'English' },
        { code: 'th', region: 'Thai', display: 'ไทย' },
        { code: 'vi', region: 'Vietnamese', display: 'Người việt nam' }
    ];

    getLanguages() {
        return this.languages.slice();
    }

    changeLanguage(language: Language) {
        if (language != this.past) {
            this.past = language;
            this.translate.use(<string>language.code);
            this.languageChanged.next(language);
        }
    }
}

export interface Language {
    code: 'en' | 'zh-tw' | 'th' | 'vi',
    region: 'English' | 'Chinese (PRC)' | 'Thai' | 'Vietnamese',
    display: 'English' | '正體中文' | 'ไทย' | 'Người việt nam'
}