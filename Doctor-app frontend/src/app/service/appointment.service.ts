import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private API_URL = environment.API_URL;

  private extractData(res: any) {
    let body = res;
    return body || {};
  }

  constructor(public http:HttpClient) { }

  addPatient(datas): Observable<any> {
    return this.http.post<any>(this.API_URL+'/patients', datas).pipe(
      map(this.extractData));
  }

  getPatient(): Observable<any> {
    return this.http.get<any>(this.API_URL+'/patients').pipe(
      map(this.extractData));
  }
}
