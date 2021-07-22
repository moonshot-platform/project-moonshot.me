import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceInvaderComponent } from './space-invader.component';

describe('SpaceInvaderComponent', () => {
  let component: SpaceInvaderComponent;
  let fixture: ComponentFixture<SpaceInvaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceInvaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceInvaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
