import { Component, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;

  constructor(private tokenomicsService: TokenomicsService) { }

  ngOnInit(): void {
    this.tokenomicsService.onToggle().subscribe((state:boolean) => {
      this.toggleTokenomicsView(state);
    });
  }

  toggleTokenomicsView( active: boolean = null ) {
    this.active = active || !this.active;
  }
}
