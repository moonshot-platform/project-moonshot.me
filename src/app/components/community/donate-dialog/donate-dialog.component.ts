import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss']
})
export class DonateDialogComponent implements OnInit {
  matemaskBoxHover: boolean = false;
  walletConnectBoxHover: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
