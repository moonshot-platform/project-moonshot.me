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
    transparent: true,
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
  }

  @HostListener('window:resize')
  public resize() {
    const width = document.getElementById('pixi-container').offsetWidth;
    const height = document.getElementById('pixi-container').offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;

    const sprite: Sprite = Sprite.from('assets/media/images/moonshot-logo.png');
    this.app.stage.addChild(sprite);

    this.app.render();
  }

  ngOnDestroy(): void {
    this.app.destroy();
  }

}
