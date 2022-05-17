import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.scss']
})
export class FaucetComponent implements OnInit {
  static readonly routeName: string = 'faucet';

  constructor(
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
  }

}
