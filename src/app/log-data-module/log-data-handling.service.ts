import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LogDataHandlingService {

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'content-Type': 'application/json',
  })
  options = { headers: this.headers };

  getLogsData(data:any) {
    return this.http.post(
      environment.localUrl+"api/getLogsData",data,this.options
    );
  }

  getLogsDataWithFilter(data:any) {
    return this.http.post(
      environment.localUrl+"api/getLogsData",data,this.options
    );
  }

  InsertLogsData(data:any) {
    return this.http.post(
      'http://localhost:3000/api/insertLogsData',data,this.options
    );
  }

}
