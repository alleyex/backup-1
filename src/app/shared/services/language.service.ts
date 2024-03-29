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
        const browserLang = translate.getBrowserLang();
        const setLang = browserLang.match(/vi|th|zh-tw|ja|ms|ko|in|en/) ? browserLang : 'zh-tw';
        // let setLang = browserLang.match(/en|vi|th|zh|ja|ms|ko|in/) ? browserLang : 'zh-tw';
        // translate.use('zh-tw');
         translate.use(setLang);    }

    private languages: Language[] = [
        { code: 'zh-tw', region: 'Chinese (PRC)', display: '正體中文' },
        { code: 'en', region: 'English', display: 'English' },
        { code: 'ja', region: 'Japanese', display: '日本語' },
        { code: 'ko', region: 'Korean', display: '한국어' },
        { code: 'th', region: 'Thai', display: 'ภาษาไทย' },
        { code: 'vi', region: 'Vietnamese', display: 'Tiếng Việt' },
        { code: 'ms', region: 'Malay', display: 'Bahasa Malaysia' },
        { code: 'in', region: 'Indonesian', display: 'Bahasa Indonesia' }
    ];

    getLanguages() {
        return this.languages.slice();
    }

    changeLanguage(language: Language) {
        if (language !== this.past) {
            this.past = language;
            this.translate.use(<string>language.code);
            this.languageChanged.next(language);
        }
    }
}

export interface Language {
    code: 'en' | 'zh-tw' | 'th' | 'vi' | 'ja' | 'ms' | 'ko' | 'in';
    region: 'English' | 'Chinese (PRC)' | 'Thai' | 'Vietnamese' | 'Japanese' | 'Korean' | 'Malay' | 'Indonesian';
    display: 'English' | '正體中文' | 'ภาษาไทย' | 'Tiếng Việt' | '日本語' | '한국어' | 'Bahasa Malaysia' | 'Bahasa Indonesia';
}
