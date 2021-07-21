import { OnInit, Component, Input, HostListener, NgZone } from '@angular/core';
import * as PIXI from 'pixi.js';

export enum KEY_CODE {
  RIGHT_ARROW = "ArrowRight",
  LEFT_ARROW = "ArrowLeft",
  SPACE = " "
}
@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})

export class ShooterComponent implements OnInit {

  static readonly routeName: string = 'games/shooter';

  public app: PIXI.Application;
  private player: any;
  private playerSpeed = 3;
  private keys: { [key: string]: boolean } = {};
  private bullets = [];
  private bulletSpeed = 7;
  private bullet: any;
  private bulletTimer;
  private enemies = [];
  private enemySpeed = 1;
  private enemy: any;
  private enemyTimer;
  private scoreTable: any;
  private score = 0;
  private isGameOver = false;

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  @Input()
  public applicationOptions: PIXI.IApplicationOptions = {
    backgroundAlpha: 0,
    antialias: true,
    resolution: this.devicePixelRatio,
    autoDensity: true,
  };

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new PIXI.Application(this.applicationOptions);
      //preload assets
      this.app.loader.baseUrl = "assets/media/icons/game";
      this.app.loader
        .add("bullet", "bullet.png")
        .add("ufo", "ufo.png")
        .add("player", "player.png")

      this.app.loader.onProgress.add((e) => this.showProgress(e));
      this.app.loader.onComplete.add((e) => this.doneLoading(e));
      this.app.loader.onError.add((e) => this.reportError(e));

      this.app.loader.load();

      document.getElementById('pixi-container').appendChild(this.app.view);

    });

    this.resize();
    this.onRender();

  }

  private bunny: PIXI.Sprite;

  onRender(): void {
    this.app.view.style.transformOrigin = `top left`;

    this.generateEnemy();
    this.repositionAssets();
    this.app.ticker.add(() => this.gameLoop());
  }

  repositionAssets(): void {
    if (this.player !== undefined) {
      // move the sprite to the center of the screen
      this.player.x = this.app.screen.width / 2;
      this.player.y = this.app.screen.height - this.player.height;
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

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    this.keys[event.key] = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    this.keys[event.key] = true;
  }

  ngOnDestroy(): void {
    this.app.destroy();
  }

  showProgress(e): void {
    //console.log(e.progress);
  }

  doneLoading(e): void {
    // * creating player object
    this.player = PIXI.Sprite.from(this.app.loader.resources.player.texture);
    this.player.anchor.set(0.5);
    this.player.height = 30;
    this.player.width = 30;
    this.player.x = this.app.screen.width / 2;
    this.player.y = this.app.screen.height - this.player.height;
    this.player.speed = this.playerSpeed;
    this.app.stage.addChild(this.player);
  }

  reportError(e): void {
    console.log("ERROR : " + e.message);
  }

  gameLoop() {
    this.detectMovement();

    this.updateBullet();

    this.updateEnemy();

    this.updateLevel();

    this.gameOver();

    this.detectShootingEnemy();
  }
  detectMovement() {
    if (this.keys[KEY_CODE.LEFT_ARROW] && (this.player.x > this.player.width / 2)) {

      this.player.x -= 5;

    }
    if (this.keys[KEY_CODE.RIGHT_ARROW] && (this.player.x < this.app.screen.width - this.player.width / 2)) {

      this.player.x += 5;

    }
    if (this.keys[KEY_CODE.SPACE]) {

      clearTimeout(this.bulletTimer);
      this.bulletTimer = setTimeout(() => { this.fireBullet(); }, 50);

    }
  }
  fireBullet() {
    if (!this.isGameOver) {
      let tempBullet = this.createBullet();
      this.bullets.push(tempBullet);
      console.log("FIRE!");
    }
  }
  createBullet(): any {
    this.bullet = PIXI.Sprite.from(this.app.loader.resources.bullet.texture);
    this.bullet.anchor.set(0.5);
    this.bullet.height = 15;
    this.bullet.width = 15;
    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y - this.bullet.height;
    this.bullet.speed = this.bulletSpeed;
    this.app.stage.addChild(this.bullet);

    return this.bullet;
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
    this.enemy = PIXI.Sprite.from("assets/media/icons/game/ufo.png");
    this.enemy.anchor.set(0.5);
    this.enemy.x = (Math.random() * (this.app.screen.width - this.enemy.width / 2)) + this.enemy.width / 2;
    this.enemy.y = 0;
    let randomSize = Math.random() * 30
    this.enemy.height = randomSize < 20 ? 20 : randomSize;
    this.enemy.width = randomSize < 20 ? 20 : randomSize;
    this.enemy.speed = this.enemySpeed;
    this.app.stage.addChild(this.enemy);

    return this.enemy;
  }

  generateEnemy(): void {
    var tempEnemy = this.createEnemy();
    this.enemies.push(tempEnemy);
    setTimeout(() => { this.generateEnemy() }, 1000);
    clearTimeout();
  }

  updateEnemy() {
    for (let index = 0; index < this.enemies.length; index++) {
      this.enemies[index].position.y += this.enemies[index].speed;
      if (this.enemies[index].position.y > this.app.screen.height) {
        this.app.stage.removeChild(this.enemies[index]);
        this.enemies.splice(index, 1);
      }
    }
  }

  collision(bullet: any, enemy: any) {
    if (bullet === undefined || enemy === undefined)
      return false;
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
          //this.scoreTable.textContent = 'Score : ' + this.score;
        }
      }
    }
  }

  updateLevel() {
    if (this.score == 100)
      this.enemySpeed = 3;
    else if (this.score == 200)
      this.enemySpeed = 4;
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
