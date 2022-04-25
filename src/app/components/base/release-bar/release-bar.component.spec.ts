import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseBarComponent } from './release-bar.component';

describe('ReleaseBarComponent', () => {
  let component: ReleaseBarComponent;
  let fixture: ComponentFixture<ReleaseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
