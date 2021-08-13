import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonbaseBarComponent } from './moonbase-bar.component';

describe('MoonbaseBarComponent', () => {
  let component: MoonbaseBarComponent;
  let fixture: ComponentFixture<MoonbaseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonbaseBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonbaseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
