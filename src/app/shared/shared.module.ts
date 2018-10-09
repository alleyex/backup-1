import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireDatabaseModule } from 'Angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
    exports: [
        CommonModule,
        TranslateModule,
        MaterialModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule
    ]
})
export class SharedModule { }