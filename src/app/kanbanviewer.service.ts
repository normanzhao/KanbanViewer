import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KanbanviewerService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://localhost:3001/api/projects/all');
    } 
}
