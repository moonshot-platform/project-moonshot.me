import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitsMoonticketComponent } from './rabbits-moonticket.component';

describe('RabbitsMoonticketComponent', () => {
  let component: RabbitsMoonticketComponent;
  let fixture: ComponentFixture<RabbitsMoonticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabbitsMoonticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitsMoonticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
