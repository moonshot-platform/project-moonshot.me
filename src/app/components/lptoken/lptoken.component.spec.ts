import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LptokenComponent } from './lptoken.component';

describe('LptokenComponent', () => {
  let component: LptokenComponent;
  let fixture: ComponentFixture<LptokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LptokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LptokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
