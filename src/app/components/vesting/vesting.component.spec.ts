import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestingComponent } from './vesting.component';

describe('VestingComponent', () => {
  let component: VestingComponent;
  let fixture: ComponentFixture<VestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
