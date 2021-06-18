import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonticketComponent } from './moonticket.component';

describe('MoonticketComponent', () => {
  let component: MoonticketComponent;
  let fixture: ComponentFixture<MoonticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
