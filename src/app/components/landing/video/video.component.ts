import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public videoSource: any = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  constructor() { }

  toggleVideo(event: any): void {
    this.videoPlayer.nativeElement.play();
  }

  ngOnInit(): void {
  }

}
