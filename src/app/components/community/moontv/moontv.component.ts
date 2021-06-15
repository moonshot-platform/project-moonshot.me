import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-moontv',
  templateUrl: './moontv.component.html',
  styleUrls: ['./moontv.component.scss']
})
export class MoontvComponent implements OnInit {

  public videoSrcList: any = [];

  constructor(private sanitizer: DomSanitizer) { }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.videoSrcList = [
      {
        src: this.transform("https://www.youtube.com/embed/kvSewdKNsuM"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/7kBNo1CeQ7Y"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/sD8ekD21fmI"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/9gcutFdutvw"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/kvSewdKNsuM"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/7kBNo1CeQ7Y"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/sD8ekD21fmI"),
        thumb: ""
      },
      {
        src: this.transform("https://www.youtube.com/embed/9gcutFdutvw"),
        thumb: ""
      },
    ];
  }

}
