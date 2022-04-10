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
      src: this.transform("https://www.youtube.com/embed/zPpOdMsC2Wk"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/yx8x7DtBXWs"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/XyBA15bko2o"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/_yBjjzwxXlg"),
      thumb: ""
    },
    {
      src: this.transform("https://youtu.be/embed/F9mD_QNwx4o"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/SnsdjLtS33I"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/Smzc1bmfkrc"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/EzoCAroGtxw"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/k-3vRPmZpU0"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/u5vn5c2lja0"),
      thumb: ""
    },
    ///
    {
      src: this.transform("https://www.youtube.com/embed/O54ASHsKso0"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/5WaTUWeeDxE"),
      thumb: ""
    },
    // {
    //   src: this.transform("https://www.youtube.com/embed/EzoCAroGtxw"),
    //   thumb: ""
    // },

  ];

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
