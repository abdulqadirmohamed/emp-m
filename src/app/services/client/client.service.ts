import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../../model/Client';
import { apiResponseModel } from '../../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private getAllClientsUrl = `${environment.API_URL}/GetAllDesignation`
  private PostUpdateUrl = `${environment.API_URL}/GetAllDesignation/`
  private deleteUrl = `${environment.API_URL}/GetAllDesignation/DeleteEmployeeByEmpId?empId=`

  constructor(private http: HttpClient) { }

  getAllClients():Observable<apiResponseModel>{
    return this.http.get<apiResponseModel>(this.getAllClientsUrl)
  }
  postUpdateClient(obj:Client):Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>(this.PostUpdateUrl, obj)
  }
  deleteClientByd(id:number):Observable<apiResponseModel>{
    return this.http.delete<apiResponseModel>(this.deleteUrl+id)
  }
}
