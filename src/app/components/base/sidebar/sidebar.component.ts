import { Component, OnInit } from '@angular/core';
import { TokenomicsToggleService } from 'src/app/services/tokenomics-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;

  constructor(private tokenomicsToggleService: TokenomicsToggleService) { }

  ngOnInit(): void {
    this.tokenomicsToggleService.onToggle().subscribe((state:boolean) => {
      this.toggleTokenomicsView(state);
    });
  }

  toggleTokenomicsView( active: boolean = null ) {
    this.active = active || !this.active;
  }
}
