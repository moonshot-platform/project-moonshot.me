import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public videoSource: string = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  @ViewChild('videoPlayer') public videoPlayer: ElementRef<HTMLVideoElement>;
  public paused = false
  public videoPlaying = false

  constructor() { }

  toggleVideo(): void {
    if(this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
      this.videoPlaying = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.videoPlaying = false;
    }
  }

  ngOnInit(): void {
  }

}
