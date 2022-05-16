import { Component, OnInit } from '@angular/core';
import { MoonseaBarService } from 'src/app/services/moonsea-bar-service.service';

@Component({
  selector: 'app-moonsea-bar',
  templateUrl: './moonsea-bar.component.html',
  styleUrls: ['./moonsea-bar.component.scss']
})
export class MoonseaBarComponent implements OnInit {

  constructor(private moonseaBarService: MoonseaBarService) { }

  ngOnInit(): void {
  }

  toggleMoonSeaView(): void {
    this.moonseaBarService.onToggle(false);
  }

}
