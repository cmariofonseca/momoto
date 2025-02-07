import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQuotationComponent } from './pre-quotation.component';

describe('PreQuotationComponent', () => {
  let component: PreQuotationComponent;
  let fixture: ComponentFixture<PreQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
