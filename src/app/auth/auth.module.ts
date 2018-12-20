import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthService } from './auth.service';
import { ExternalComponent } from './external/external.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AuthComponent,
        SignUpComponent,
        LogInComponent,
        ExternalComponent,
        ForgotComponent,
        ProfileComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [AuthService]
})
export class AuthModule { }
