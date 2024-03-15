import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceserviceComponent } from './invoiceservice.component';

describe('InvoiceserviceComponent', () => {
  let component: InvoiceserviceComponent;
  let fixture: ComponentFixture<InvoiceserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceserviceComponent]
    });
    fixture = TestBed.createComponent(InvoiceserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
