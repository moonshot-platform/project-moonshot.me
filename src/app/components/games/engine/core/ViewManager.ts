import SectionManager from './SectionManager';
import { Application } from 'pixi.js';

export default class ViewManagewr {

  sectionManager: SectionManager;

  constructor( private app: Application, sections ) {
    this.app = app;
    this.loadSections( sections );
  }

  init() {
    window.onresize = () => this.onResize();
    this.onResize();
    this.onUpdate();
  }

  loadSections( sections: any ) {
    this.sectionManager = new SectionManager( this.app );
    for( let i = 0; i < Object.keys(sections).length; i++ ) {
      let name = Object.keys(sections)[i];
      this.sectionManager.addSection( name, new sections[name]( this.app ), true );
    }

  }

  onResize() {
    let width    = this.app.renderer.options.width;
    let minWidth = width;
    let height   = this.app.renderer.options.height;

    let ratio = this.getMinRatio( minWidth, height );

    let posY = window.innerHeight / 2 - (height * ratio) / 2;
    let posX = window.innerWidth / 2 - (width * ratio) / 2;

    let canvas = document.getElementsByTagName('canvas')[0];

    this.app.view.style.transform = `scale(${ratio})`;
    this.app.view.style.width = (width * ratio) + "px";
    this.app.view.style.height = (height * ratio) + "px";
    this.app.view.style.webkitTransform = 'translate(' + posX + 'px,' + posY + 'px)';
    this.app.view.style.transform = 'translate(' + posX + 'px,' + posY + 'px)';
  }

  getMinRatio( minWidth: number, height: number ) {
    let sx = window.innerWidth / minWidth;
    let sy = window.innerHeight / height;

    return Math.min( sx, sy );
  }

  onUpdate() {
    // Listen for animate update
    this.app.ticker.add( ( delta ) => {
      // Update the needed sections
      this.sectionManager.onUpdateSections( delta );
    });
  }

}
