import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private url = `${environment.API_URL}/GetAllDesignation`;

  constructor(private http: HttpClient) { }

  getDesignation(): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(this.url);
  }
}
