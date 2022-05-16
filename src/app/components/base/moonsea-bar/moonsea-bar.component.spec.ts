import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonseaBarComponent } from './moonsea-bar.component';

describe('MoonseaBarComponent', () => {
  let component: MoonseaBarComponent;
  let fixture: ComponentFixture<MoonseaBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonseaBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonseaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
