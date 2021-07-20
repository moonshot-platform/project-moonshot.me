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
  private player: Sprite;
  private keys: { [k: string]: boolean };
  private keysDiv: any;
  private bullets = [];
  private bulletSpeed = 10;
  private bullet: any;
  private enemies = [];
  private enemySpeed = 3;
  private enemy: any;
  private scoreTable: any;
  private score = 0;
  private isGameOver = false;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  @Input()
  public applicationOptions: IApplicationOptions = {
    backgroundAlpha: 0.1,
    antialias: true,
    resolution: this.devicePixelRatio,
    autoDensity: true,
  };

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.keys = { "32": false, "37": false, "39": false };
    this.init();
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application(this.applicationOptions);
      /*       //preload assets
            this.app.loader.baseUrl = "assets/media/icons/game";
            this.app.loader
              .add("bullet", "bullet.png")
              .add("ufo", "ufo.png")
              .add("player", "player.png")
      
            this.app.loader.onProgress.add(this.showProgress);
            this.app.loader.onComplete.add(this.doneLoading);
            this.app.loader.onError.add(this.reportError);
      
            this.app.loader.load(); */

    });


    document.getElementById('pixi-container').appendChild(this.app.view);

    this.resize();
    this.onRender();

    window.addEventListener("keydown", this.keysDown)
    window.addEventListener("keyup", this.keysUp)


  }

  private bunny: Sprite;

  onRender(): void {
    this.app.view.style.transformOrigin = `top left`;



    // player object
    this.player = Sprite.from("assets/media/icons/game/player.png");
    this.player.anchor.set(0.5);
    this.player.x = this.app.view.width / 2;
    this.player.y = this.app.view.height / 2;;
    this.app.stage.addChild(this.player);

    this.generateEnemy();
    this.repositionAssets();
    this.app.ticker.add(this.gameLoop);
  }

  repositionAssets(): void {
    if (this.bunny !== undefined) {
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
  showProgress(e): void {
    console.log(e.progress);
  }

  doneLoading(e): void {
    console.log('DONE LOADING!');
  }

  reportError(e): void {
    console.log("ERROR : " + e.message);
  }
  keysDown(e) {
    this.keys[e.keyCode] = true;
    console.log(e.keyCode);

  }

  keysUp(e) {
    this.keys[e.keyCode] = false;
    console.log(e.keyCode);
  }

  gameLoop() {
    console.log(typeof this.keys);
    // left arrow
    if (this.keys["37"]) {
      if (this.player.x > 20)
        this.player.x -= 5;
    }
    // right arrow
    if (this.keys["39"]) {
      if (this.player.x < this.app.view.width - 20)
        this.player.x += 5;
    }

    // space
    if (this.keys["32"]) {

      window.clearTimeout();
      setTimeout(function () {
        this.fireBullet();
      }, 100);

    }

    //if (this.updateBullet !== undefined)
    this.updateBullet();
    //if (this.updateEnemy !== undefined)
    this.updateEnemy();
    //if (this.updateLevel !== undefined)
    this.updateLevel();
    // if (this.gameOver !== undefined)
    this.gameOver();
    //if (this.detectShootingEnemy !== undefined)
    this.detectShootingEnemy();

    this.generateEnemy();
  }

  updateBullet() {
    for (let index = 0; index < this.bullets.length; index++) {
      this.bullets[index].position.y -= this.bullets[index].speed;

      if (this.bullets[index].position.y < -200) {
        this.app.stage.removeChild(this.bullets[index]);
        this.bullets.splice(index, 1);
      }
    }

  }
  createEnemy(): any {
    this.enemy = Sprite.from("assets/media/icons/game/ufo.png");
    this.enemy.anchor.set(0.5);
    this.enemy.x = (Math.random() * (this.app.view.width - this.enemy.width / 2)) + this.enemy.width / 2;
    this.enemy.y = 0;
    this.enemy.speed = this.enemySpeed;
    this.app.stage.addChild(this.enemy);

    return this.enemy;
  }

  generateEnemy(): void {
    if (typeof this.createEnemy === 'function') {
      var tempEnemy = this.createEnemy();
      this.enemies.push(tempEnemy);
      console.log("CRAETING ENEMY!!");
      setTimeout(this.generateEnemy, 1000);
      clearTimeout();
    }
  }

  updateEnemy() {
    for (let index = 0; index < this.enemies.length; index++) {
      this.enemies[index].position.y += this.enemies[index].speed;
      if (this.enemies[index].position.y > this.app.view.height) {
        this.app.stage.removeChild(this.enemies[index]);
        this.enemies.splice(index, 1);
      }
    }
  }

  collision(bullet, enemy) {
    let aBox = bullet.getBounds();
    let bBox = enemy.getBounds();
    return (((aBox.x >= bBox.x) && (aBox.x <= bBox.x + bBox.width)) || ((aBox.x + aBox.width >= bBox.x) && (aBox.x + aBox.width <= bBox.x + bBox.width))) &&
      (aBox.y <= bBox.y + bBox.height);

  }

  detectShootingEnemy(): void {

    for (let i = 0; i < this.bullets.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.collision(this.bullets[i], this.enemies[j])) {
          //app.stage.removeChild(bullets[i]);
          this.app.stage.removeChild(this.enemies[j]);
          this.enemies.splice(j, 1);
          this.score += 5;
          this.scoreTable.textContent = 'Score : ' + this.score;
        }
      }
    }
  }

  updateLevel() {
    if (this.score == 100)
      this.enemySpeed = 5;
    else if (this.score == 200)
      this.enemySpeed = 7;
  }

  gameOver() {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.collision(this.player, this.enemies[i])) {
        this.app.stage.removeChild(this.player);
        this.isGameOver = true;
      }
    }

  }
}
