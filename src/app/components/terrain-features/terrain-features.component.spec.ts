import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainFeaturesComponent } from './terrain-features.component';

describe('TerrainFeaturesComponent', () => {
  let component: TerrainFeaturesComponent;
  let fixture: ComponentFixture<TerrainFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrainFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrainFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
