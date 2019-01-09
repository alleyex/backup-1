import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

    contactForm = new FormGroup(
        {
            question: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('')
        });


    onSubmit() {
        console.log('is submit');
    }

}