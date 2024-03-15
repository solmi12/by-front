import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Tool } from '../models/tool.model';
import { CartItem } from '../models/CartItem.model';
import { UserCartItemsResponse } from '../models/UserCartItemsResponse.model';
import { Invoice } from '../models/Invoice.model';
import { UserAndInvoiceDTO } from '../models/UserAndInvoiceDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UserCartItemsService {

  private baseUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) { 
    
  }

  buyTool(requestData: any): Observable<string> {
    const url = `${this.baseUrl}/buy`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers: headers,
      responseType: 'text' as 'json' // Set responseType to 'text' for plain text response
    };
    return this.http.post<string>(url, requestData, options);
}
getCartItems(email: string): Observable<UserCartItemsResponse> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  const url = `${this.baseUrl}/items`;
  const params = new HttpParams().set('Email', email);
  
  return this.http.get<UserCartItemsResponse>(url, { headers, params });
}

deleteProductFromCart(userId: number, cartItemId: number): Observable<string> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  // Specify the options with responseType as 'text'
  const options = {
    headers: headers,
    responseType: 'text' as 'json' // Set responseType to 'text' for plain text response
  };

  const url = `${this.baseUrl}/items/${userId}/${cartItemId}`;
  return this.http.delete<string>(url, options);
}

deleteAllAndCreateInvoice(requestData: UserAndInvoiceDTO): Observable<string> {
  const url = `${this.baseUrl}/cart/deleteAndCreateInvoice`;
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' // Specify content type as JSON
  });

  return this.http.post<string>(url, requestData, { headers, responseType: 'text' as 'json' });
}

}
