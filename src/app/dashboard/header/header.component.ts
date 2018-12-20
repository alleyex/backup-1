import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService, Language } from '../../shared/services/language.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [LanguageService]
})
export class HeaderComponent implements OnInit {
    @Output() rightnavToggle = new EventEmitter<void>();
    @Output() leftnavToggle = new EventEmitter<void>();

    languages: Language[];
    logged: boolean;
    getUser$: Subscription;


    constructor(private languageService: LanguageService, private authService: AuthService) { }
    ngOnInit() {
        this.languages = this.languageService.getLanguages();
        // this.authService.changed();
        this.getUser$ = this.authService.getUser$
            .subscribe((user) => {
                if (user) {
                    this.logged = true;
                } else {
                    this.logged = false;
                }
            });
    }

    onToggleRightnav() {
        this.rightnavToggle.emit();
        // console.log('onToggleRightnav()');
    }
    onToggleLeftnav() {
        this.leftnavToggle.emit();
    }

    languageSelected(code: Language) {
        this.languageService.changeLanguage(code);
    }



}
