import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMoonbaseComponent } from './buy-moonbase.component';

describe('BuyMoonbaseComponent', () => {
  let component: BuyMoonbaseComponent;
  let fixture: ComponentFixture<BuyMoonbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMoonbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMoonbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
