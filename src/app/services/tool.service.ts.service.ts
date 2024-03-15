import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from '../models/tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolService {


  private baseUrl = 'http://localhost:8080/tools';
  constructor(private httpClient: HttpClient) { }

  getToolsByDiscountedPriceNotNull(): Observable<Tool[]> {
    const url = `${this.baseUrl}/byDiscountedPrice`;
    return this.httpClient.get<Tool[]>(url);
  }
  getAllTools(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`${this.baseUrl}`);
  }
  getToolsByToolName(toolName: string): Observable<Tool[]> {
    const url = `${this.baseUrl}/search?toolName=${toolName}`;
    return this.httpClient.get<Tool[]>(url);
  }
  
  deleteTool(toolId: number): Observable<void> {
    const url = `${this.baseUrl}/${toolId}`;
    return this.httpClient.delete<void>(url);
  }
  

  updateTool(toolId: number, updatedTool: Tool): Observable<Tool> {
    const url = `${this.baseUrl}/${toolId}/update-promotion`;
    return this.httpClient.put<Tool>(url, updatedTool);
  }

  getToolById(toolId: number): Observable<Tool> {
    return this.httpClient.get<Tool>(`${this.baseUrl}/${toolId}`);
  }

  getToolsByCategory(categoryName: string): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`${this.baseUrl}/byCategory?categoryName=${categoryName}`);
  }

  addTool(tool: Tool): Observable<Tool> {
    return this.httpClient.post<Tool>(`${this.baseUrl}/add`, tool);
  }

}
