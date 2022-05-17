import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private miningBarToggle = new Subject<any>();
  private moonseaBarToggle = new Subject<any>();
  private releaseBarToggle = new Subject<any>();
  private moonboxesBarToggle = new Subject<any>();

  constructor() { }

  onMiningBarToggle(state?: boolean) {
    this.miningBarToggle.next(state);
  }

  whenMiningBarToggled(): Observable<any> {
    return this.miningBarToggle.asObservable();
  }

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
    return address.slice(0, address.length / 2) + '...' + address.slice(-((address.length / 2) - 10))
  }
}
