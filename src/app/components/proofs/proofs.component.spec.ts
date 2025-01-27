import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofsComponent } from './proofs.component';

describe('ProofsComponent', () => {
  let component: ProofsComponent;
  let fixture: ComponentFixture<ProofsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProofsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
