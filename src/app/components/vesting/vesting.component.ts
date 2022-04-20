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
  amount: number = 0;
  duration: number = 0;
  cliff: number = 0;
  isRevocable: boolean = false;

  search: string = '';
  userVestingData: any

  isConnected: boolean = false;
  isOwner: boolean = false;
  isSearching: boolean = false;

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
        if (this.isSearching) {
          this.toastrService.info("Revoking...");
          await this.walletConnectService.revokeTheHolder(this.beneficiary);

        } else {
          this.toastrService.info("Creating schedule...");
          await this.walletConnectService.createVestingSchedule(
            this.beneficiary,
            this.cliff,
            this.duration,
            this.isRevocable,
            this.amount,
          )
        }
      } else {
        this.toastrService.error("You are not an owner!");
      }

      this.clearForm();
      this.clearSearch();
    } else {
      this.openWalletConnectionDialog();
    }
  }

  clearForm() {
    this.beneficiary = "";
    this.amount = 0;
    this.cliff = 0;
    this.duration = 0;
    this.isRevocable = false;
  }

  clearSearch() {
    this.search = "";
    this.userVestingData = undefined;
    this.isSearching = false
  }

  async searchAddress() {

    if (!this.isConnected) {
      this.openWalletConnectionDialog();
    } else if (this.search !== "") {

      this.userVestingData = await this.walletConnectService.searchLastVestingScheduleForHolder(this.search);

      if (this.userVestingData !== undefined) {
        this.beneficiary = this.userVestingData.beneficiary;
        this.amount = this.userVestingData.amountTotal;
        this.duration = this.userVestingData.duration;
        this.isRevocable = this.userVestingData.revocable;
        this.cliff = this.userVestingData.cliff;

        this.isSearching = true;
      }
    }
  }

  openWalletConnectionDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );
  }
}
