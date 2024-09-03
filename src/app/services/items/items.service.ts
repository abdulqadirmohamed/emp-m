import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItems } from '../../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/api/items'

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<IItems> {
    return this.http.get<IItems>(this.apiUrl)
  }
  deleteItem(id: number): Observable<IItems> {
    return this.http.delete<IItems>(`${this.apiUrl}/${id}`)
  }
}
