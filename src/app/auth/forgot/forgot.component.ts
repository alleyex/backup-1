import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
    constructor(private authService: AuthService) { }
    forgotForm = new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email])
        }
    );

    onSubmit() {
        const reset = this.authService.resetPassword(this.forgotForm.value.email);
        console.log(this.forgotForm.value);
    }

}
