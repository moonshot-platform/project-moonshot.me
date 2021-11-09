import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonticketPromoComponent } from './moonticket-promo.component';

describe('MoonticketPromoComponent', () => {
  let component: MoonticketPromoComponent;
  let fixture: ComponentFixture<MoonticketPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonticketPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonticketPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
