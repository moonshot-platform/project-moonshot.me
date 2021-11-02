import { Component, OnInit } from '@angular/core';
import { MoonbaseService } from 'src/app/services/moonbase.service';

@Component({
  selector: 'app-moonbase-bar',
  templateUrl: './moonbase-bar.component.html',
  styleUrls: ['./moonbase-bar.component.scss']
})
export class MoonbaseBarComponent implements OnInit {
  constructor(private moonbaseService: MoonbaseService) { }

  ngOnInit(): void {
  }

  toggleMoonbase(): void {
    this.moonbaseService.onToggle(false);
  }

}
