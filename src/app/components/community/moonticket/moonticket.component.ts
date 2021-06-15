import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const FontFamily = 'pt "Montserrat-SemiBold"';

const MONTHS = {
    0: 'JANUARY',
    1: 'FEBRUARY',
    2: 'MARCH',
    3: 'APRIL',
    4: 'MAY',
    5: 'JUNE',
    6: 'JULY',
    7: 'AUGUST',
    8: 'SEPTEMBER',
    9: 'OCTOBER',
    10: 'NOVEMBER',
    11: 'DECEMBER'
  }

@Component({
  selector: 'app-moonticket',
  templateUrl: './moonticket.component.html',
  styleUrls: ['./moonticket.component.scss']
})
export class MoonticketComponent implements OnInit {

  @ViewChild('ticketCanvas')
  ticketCanvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  public downloadFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngAfterViewInit(): void {
    this.context = this.ticketCanvas.nativeElement.getContext('2d');
    const name = this.downloadFormGroup.get('name').value;
    this.drawImage(name);
  }

  ngOnInit(): void {
    this.downloadFormGroup = this.formBuilder.group({
      name: ['MOONSHOOTER', [Validators.required]]
    })
    this.onChanges();
  }

  onChanges() {
    this.downloadFormGroup.get('name').valueChanges.subscribe(val => {
      this.drawImage(val)
    });
  }

  pad(n: any, width: number, z='0') {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  formatAMPM(hours: any) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return hours + ':00 ' + ampm;
  }

  calcPointSize( size: number, text: string ): number {
    let itFits = false;
  
    while( !itFits ) {
      this.context.font = size + FontFamily;
      let box_width = (1400 - 1120);
      let metrics = this.context.measureText( text );
      if( metrics.width >= box_width ) {
        size = size - 1;
        continue;
      }
      else if( size <= 1 ) {
        return 0;
      } else
        return size;
    }

    return size;
  }

  drawName(name: string) {
    let pointSize = this.calcPointSize( 30, name );
    this.context.textAlign = 'center';

    this.context.font = `bold ${pointSize} ${FontFamily}`;
    this.context.fillStyle = "#4b4b4b";
        
    this.context.fillText(name, 1041, 320);
    this.context.textAlign = 'left';
  }

  drawDate(text: string, pointSize: number, color: string, x1: number, y1: number) {
    this.context.font = pointSize + FontFamily;
    this.context.fillStyle = color;
    this.context.fillText(text, x1, y1);
    this.context.imageSmoothingEnabled = true;
  }


  drawImage(name: string, shouldDownload: boolean = false) {
    
    var img = new Image;
    img.onload = () => {
      this.context.drawImage(img, 0, 0, 1200, 436);
      this.drawName(name);

      let d = new Date();
      let year = d.getFullYear();
      let month = MONTHS[ d.getMonth() ];
      let day = d.getDate();
      
      let today = month + " " + day + ", " + year;

      let hour = this.pad( (d.getHours() + 1 ) % 23, 2 );

      // left
      this.drawDate(today, 16, "#ffffff", 93, 247);
      this.drawDate(this.formatAMPM(hour), 16, "#ffffff", 93, 273 );
      
      this.drawDate("ARRIVAL SOON",16, "#ffffff", 419, 247 );
      // left end

      
      this.drawDate("ARRIVAL SOON", 12, "#4b4b4b", 1020, 130 );

      this.drawDate(today, 12, "#4b4b4b", 1020, 245);
      this.drawDate(this.formatAMPM(hour), 12, "#4b4b4b", 1020, 265);

      this.drawDate("www.project-moonshot.me", 12, "#4b4b4b", 904, 423);

      if(shouldDownload) {
        let link = document.createElement('a');
        link.download = 'moonshot-ticket.png';
        link.href = this.ticketCanvas.nativeElement.toDataURL();
        link.click();
      }
    };
    img.src = 'assets/media/images/community/moon-ticket.png';
  }

  downloadTicket(): void {
    const name = this.downloadFormGroup.get('name').value;
    this.drawImage(name, true);
  }
}