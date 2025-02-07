import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationHeaderTextComponent } from './quotation-header-text.component';

describe('QuotationHeaderTextComponent', () => {
  let component: QuotationHeaderTextComponent;
  let fixture: ComponentFixture<QuotationHeaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationHeaderTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationHeaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
