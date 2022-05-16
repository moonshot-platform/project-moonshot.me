import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterMobileComponent } from './footer-mobile.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
    declarations: [
        FooterMobileComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ClipboardModule,
    ],
    exports: [
        FooterMobileComponent,
    ]
})
export class FooterMobileModule { }
