import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReleaseService } from 'src/app/services/release.service';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import { WalletConnectComponent } from '../wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-release-bar',
  templateUrl: './release-bar.component.html',
  styleUrls: ['./release-bar.component.scss']
})
export class ReleaseBarComponent implements OnInit {

  items: DropdownModel[] = [
    new DropdownModel(environment.vestingContactAddress, "MSHOT"),
    new DropdownModel(environment.rabbitContractAddress, "RA8BIT")
  ]

  isDropdownActive: boolean = false;

  selectedItem: DropdownModel = this.items[0];

  private userData: any;

  bnbCountFromInput: number = 1;
  releasableAmount: any = 0;

  isConnected: boolean = false;
  isInProcess: boolean = false;
  isInReleasingProcess: boolean = false;
  hasClaimed: boolean = false;
  hasVested: boolean = false;
  hasEnoughBnb: boolean = false;

  moonshotBalance: string = '-';
  mshotV2Balance: string = '-';
  bnbBalance: number = 0;
  estimatedGasFee = 0.0031;

  constructor(
    private releaseService: ReleaseService,
    private walletConnectService: WalletService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        // console.log("Wallet is Connected");
        this.getBnbBalance();
        this.computeReleasableAmount();
        this.checkUserVested();
      }

      this.walletConnectService.setWalletState(this.isConnected);
    });

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;

      if (state) {
        this.hasClaimed = await this.walletConnectService.hasClaimed();
        this.computeReleasableAmount();
        this.checkUserVested();
        this.getBnbBalance();
      }
    });
  }

  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  toggleReleaseView(): void {
    this.releaseService.onToggle(false);
  }

  async selectItem(item: DropdownModel) {
    this.selectedItem = item;
    this.toggleDropdown();
    // console.log(await this.walletConnectService.hasVested());
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

    this.releasableAmount = await this.walletConnectService.computeReleasableAmount();
    // 1T = 1 Trillion, 1B = 1 Billion, 1M = 1 Million , values smaller can be displayed as is
    // console.log(this.abbreviateNumber(parseInt(this.releasableAmount.toString())));
    this.releasableAmount = this.walletConnectService.shortTheNumber(this.releasableAmount);
    // console.log(this.walletConnectService.shortTheNumber(this.releasableAmount));
  }

  async release() {
    if (this.isConnected) {
      await this.checkBNBBalance();

      this.isInReleasingProcess = true;
      if (this.hasEnoughBnb) {
        await this.walletConnectService.releaseVesting();
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
    this.hasVested = await this.walletConnectService.hasVested();
  }

  checkBNBBalance = async () => this.hasEnoughBnb = await this.walletConnectService.checkBnbBalance();

  async onChangeBuyMSHOTInput(value: any) {
    let bnbAmount = this.bnbCountFromInput <= 0 ? 0.001 : this.bnbCountFromInput;
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
}

class DropdownModel {
  tokenAddress: string;
  tokenSymbol: string;

  constructor(address: string, symbol: string) {
    this.tokenAddress = address;
    this.tokenSymbol = symbol;
  }
}
