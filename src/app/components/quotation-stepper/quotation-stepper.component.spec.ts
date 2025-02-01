import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationStepperComponent } from './quotation-stepper.component';

describe('QuotationStepperComponent', () => {
  let component: QuotationStepperComponent;
  let fixture: ComponentFixture<QuotationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
