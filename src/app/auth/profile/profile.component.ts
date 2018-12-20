import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private authService: AuthService) { }

    profileForm: FormGroup;
    user: firebase.User;
    getUser$: Subscription;


    ngOnInit() {
          this.getUser$ = this.authService.getUser$.subscribe((user) => {
            this.user = user;
            this.setGroup();
        });

        this.authService.logged().then((logged) => {
            this.user = this.authService.getUser();
            this.setGroup();
        });
    }

    setGroup() {
        if (this.user) {
            this.profileForm = new FormGroup(
                {
                    name: new FormControl({ value: this.user.displayName, disabled: true }),
                    email: new FormControl({ value: this.user.email, disabled: true }, [Validators.required, Validators.email]),
                    phone: new FormControl({ value: this.user.phoneNumber, disabled: true })
                });

        } else {
            this.router.navigate(['/auth/login']);
        }
    }

    onLogout() {
        this.authService.signOut();
    }

    ngOnDestroy() {
        this.getUser$.unsubscribe();
    }
}



