import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moontv',
  templateUrl: './moontv.component.html',
  styleUrls: ['./moontv.component.scss']
})
export class MoontvComponent implements OnInit {

  public videoSrcList: any = [
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    },
    {
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumb: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
