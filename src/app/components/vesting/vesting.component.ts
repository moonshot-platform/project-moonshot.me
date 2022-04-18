import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vesting',
  templateUrl: './vesting.component.html',
  styleUrls: ['./vesting.component.scss']
})
export class VestingComponent implements OnInit {

  static readonly routeName: string = 'vesting';

  beneficiary: string = '';
  amount: number = 0;
  duration: number = 0;
  cliff: number = 0;
  isRevocable: boolean = false;

  search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeRevocableStatus(state: boolean) {
    this.isRevocable = state;
  }

}
