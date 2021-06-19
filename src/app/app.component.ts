import { Component } from '@angular/core';
declare let particlesJS: any;
import Web3 from 'web3';

import pancakeABI from '../assets/web3/pancake-abi.json';
import ssABI from '../assets/web3/ss-abi.json';
import { TokenomicsShareService } from './services/tokenomics-share.service';

@Component({
  selector: 'app-root',
  template: '<div id="particles"></div><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor( private tokenomicsShareService: TokenomicsShareService ) {
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

    const totalSupply = await ssRouter.methods.totalSupply().call();
    const deadBalance = await ssRouter.methods.balanceOf("0x000000000000000000000000000000000000dead").call();
    const totalSupplyBN = web3.utils.toBN(totalSupply);
    const deadSupplyBN = web3.utils.toBN(deadBalance);

    const circSupply = totalSupplyBN.sub(deadSupplyBN);

    const circ = Math.round( Number( web3.utils.fromWei(circSupply.toString(), 'nanoether') ));
    const dead = Math.round( Number( web3.utils.fromWei(deadBalance, 'nanoether') ) );
    const oneBNB = Math.round( Number( web3.utils.fromWei(uniTotalOutputSell[1], 'nanoether')) );
    const price1bnb = Math.round(Number( web3.utils.fromWei(busdPAir[1], 'micro') ));
    const priceFor1BNB = (price1bnb / oneBNB).toString();
    const priceFor1ss = priceFor1BNB.replace(".0", ".0000000");

    fetch("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
    .then( (response) => {
      return response.json();
    } )
    .then( (myJson) => {

        var data = {
          'circulatingSupply': this.formatAmount(circ),
          'burnedAmount': this.formatAmount(dead),
          'priceFor1BNB': this.formatAmount(oneBNB),
          'marketcap': this.formatAmount(Math.round(circ / oneBNB * myJson.price )),
          'priceFor1mMoonshot': priceFor1BNB,
          'priceForMoonshot': priceFor1ss,
        }
        

        this.tokenomicsShareService.doShare(data);

      }).catch( function(error) {
        console.log(error);
      }
    );
  }

  formatAmount(amount: any) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}