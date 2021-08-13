import { Component, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { MoonbaseService } from 'src/app/services/moonbase.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;
  moonbaseActive = false;

  constructor(
    private tokenomicsService: TokenomicsService,
    private moonbaseService: MoonbaseService
  ) { }

  ngOnInit(): void {
    this.tokenomicsService.whenToggled().subscribe((state: boolean) => {
      this.toggleTokenomicsView(state);
    });

    this.moonbaseService.whenToggled().subscribe((state: boolean) => {
      this.toggleTokenomicsView(state);
    });
  }

  toggleTokenomicsView(active: boolean = null) {
    this.active = active || !this.active;
  }

  toggleMoonbaseService(moonbaseActive: boolean = null) {
    this.moonbaseActive = moonbaseActive || !this.moonbaseActive;
  }
}
