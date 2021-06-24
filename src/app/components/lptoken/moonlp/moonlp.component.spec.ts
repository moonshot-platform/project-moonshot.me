import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonlpComponent } from './moonlp.component';

describe('MoonlpComponent', () => {
  let component: MoonlpComponent;
  let fixture: ComponentFixture<MoonlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
