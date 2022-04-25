import { Component, OnInit } from '@angular/core';
import { ReleaseService } from 'src/app/services/release.service';

@Component({
  selector: 'app-release-bar',
  templateUrl: './release-bar.component.html',
  styleUrls: ['./release-bar.component.scss']
})
export class ReleaseBarComponent implements OnInit {

  constructor(private releaseService: ReleaseService) { }

  ngOnInit(): void {
  }

  toggleReleaseView(): void {
    this.releaseService.onToggle(false);
  }
}
