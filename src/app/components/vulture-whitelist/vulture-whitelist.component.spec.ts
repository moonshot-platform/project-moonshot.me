import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VultureWhitelistComponent } from './vulture-whitelist.component';

describe('VultureWhitelistComponent', () => {
  let component: VultureWhitelistComponent;
  let fixture: ComponentFixture<VultureWhitelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VultureWhitelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VultureWhitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
