import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterMobileComponent } from './footer-mobile.component';



@NgModule({
    declarations: [
        FooterMobileComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        FooterMobileComponent,
    ]
})
export class FooterMobileModule { }
