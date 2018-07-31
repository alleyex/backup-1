import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
 
 

@NgModule({
    exports: [
        CommonModule,       
        TranslateModule,
        MaterialModule,
        BrowserAnimationsModule         
    ]
})
export class SharedModule { }