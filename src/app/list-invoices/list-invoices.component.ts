import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/Invoice.model';
// Replace with the actual path to your Invoice model

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/invoices'; // Replace with your Spring Boot base URL
  invoices$: Observable<Invoice[]> | undefined; // Add | undefined to the type

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllInvoices(); // Call getAllInvoices() when the component initializes
  }

  getAllInvoices(): void {
    this.invoices$ = this.http.get<Invoice[]>(this.baseUrl);
  }

  deleteInvoice(invId: number): void {
    this.http.delete<void>(`${this.baseUrl}/${invId}`).subscribe(() => {
      console.log(`Invoice with ID ${invId} deleted successfully.`);
      this.getAllInvoices(); // After deletion, refresh the list of invoices
    }, error => {
      console.error(`Error deleting invoice with ID ${invId}:`, error);
    });
  }
}
