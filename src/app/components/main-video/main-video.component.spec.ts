import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideoComponent } from './main-video.component';

describe('MainVideoComponent', () => {
  let component: MainVideoComponent;
  let fixture: ComponentFixture<MainVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
