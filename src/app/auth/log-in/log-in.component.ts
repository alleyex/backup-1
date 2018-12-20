import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
    constructor(private authService: AuthService) { }

    error: string;
    user: string;
    verified: boolean;

    loginForm = new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)])
        });

    onSubmit() {
        const user = this.loginForm.value;
        const result = this.authService.loginWithEmail(user.email, user.password);
        result.then(() => {
            const callback = this.authService.getUser();
            this.error = undefined;
            this.user = callback.email;
            this.verified = callback.emailVerified;
        })
            .catch(error => this.error = error.message);
    }
}
