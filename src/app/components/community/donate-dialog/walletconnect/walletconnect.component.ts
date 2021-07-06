import { Component, OnInit } from '@angular/core';
import { DonateDialogComponent } from '../donate-dialog.component';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-walletconnect',
  templateUrl: './walletconnect.component.html',
  styleUrls: ['./walletconnect.component.scss']
})
export class WalletconnectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DonateDialogComponent>) { }

  ngOnInit(): void {
  }
  
  closeDialog(){
    this.dialogRef.close();
  }

}
