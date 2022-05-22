import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonStormComponent } from './moon-storm.component';

describe('MoonStormComponent', () => {
  let component: MoonStormComponent;
  let fixture: ComponentFixture<MoonStormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonStormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonStormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
