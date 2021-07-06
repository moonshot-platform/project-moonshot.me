export default class SectionManager {

    sections: any;
    current: any;

    constructor( private app ){
      this.app = app;
      this.sections = {};
      this.current  = -1;
    }
  
    addSection( name: any, section: any, current = false ){
      if( this.sections[name] === undefined )
        this.sections[name] = section;
  
      if( current )
        this.current = Object.keys(this.sections).length - 1;
  
      this.app.stage.addChild(this.sections[name]);
    }
  
    nextSection(){
      this.current = ( this.current + 1 ) % Object.keys(this.sections).length;
      this.showSection();
    }
  
    previousSection(){
      this.current = ( (this.current - 1) === -1 ) ? Object.keys(this.sections).length - 1 : this.current - 1;
      this.showSection();
    }
  
    goToSection(to: any){
      this.current = to;
      this.showSection();
    }
  
    showSection() {
      let counter = 0;
      for( let key in this.sections ) {
        if( counter++ == this.current )
          this.sections[key].visible = true;
        else
          this.sections[key].visible = false;
      }
    }
  
    countSections() {
      console.log('Counted sections: ' + Object.keys(this.sections).length);
    }
  
    onUpdateSections( delta: number ) {
      for( var key in this.sections ) {
        this.sections[key].onUpdate( delta );
      }
    }
  }
  