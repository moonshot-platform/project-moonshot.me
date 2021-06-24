import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-moonlp',
  templateUrl: './moonlp.component.html',
  styleUrls: ['./moonlp.component.scss']
})
export class MoonlpComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  transform( url: string ) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

}
