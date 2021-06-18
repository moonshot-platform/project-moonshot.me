import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  visibleStep = 1;

  address = '0xd27d3f7f329d93d897612e413f207a4dbe8bf799';

  steps: any = [
    {
      indicator: 'Counting down'
    },
    {
      title: 'Download a browser based wallet',
      description: 'The Moonshot token runs on the Binance Smart Chain network. In order to buy Moonshot tokens from PancakeSwap you must first download a wallet. This wallet can be the TrustWallet, Metamask wallet or any other wallet which supports the Binance Smart Chain Network. Once you have set up your wallet, proceed to the next step.',
    },
    {
      title: 'Buy BNB',
      description: 'Now that you have set up your wallet you will need to buy BNB and send your BNB to your wallet. You can buy BNB from most centralized exchanges such as Binance.com or from in-wallet applications.',
    },
    {
      title: 'Go to Moonshot website',
      description: 'Now that you have BNB in your wallet you can connect your wallet to PancakeSwap. When you visit the Moonshot website, click on “Buy Moonshot” and you’ll be redirected to PancakeSwap.',
    },
    {
      title: 'Import the token address',
      description: 'The PancakeSwap website loads with a pop-up form asking if the token address belongs to Moonshot. Always double check before you accept!',
    },
    {
      title: 'Set slippage to 11%',
      description: 'Click on the gear button and set slippage to 11% (the slippage covers the 10% explained in tokenomics). If that gives you an error, increase the slippage to 12% or more.',
    },
    {
      title: 'Swap BNB for Moonshot',
      description: 'The first time you trade Moonshot, you have to click "Approve".  After a short moment, the SWAP button becomes available and you can swap your BNB for Moonshot.',
    },
    {
      title: 'View Moonshot in your wallet',
      description: 'To view your Moonshot, add a custom token to your browser based wallet. Use the address above.',
    },
    {
      indicator: 'Lift-off',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
