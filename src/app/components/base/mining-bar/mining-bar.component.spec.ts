import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningBarComponent } from './mining-bar.component';

describe('MiningBarComponent', () => {
  let component: MiningBarComponent;
  let fixture: ComponentFixture<MiningBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
