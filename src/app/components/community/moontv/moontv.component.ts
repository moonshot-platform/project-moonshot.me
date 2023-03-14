import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moontv',
  templateUrl: './moontv.component.html',
  styleUrls: ['./moontv.component.scss']
})
export class MoontvComponent implements OnInit {

  public videoSrcList = [
    {
      src: this.transform("https://www.youtube.com/embed/uRi-6OL-QrI"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/DmjcRE0NP0w"),
      thumb: ""
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
