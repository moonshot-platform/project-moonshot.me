import * as PIXI from 'pixi.js';

export class Enemy {
    private sampleEnemy: any;

    constructor(
        public img: string,
        //public live: number,
        //public width: number,
        //public heigth: number,
        //public x: number,
        //public y: number,
        public anchorSet: number,
        public enemySpeed: number,
        public screenWidth: number,
    ) { }

    createEnemy(maxEnemySize: number): any {
        let randomSize = Math.random() * maxEnemySize;

        this.sampleEnemy = PIXI.Sprite.from(this.img);
        this.sampleEnemy.anchor.set(this.anchorSet);
        this.sampleEnemy.height = randomSize < 15 ? 15 : randomSize;
        this.sampleEnemy.width = randomSize < 15 ? 15 : randomSize;
        this.sampleEnemy.x = (Math.random() * (this.screenWidth - this.sampleEnemy.width / 2)) + this.sampleEnemy.width / 2;
        this.sampleEnemy.y = 0;
        this.sampleEnemy.speed = this.enemySpeed;
        this.sampleEnemy.point = 50 - this.sampleEnemy.width;
        this.sampleEnemy.diagonal = Math.random() * 1;

        if (this.sampleEnemy.width >= 35) {
            this.sampleEnemy.live = 3;
        } else if (this.sampleEnemy.width >= 25) {
            this.sampleEnemy.live = 2;
        } else {
            this.sampleEnemy.live = 1;
        }

        return this.sampleEnemy;
    }
}