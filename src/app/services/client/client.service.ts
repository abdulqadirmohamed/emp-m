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

    private API_URL:string = 'https://freeapi.miniprojectideas.com/api/ClientStrive'

  private getAllClientsUrl = `https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients`
  private PostUpdateUrl = `${this.API_URL}/AddUpdateClient`
  private deleteUrl = `${this.API_URL}/GetAllDesignation/DeleteClientByClientId?clientId=`

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
