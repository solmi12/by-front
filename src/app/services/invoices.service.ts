import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/Invoice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseUrl = 'http://localhost:8080/invoices'; // Replace with your Spring Boot base URL

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl);
  }

  getInvoiceById(invId: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/${invId}`);
  }

 

  updateInvoice(invId: number, invoiceDto: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.baseUrl}/${invId}`, invoiceDto);
  }

  deleteInvoice(invId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${invId}`);
  }
}