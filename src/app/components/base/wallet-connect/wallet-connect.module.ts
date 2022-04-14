import { NgModule } from '@angular/core';
import { WalletConnectComponent } from './wallet-connect.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
@NgModule({
  declarations: [
    WalletConnectComponent
  ],
  imports: [
    ClipboardModule
  ],
  exports: [
    WalletConnectComponent
  ]
})
export class WalletConnectModule { }
