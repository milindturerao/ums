import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockacComponent } from './unlockac.component';

describe('UnlockacComponent', () => {
  let component: UnlockacComponent;
  let fixture: ComponentFixture<UnlockacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
