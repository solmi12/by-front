import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private currentUserSubject: BehaviorSubject<UserModel | null>;
  private baseUrl = 'http://localhost:8080/user';
  constructor( private http: HttpClient, private authService: AuthServiceService) {     const userData: string | null = localStorage.getItem('currentUser');
  this.currentUserSubject  = new BehaviorSubject<UserModel | null>(userData ? JSON.parse(userData) : null);}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
    
  public getCurrentUser(): Observable<UserModel | null> {
    return this.currentUserSubject.asObservable();
  }


  addUser(user: UserModel): Observable<string> {
    const url = `${this.baseUrl}/add`;
    return this.http.post(url, user, { responseType: 'text' });
  }
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}`);
  }
  getUserById(userId: number): Observable<UserModel> {
    const token = localStorage.getItem('token');
    const url = `${this.baseUrl}/${userId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include JWT token in the request headers
    });
    return this.http.get<UserModel>(url, { headers });
  }


  deleteTool(userId: number): Observable<void> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
  
}
