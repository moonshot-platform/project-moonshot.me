import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-moontv',
  templateUrl: './moontv.component.html',
  styleUrls: ['./moontv.component.scss']
})
export class MoontvComponent implements OnInit {

  public videoSrcList = [
    {
      src: this.transform("https://www.youtube.com/embed/sD8ekD21fmI"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/1rgyL0NE3C4"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/RZA56Ks9pk8"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/7kBNo1CeQ7Y"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/J6enw7vVGUE"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/FXDgb0Gwyik"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/j6uvJM7ssCc"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/_QEFPraYRIU"),
      thumb: ""
    },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  transform( url: string ) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
