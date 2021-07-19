import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonbaseComponent } from './moonbase.component';

describe('MoonbaseComponent', () => {
  let component: MoonbaseComponent;
  let fixture: ComponentFixture<MoonbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
