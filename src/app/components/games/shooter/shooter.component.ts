import { OnInit, Component, Input, HostListener, NgZone } from '@angular/core';
import { Application, IApplicationOptions, Sprite } from 'pixi.js';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit {

  static readonly routeName: string = 'games/shooter';

  public app: Application;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  @Input()
  public applicationOptions: IApplicationOptions = {
    transparent: false,
		antialias: true,
		resolution: this.devicePixelRatio,
    autoDensity: true,
  };

  constructor( private ngZone: NgZone) {}

  ngOnInit(): void {
    this.init(); 
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application(this.applicationOptions);
    });
    
    document.getElementById('pixi-container').appendChild(this.app.view);
    this.resize();
    this.onRender();
  }

  private bunny: Sprite;

  onRender(): void {
    this.app.view.style.transformOrigin = `top left`;

    this.bunny = Sprite.from('assets/media/images/moonshot-logo.png');

    // center the sprite's anchor point
    this.bunny.anchor.set(0.5);

    this.app.stage.addChild(this.bunny);

    this.app.ticker.add(() => {
        // just for fun, let's rotate mr rabbit a little
        this.bunny.rotation += 0.1;
    });

    this.repositionAssets();
  }

  repositionAssets(): void {
    if(this.bunny !== undefined) {
      // move the sprite to the center of the screen
      this.bunny.x = this.app.screen.width / 2;
      this.bunny.y = this.app.screen.height / 2;
    }
  }

  @HostListener('window:resize')
  public resize() {
    const width = document.getElementById('pixi-container').offsetWidth;
    const height = document.getElementById('pixi-container').offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    
    this.app.renderer.resize(
      width * viewportScale, 
      height * viewportScale
    );
    // this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.width = `100%`;
    this.app.view.style.height = `100%`;

    this.repositionAssets();
  }

  ngOnDestroy(): void {
    this.app.destroy();
  }

}
