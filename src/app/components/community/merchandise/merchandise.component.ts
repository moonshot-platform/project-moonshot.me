import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';


@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss'],
  
})
export class MerchandiseComponent implements OnInit {

  current = 0;

  public shirts: any = [
    'assets/media/images/community/shop-bear.webp',
    'assets/media/images/community/shop-bull.webp',
    'assets/media/images/community/shop-moonbirb.webp'
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  next() {
      this.current = this.current < this.shirts.length - 1 ? this.current + 1 : 0;
  }

  prev() {
      this.current = this.current > 0 ? this.current - 1 : this.shirts.length - 1;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    

    const dialogRef = this.dialog.open(DonateDialogComponent, dialogConfig);
  }

}
