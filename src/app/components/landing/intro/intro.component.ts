import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {

  countDown: string = '29 March 2021 6:00:00 UTC';
  interval: any;
  priceForOneMillion : string = '---';

  constructor( tokenomicsService: TokenomicsService ) {
    if( tokenomicsService.tokenomicsData !== undefined ) {
      this.priceForOneMillion = '$' + tokenomicsService.tokenomicsData['priceFor1mMoonshot'].substring(0,13);
    }

    tokenomicsService.whenShared().subscribe((data) => {
      this.priceForOneMillion = '$' + data['priceFor1mMoonshot'].substring(0,13);
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

      let result = pad(days,2) + ":" + pad(hours,2)  + ":" + pad(minutes,2) + ":" + pad(seconds,2);

      let elems = document.getElementsByClassName("countdown");
      for( let i = 0; i < elems.length; i ++ ) {
          elems[i].innerHTML = result;
      }

    }, 1000);
  }

  scrollToElement(page: string, fragment: string): void {
    const element = document.querySelector(`#${fragment}`)
    if (element)  {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }
}
