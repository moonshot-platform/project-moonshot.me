import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon-storm',
  templateUrl: './moon-storm.component.html',
  styleUrls: ['./moon-storm.component.scss']
})
export class MoonStormComponent implements OnInit {

  static readonly routeName: string = 'games/moonstorm';

  inGameBalance: number = 100000000;
  shieldPower: number = 88;
  reflectionsGained: number = 12003234;
  damagePaid: number = 2420202020;
  damageAbsorbed: number = 2420202034;
  activePlayers: number = 1;
  totalLocked: number = 2000000;

  hasGameStarted: boolean = false;

  fuelMethods: any[] = [
    {
      icon: 'https://project-moonshot.me/favicon.ico',
      name: 'MSHOT'
    },
    {
      icon: 'assets/media/icons/bnb.png',
      name: 'BNB'
    }
  ]

  selectedFuelMethod: any = this.fuelMethods[0];
  isFuelDropdownActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFuelDropdown() {
    this.isFuelDropdownActive = !this.isFuelDropdownActive;
  }

  closeFuelDropdown() {
    this.isFuelDropdownActive = false;
  }

  selectFuelItem(item: any) {
    this.selectedFuelMethod = item;
    this.closeFuelDropdown();
  }

  @HostListener('document:click', ['$event'])
  onMouseEnter(event: any) {
    // where the event is originally invoked.   
    let dropdownByID = document?.getElementById('token-dropdown')?.contains(event.target)

    if (!dropdownByID)
      this.closeFuelDropdown();

    const shieldPowerText = document?.querySelector('.shield-power') as HTMLElement;
    if (shieldPowerText != undefined)
      if (this.shieldPower >= 60) {
        shieldPowerText.style.cssText += 'color:green !important;';
      } else if (this.shieldPower >= 30) {
        shieldPowerText.style.cssText += 'color:orange;';
      } else {
        shieldPowerText.style.cssText += 'color:red;';
      }
  }

  enterGame() {
    this.hasGameStarted = true;
  }

  leaveGame() {
    this.hasGameStarted = false;
  }

}
