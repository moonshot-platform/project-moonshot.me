import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MerchandiseComponent } from '../merchandise/merchandise.component';

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss']
})
export class DonateDialogComponent implements OnInit {
  matemaskBoxHover: boolean = false;
  walletConnectBoxHover: boolean = false;
  constructor(public dialogRef: MatDialogRef<MerchandiseComponent>) { }

  ngOnInit(): void {
  }
  onClick(): void {
    //some redirection
    this.dialogRef.close();
  }
}
