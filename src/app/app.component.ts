import { Component } from '@angular/core';
declare let particlesJS: any;
import Web3 from 'web3';

import pancakeABI from '../assets/web3/pancake-abi.json';
import ssABI from '../assets/web3/ss-abi.json';

@Component({
  selector: 'app-root',
  template: '<div id="particles"></div><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json');
    
    this.web3();
  }

  async web3() {
    var web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed1.binance.org:443');
    var web3 = new Web3( web3Provider );
    console.log(web3.version);

    var panCakeRouter = new web3.eth.Contract(pancakeABI as any, "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F");
    var ssRouter = new web3.eth.Contract(ssABI as any, "0xd27D3F7f329D93d897612E413F207A4dbe8bF799");

    const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const MOON = "0xd27D3F7f329D93d897612E413F207A4dbe8bF799";
    const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    
    const amount = web3.utils.toWei("1");

    const busdPAir = await panCakeRouter.methods.getAmountsOut(amount, [WBNB, BUSD]).call();
    const uniTotalOutputSell = await panCakeRouter.methods.getAmountsOut(amount, [WBNB, MOON]).call();

    console.log(busdPAir);
    
  }
}