import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private moonseaBarToggle = new Subject<any>();
  private releaseBarToggle = new Subject<any>();
  private moonboxesBarToggle = new Subject<any>();

  constructor() { }

  onMoonseaBarToggle(state?: boolean) {
    this.moonseaBarToggle.next(state);
  }

  whenMoonseaBarToggled(): Observable<any> {
    return this.moonseaBarToggle.asObservable();
  }

  onReleaseBarToggle(state?: boolean) {
    this.releaseBarToggle.next(state);
  }

  whenReleaseBarToggled(): Observable<any> {
    return this.releaseBarToggle.asObservable();
  }

  onMoonboxesBarToggle(state?: boolean) {
    this.moonboxesBarToggle.next(state);
  }

  whenMoonboxesBarToggled(): Observable<any> {
    return this.moonboxesBarToggle.asObservable();
  }

  shortWalletAddress(address: string): string {
    return address.slice(0, 20) + '...' + address.slice(-11)
  }
}
