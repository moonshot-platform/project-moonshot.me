import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  steps: any = [
    {
      title: 'Download a browser based wallet',
      description: 'Moonshot is a token running on the Binance Smart Chain Network. You can use Metamask, TrustWallet, Binance Smart Chain Wallet and others. Accept warning and go on V1.',
    },
    {
      title: 'Buy BNB',
      description: 'Use an exchange to buy BNB. Some exchanges are Binance, Binance US.',
    },
    {
      title: 'Go to Moonshot website',
      description: 'When you visit Moonshot, click on \'Buy on PancakeSwap\' button. This will take you to the PancakeSwap website. ',
    },
    {
      title: 'Import the token address',
      description: 'The PancakeSwap website starts with a pop up form asking if the address belongs to Moonshot. Double check before you accept! 0xd27d3f7f329d93d897612e413f207a4dbe8bf799',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
