import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {

  countDown: string = '29 March 2021 6:00:00 UTC';
  interval: any;
  priceForOneMillion: string = '---';
  address = environment.tokenContractAddress;

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

  buttonName = '';

  constructor(
    tokenomicsService: TokenomicsService,
    private walletConnectService: WalletService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) {
    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        // console.log("Wallet is Connected");
        this.getBnbBalance();
      }

      this.computeReleasableAmount();
      this.walletConnectService.setWalletState(this.isConnected);
      this.checkUserVested();
      this.updateButtonName();
    });

    this.updateButtonName();
    if (tokenomicsService.tokenomicsData !== undefined) {
      this.priceForOneMillion = '$' + tokenomicsService.tokenomicsData['priceFor1mMoonshot'].substring(0, 13);
    }

    tokenomicsService.whenShared().subscribe((data) => {
      this.priceForOneMillion = '$' + data['priceFor1mMoonshot'].substring(0, 13);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {

    function pad(n: any, width: number, z = '0') {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    this.interval = setInterval(() => {

      var now = new Date().getTime();
      var countDownDate = new Date(this.countDown).getTime();

      var distance = now - countDownDate;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let result = pad(days, 2) + ":" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);

      let elems = document.getElementsByClassName("countdown");
      for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = result;
      }

    }, 1000);

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;
      this.updateButtonName();
      if (state) {
        this.hasClaimed = await this.walletConnectService.hasClaimed();
        this.computeReleasableAmount();
        this.checkUserVested();
        this.getBnbBalance();
      }
    });

    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;

      if (data !== undefined && data.address !== undefined) {
        this.isConnected = true;
        this.walletConnectService.setWalletState(true);
        if (this.userData.networkId.chainId == environment.chainId) {
          this.getMoonShotBalances();
        }
      }

      this.updateButtonName();
    });

    this.walletConnectService.onIsClaimingSucceededStatetStateChanged().subscribe((value: boolean) => {
      if (value) {
        this.hasClaimed = true;
      }
    });
  }

  updateButtonName() {
    if (!this.isConnected) {
      this.buttonName = 'Connect Wallet';
    } else {
      this.buttonName = 'Market Buy';
    }
  }

  openWalletConnectionDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );
  }

  async connectWalletAndRevealClaimSection() {

    if (!this.isConnected) {
      this.isInProcess = true;
      this.openWalletConnectionDialog();
      this.isInProcess = false;
    } else {
      this.revealMoonSwapSection()
    }

    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      if (state) {
        this.revealMoonSwapSection()
      }
    });

  }

  revealMoonSwapSection() {
    if (this.isConnected && !this.hasClaimed) {
      this.scrollToElement('', 'moonswap');
    }
  }

  scrollToElement(page: string, fragment: string): void {
    const element = document.querySelector(`#${fragment}`)
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
  }

  async getMoonShotBalances() {
    const [balance, mshotV2Balance] = await Promise.all(
      [
        Number(await this.walletConnectService.getUserBalance(this.userData.address)),
        Number(await this.walletConnectService.getUserMSHOTBalance(this.userData.address))
      ]
    )

    this.moonshotBalance = this.walletConnectService.convertBalance(balance);
    this.mshotV2Balance = this.walletConnectService.convertBalance(mshotV2Balance);
  }

  addMshotToMetaMaskWallet = () => this.walletConnectService.addTokenMshotToMetaMaskWallet();

  async buyMSHOTWithBNB() {
    if (this.isConnected) {
      this.isInProcess = true;

      let bnbAmount = (Number(this.bnbCountFromInput) <= 0 ? 0.001 : Number(this.bnbCountFromInput));

      let currentBnbBalance = await this.walletConnectService.getBnbBalance();

      if (currentBnbBalance > bnbAmount + this.estimatedGasFee) {
        await this.walletConnectService.buyMSHOT(bnbAmount);
      } else {
        this.toastrService.error("You do not have enough BNB to buy that much Moonshot");
      }

      this.isInProcess = false;
    } else {
      this.openWalletConnectionDialog();
    }
  }

  async computeReleasableAmount() {
    this.releasableAmount = await this.walletConnectService.computeReleasableAmount();
    // 1T = 1 Trillion, 1B = 1 Billion, 1M = 1 Million , values smaller can be displayed as is
    // console.log(this.abbreviateNumber(parseInt(this.releasableAmount.toString())));
    this.releasableAmount = this.abbreviateNumber(parseInt(this.releasableAmount.toString()));
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

  abbreviateNumber(value: any) {
    let newValue = value;
    if (value >= 1000000) {
      var suffixes = ["", "K", "M", "B", "T"];
      var suffixNum = Math.floor(("" + value).length / 3);
      var shortValue;
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
        var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
        if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
      newValue = shortValue + suffixes[suffixNum];
    } else {
      newValue = newValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return newValue;
  }


}
