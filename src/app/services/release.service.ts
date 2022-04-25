import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  private toggle = new Subject<any>();

  constructor() { }

  onToggle(state?: boolean) {
    this.toggle.next(state);
  }

  whenToggled(): Observable<any> {
    return this.toggle.asObservable();
  }
}
