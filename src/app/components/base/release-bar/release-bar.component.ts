import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { parse } from 'path';
import { ReleaseService } from 'src/app/services/release.service';
import { WalletService, VESTING_CONTRACTS, VestingContractModel } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import { WalletConnectComponent } from '../wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-release-bar',
  templateUrl: './release-bar.component.html',
  styleUrls: ['./release-bar.component.scss']
})
export class ReleaseBarComponent implements OnInit {
  items: any[] = [];

  isDropdownActive: boolean = false;
  selectedItem: VestingContractModel;

  private userData: any;

  bnbCountFromInput: number = 1;
  releasableAmount: any = 0;

  isConnected: boolean = false;
  isInProcess: boolean = false;
  isInReleasingProcess: boolean = false;
  hasVested: boolean = false;
  hasEnoughBnb: boolean = false;

  moonshotBalance: string = '-';
  mshotV2Balance: string = '-';
  bnbBalance: number = 0;
  estimatedGasFee = 0.0031;

  //Vesting details
  startTime: string = '';
  endTime: string = ''
  amount: number = 0;

  address: string = '';
  shortenedWalletAddress: string = ''


  constructor(
    private releaseService: ReleaseService,
    private walletConnectService: WalletService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) {

    for (const key in VESTING_CONTRACTS) {
      this.items.push(VESTING_CONTRACTS[key]);
    }

    this.selectedItem = this.items[0];

  }

  ngOnInit(): void {

    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;
      if (data !== undefined && data.address != undefined) {
        if (this.userData.networkId.chainId == environment.chainId) {
          this.isConnected = true;
          this.address = data.address;
          this.shortenedWalletAddress = this.shortWalletAddress();
        } else {
          this.address = '';
          this.shortenedWalletAddress = '';
        }
      }
    });

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;

      if (state) {
        await this.computeReleasableAmount();
        await this.checkUserVested();
        await this.getBnbBalance();
        await this.getVestingDetails();;
      }
    });

    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        // console.log("Wallet is Connected");
        // await this.computeReleasableAmount();
        // await this.checkUserVested();
        // await this.getBnbBalance();
      }

      this.walletConnectService.setWalletState(this.isConnected);
    });
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  toggleReleaseView(): void {
    this.releaseService.onToggle(false);
  }

  async selectItem(item: VestingContractModel) {
    this.selectedItem = item;
    this.toggleDropdown();
    await this.checkUserVested();
    await this.computeReleasableAmount()
    await this.getVestingDetails()
    // console.log(await this.checkUserVested());
  }

  @HostListener('document:click', ['$event'])
  onMouseEnter(event: any) {
    // where the event is originally invoked.   
    let dropdownByID = document?.getElementById('token-dropdown')?.contains(event.target)

    if (!dropdownByID)
      this.isDropdownActive = false;
  }

  openWalletConnectionDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );
  }

  async computeReleasableAmount() {
    if (!this.hasVested)
      return

    this.releasableAmount = await this.walletConnectService.computeReleasableAmount(this.selectedItem);
    // 1T = 1 Trillion, 1B = 1 Billion, 1M = 1 Million , values smaller can be displayed as is
    this.releasableAmount = this.walletConnectService.shortTheNumber(this.releasableAmount);
    // console.log(this.walletConnectService.shortTheNumber(this.releasableAmount));
  }

  async release() {
    if (this.isConnected) {
      await this.checkBNBBalance();

      this.isInReleasingProcess = true;
      if (this.hasEnoughBnb) {
        await this.walletConnectService.releaseVesting(this.selectedItem);
        this.hasEnoughBnb = false
      } else {
        this.toastrService.error("You do not have enough bnb to pay the gas fee!")
      }
      this.isInReleasingProcess = false;
      await this.computeReleasableAmount();
    } else {
      this.openWalletConnectionDialog();
    }
  }

  async checkUserVested() {
    this.hasVested = await this.walletConnectService.hasVested(this.selectedItem);
    return this.hasVested;
  }

  checkBNBBalance = async () => this.hasEnoughBnb = await this.walletConnectService.checkBnbBalance();

  async onChangeBuyMSHOTInput(value: any) {
    this.bnbCountFromInput = this.bnbCountFromInput <= 0 ? 0.001 : this.bnbCountFromInput;
    // console.log(bnbAmount);

    if (value + this.estimatedGasFee > this.bnbBalance) {
      this.bnbCountFromInput = this.bnbBalance - this.estimatedGasFee - 0.0001;
    }
  }

  async getBnbBalance() {
    this.bnbBalance = await this.walletConnectService.getBnbBalance();
    if (this.bnbBalance >= 1) {
      this.bnbCountFromInput = 1;
    } else {
      this.bnbCountFromInput = this.bnbBalance > this.estimatedGasFee ? this.bnbBalance - this.estimatedGasFee : this.bnbBalance;
    }
  }

  async getVestingDetails() {
    if (!this.hasVested)
      return

    let userVestingData = await this.walletConnectService.searchLastVestingScheduleForHolder(
      this.walletConnectService.account, this.selectedItem,
    );
    // console.log(this.userVestingData);

    if (userVestingData !== undefined) {
      let startDate = new Date(userVestingData.start.toNumber() * 1000);
      let endDate = new Date((userVestingData.start.toNumber() + userVestingData.duration.toNumber()) * 1000)

      this.startTime = startDate.toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' });
      this.amount = this.walletConnectService.shortTheNumber(userVestingData.amountTotal);
      this.endTime = endDate.toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' });
    }
  }

  shortWalletAddress(): string {
    return this.address.slice(0, this.address.length / 2) + '...' + this.address.slice(-((this.address.length / 2) - 9))
  }
}

