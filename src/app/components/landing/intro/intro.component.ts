import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  address = '0x5298AD82dD7C83eEaA31DDa9DEB4307664C60534';


  private userData: any;

  bnbCountFromInput: number = 1;

  isConnected: boolean = false;
  isInProcess: boolean = false;
  hasClaimed: boolean; //! Do not forget here set to uninitilized
  isClaiming: boolean = false;

  moonshotBalance: string = '-'; //! Do not forget here set to '-'
  mshotV2Balance: string = '-';

  buttonName = '';

  constructor(
    tokenomicsService: TokenomicsService,
    private walletConnectService: WalletService,
    private dialog: MatDialog
  ) {
    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      this.walletConnectService.setWalletState(this.isConnected);
      // console.log('CONSTRUCTOR: ' + this.isConnected);

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
        if (this.hasClaimed)
          this.isClaiming = true;
      } else {
        this.walletConnectService.updateIsClaiming(false);
      }
    });

    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;

      if (data !== undefined && data.address != undefined) {
        this.isConnected = true;
        this.walletConnectService.setWalletState(true);
        if (this.userData.networkId.chainId == environment.chainId) {
          this.getMoonShotBalances();
        }
      }

      this.updateButtonName();
    });

    // this.walletConnectService.getIsClaiming().subscribe((state: boolean) => {
    //   this.isClaiming = state;
    // });

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
      this.isClaiming = true;
      this.revealMoonSwapSection()
    }

    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      if (state) {
        this.isClaiming = true;
        this.revealMoonSwapSection()
      }
    });

  }

  revealMoonSwapSection() {
    if (this.isConnected && !this.hasClaimed && (this.moonshotBalance != '0' && this.moonshotBalance != '-')) {
      this.walletConnectService.updateIsClaiming(true);
      this.isClaiming = true;
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

}
