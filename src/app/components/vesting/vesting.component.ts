import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/services/wallet-service.service';
import { WalletConnectComponent } from '../base/wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-vesting',
  templateUrl: './vesting.component.html',
  styleUrls: ['./vesting.component.scss']
})
export class VestingComponent implements OnInit {

  static readonly routeName: string = 'vesting';

  beneficiary: string = '';
  startTime: number = 0;
  amount: number = 0;
  duration: number = 0;
  cliff: number = 0;
  isRevocable: boolean = true;

  search: string = '';
  userVestingData: any

  isConnected: boolean = false;
  isOwner: boolean = false;


  constructor(
    private walletConnectService: WalletService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
  ) {
    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        this.isOwner = await this.walletConnectService.isOwner();
      }

      this.walletConnectService.setWalletState(this.isConnected);
    });
  }

  ngOnInit(): void {
    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;
    });
  }

  changeRevocableStatus(state: boolean) {
    this.isRevocable = state;
  }

  async createNewSchedule() {
    if (this.isConnected) {
      if (this.isOwner) {
        this.toastrService.info("Creating schedule...");

        await this.walletConnectService.createVestingSchedule(
          this.beneficiary,
          this.startTime,
          this.cliff,
          this.duration,
          this.isRevocable,
          this.amount,
        );
      } else {
        this.toastrService.error("You are not an owner!");
      }

    } else {
      this.openWalletConnectionDialog();
    }
  }

  clearForm() {
    this.beneficiary = "";
    this.startTime = 0;
    this.amount = 0;
    this.cliff = 0;
    this.duration = 0;
    this.isRevocable = false;
  }

  clearSearch() {
    this.search = "";
    this.userVestingData = undefined;
  }

  async searchAddress() {

    if (!this.isConnected) {
      this.openWalletConnectionDialog();
    } else if (this.search !== "") {

      this.userVestingData = await this.walletConnectService.searchLastVestingScheduleForHolder(this.search);
      console.log(this.userVestingData);

      if (this.userVestingData !== undefined) {
        this.beneficiary = this.userVestingData.beneficiary;
        this.startTime = this.userVestingData.start;
        this.amount = this.userVestingData.amountTotal;
        this.duration = this.userVestingData.duration;
        this.isRevocable = this.userVestingData.revocable;
        this.cliff = this.userVestingData.cliff;
      }
    }
  }

  openWalletConnectionDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );
  }

  async revokeTheSchedule() {
    if (this.isConnected && this.isOwner) {
      this.toastrService.info("Revoking...");
      await this.walletConnectService.revokeTheHolder(this.beneficiary);
    } else {
      this.toastrService.error("You are not an owner or connected!");
    }
  }

  reset() {
    this.clearForm();
    this.clearSearch();
  }
}
