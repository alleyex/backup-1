import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

    constructor(private authService: AuthService) { }

    error: string;

    registerForm = new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)])
        });

    onSubmit() {
        const user = this.registerForm.value;
        const result = this.authService.registerByEmail(user.email, user.password);
        result.then(() => {
            // this.error = undefined;
            this.error = 'succeed!';
            this.authService.sendVerification();


        })
            .catch(error => this.error = error.message);
    }
}
