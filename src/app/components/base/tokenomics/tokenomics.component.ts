import { Component, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit {

  public isOldPancakeRouter = true;

  data: any;
  address: string = '';
  isConnected: boolean = false;
  userData: any;

  public list: any = [
    [
      {
        key: "total supply:",
        val: "1,000,000,000,000,000",
        shortVal: "(1 quadrillion)"
      },
      {
        key: "circulating supply:",
        val: "---",
        shortVal: ""
      },
      {
        key: "burned forever:",
        val: "---",
        shortVal: ""
      },
      {
        key: "V1 distribution",
        val: "---",
        shortVal: "",
      },
    ],
    [
      {
        key: "moonshot for 1 bnb:",
        val: "---",
        shortVal: ""
      },
      {
        key: "market cap:",
        val: "---",
        shortVal: ""
      },
      {
        key: "price for 1 million moonshot:",
        val: "---",
        shortVal: ""
      },
      {
        key: "price for 1 moonshot:",
        val: "---",
        shortVal: ""
      }
    ]
  ]

  constructor(
    private tokenomicsService: TokenomicsService,
    private walletService: WalletService,
  ) {
    this.walletService.init().then((data: boolean) => {
      this.isConnected = data;
    });
  }

  ngOnInit(): void {
    this.getTokenomicsData();

    this.walletService.getData().subscribe((data: any) => {
      this.userData = data;
      if (data !== undefined && data.address != undefined) {
        if (this.userData.networkId.chainId == environment.chainId) {
          this.isConnected = true;
          this.address = data.address;
        } else {
          this.address = '';
        }
      }
    });

    this.walletService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state
    });
  }

  getTokenomicsData(): void {
    this.data = this.tokenomicsService.tokenomicsData;
    this.replaceData();

    this.tokenomicsService.whenShared().subscribe((data) => {
      this.data = data;
      this.replaceData();
    });
  }

  doChangePancakeRouter() {
    this.tokenomicsService.changePancakeRouter();
  }

  replaceData(): void {
    if (this.data == null)
      return

    this.list[0][1]['val'] = this.data['circulatingSupply'];
    this.list[0][2]['val'] = this.data['burnedAmount'];
    this.list[0][3]['val'] = 0;
    this.list[1][0]['val'] = this.data['priceFor1BNB'];
    this.list[1][0]['val'] = this.data['priceFor1BNB'];
    this.list[1][1]['val'] = '$' + this.data['marketcap'].substring(0, 13);
    this.list[1][2]['val'] = '$' + this.data['priceFor1mMoonshot'].substring(0, 13);
    this.list[1][3]['val'] = '$' + this.data['priceForMoonshot'].substring(0, 13);
    this.isOldPancakeRouter = this.tokenomicsService.oldPancakeAddress;
  }

  toggleTokenomics(): void {
    this.tokenomicsService.onToggle(false);
  }
}
