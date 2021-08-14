import { Component, HostListener, OnInit } from '@angular/core';
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
      this.toggleMoonbaseView(state);
    });
  }

  toggleTokenomicsView(active: boolean = null) {
    this.active = active || !this.active;

    if (this.moonbaseActive && this.active) {
      this.toggleMoonbaseView(false);
    }
  }

  toggleMoonbaseView(moonbaseActive: boolean = null) {
    this.moonbaseActive = moonbaseActive || !this.moonbaseActive;

    if (this.moonbaseActive && this.active) {
      this.toggleTokenomicsView(false);
    }
  }

  @HostListener('document:click', ['$event'])
  onMouseEnter(event: any) {
    // where the event is originally invoked.     
    if (!document.getElementById('sidebar').contains(event.target)) {
      // Clicked outside the box
      this.moonbaseActive = false;
      this.active = false;
    } else {
      // Clicked inside the box
    }
  }

}
