import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoontvComponent } from './moontv.component';

describe('MoontvComponent', () => {
  let component: MoontvComponent;
  let fixture: ComponentFixture<MoontvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoontvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoontvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
