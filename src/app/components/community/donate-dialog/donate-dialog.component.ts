import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { MerchandiseComponent } from '../merchandise/merchandise.component';
import { WalletconnectComponent } from './walletconnect/walletconnect.component';

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss']
})
export class DonateDialogComponent implements OnInit {
  metamaskBoxHover: boolean = false;
  walletConnectBoxHover: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<MerchandiseComponent>,
    private dialog: MatDialog) {

     }

  ngOnInit(): void {
  }
  onDialogBoxClick(boxName : string): void {
    if(boxName == 'metamask'){
      this.closeDialog();// for a temporary
    }else{
      this.openWalletConnectDialog();
    }

    
  }

  closeDialog(){
    this.dialogRef.close();
  }

  openWalletConnectDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(WalletconnectComponent, dialogConfig);
  }
}
