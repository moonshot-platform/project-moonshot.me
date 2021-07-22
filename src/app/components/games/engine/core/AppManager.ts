import ViewManager from './ViewManager';
import { Application, IApplicationOptions } from 'pixi.js';

export default class AppManager extends Application {

  constructor( options: any ) {
    let appOptions: IApplicationOptions;
    
    if ( Object.keys(options).length === 0 ) {
      appOptions = {
        transparent: false,
        antialias: true,
        resolution: 1,
        autoDensity: true,
        width: 1200,
        height: 675,
        backgroundColor: 0x1099bb
      };
    } else {
      appOptions = options.app;
    }

    // add the needed options to use the PIXI Canvas
    super( appOptions );

    // add canvas default to body or another div parent by giving a div id
    if( options.parent === null )
      document.body.appendChild(this.view);
    else
      document.getElementById(options.parent).appendChild(this.view);
  }

  init( sections: any ) {
    new ViewManager( this, sections ).init();
  }
}
