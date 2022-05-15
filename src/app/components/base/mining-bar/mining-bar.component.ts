import { Component, OnInit } from '@angular/core';
import { MiningBarService } from 'src/app/services/mining-bar.service';

@Component({
  selector: 'app-mining-bar',
  templateUrl: './mining-bar.component.html',
  styleUrls: ['./mining-bar.component.scss']
})
export class MiningBarComponent implements OnInit {

  constructor(private miningBarService: MiningBarService) { }

  ngOnInit(): void {
  }

  toggleMiningView(): void {
    this.miningBarService.onToggle(false);
  }
}
