import { OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  public videoSource: string = "assets/media/videos/intro.mp4";

  @ViewChild('videoPlayer') public videoPlayer: ElementRef<HTMLVideoElement>;
  public isPlaying = false;
  public show = true;
  public fadeOut = false;
  public timeoutRunning = false;
  private timeout: any;

  constructor() { }

  toggleVideo(): void {
    if(this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }

    this.isPlaying = !this.isPlaying;

    if( this.isPlaying ) {
      this.fadeOut = true;
      this.timeoutRunning = true;
      this.timeout = setTimeout( () => this.onFadeOut(), 700 );
    } else {
      this.show = true;
    }
    
  }

  onFadeOut() {
    this.timeoutRunning = false;
    this.show = false;
    this.fadeOut = false;
  }

  onShow( onHover: boolean ): void {
    if( onHover )
      this.show = true;
    else {
      if( this.timeoutRunning ) {
        clearTimeout(this.timeout);
        this.onFadeOut();
      }
      
      this.show = this.isPlaying ? false : true;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if( this.timeoutRunning ) clearTimeout(this.timeout);
  }

}
