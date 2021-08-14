import { Component, OnInit } from '@angular/core';
import { MoonbaseService } from 'src/app/services/moonbase.service';
declare let particlesJS: any;

@Component({
  selector: 'app-moonbase-bar',
  templateUrl: './moonbase-bar.component.html',
  styleUrls: ['./moonbase-bar.component.scss']
})
export class MoonbaseBarComponent implements OnInit {
  constructor(private moonbaseService: MoonbaseService) { }

  ngOnInit(): void {
    particlesJS.load('moonbase-particles', 'assets/json/particlesjs-config.json');
  }

  toggleMoonbase(): void {
    this.moonbaseService.onToggle(false);
  }

}
