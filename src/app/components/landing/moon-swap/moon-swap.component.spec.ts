import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonSwapComponent } from './moon-swap.component';

describe('MoonSwapComponent', () => {
  let component: MoonSwapComponent;
  let fixture: ComponentFixture<MoonSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
