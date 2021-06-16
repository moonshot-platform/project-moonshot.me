import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  steps: any = [
    {
      indicator: 'Counting down'
    },
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
      description: 'The PancakeSwap website starts with a pop up form asking if the address belongs to Moonshot. Double check before you accept! ',
    },
    {
      title: 'Set slippage to 11%',
      description: 'Click on the gear button and set slippage to 11%. (the slippage covers the 10% explained in tokenomics) If that gives you an error, increase the slippage to 12% or more.',
    },
    {
      title: 'Swap BNB for Moonshot',
      description: 'Confirm with your browser based wallet.',
    },
    {
      title: 'View Moonshot in your wallet',
      description: 'To view your Moonshot, add custom token to your browser based wallet. Use the address above.',
    },
    {
      indicator: 'Lift-off',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
