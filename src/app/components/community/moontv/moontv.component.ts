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
      src: this.transform("https://www.youtube.com/embed/zPpOdMsC2Wk"),
      thumb: ""
    },
    {
      src: this.transform("https://www.youtube.com/embed/Pia5VrY8bXA"),
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
      src: this.transform("https://www.youtube.com/embed/KzSIDJf3Dgs"),
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
      src: this.transform("https://www.youtube.com/embed/sYGy3D0ERzA"),
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
  ];

  constructor(private sanitizer: DomSanitizer) { }

  transform( url: string ) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
