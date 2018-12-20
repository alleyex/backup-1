import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-external',
    templateUrl: './external.component.html',
    styleUrls: ['./external.component.scss']
})
export class ExternalComponent {
    constructor(private authService: AuthService) { }

    onFacebook() {
        const result = this.authService.loginWithFacebook();
        result.then((back) => {
            console.log(back);

        })
            .catch((error) => {
                console.log('error:', error);

            });
    }

    onGoogle() {
        const result = this.authService.loginWithGoogle();
        result.then((back) => {
            console.log(back);

        })
            .catch((error) => {
                console.log('error:', error);

            });
    }
}
