import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Debtor } from './debtor';
import { PersonalData } from './personalData';
import { Observable } from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import swal from 'sweetalert2';

@Injectable()
export class DebtorService {

  private urlEndPoint:string ="http://shrouded-ocean-90048.herokuapp.com/api/v1/debtor/";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getDebtors() : Observable<Debtor[]> {
    return this.http.get<Debtor[]>(this.urlEndPoint);
  }

  getDebtor(id): Observable<Debtor> {
    return this.http.get<Debtor>('${this.urlEndPoint}/${id}')
      .pipe( catchError( e => {
        swal('No existe', e, 'error');
        this.router.navigete(['/debtors']);
        return throwError(e);
      })
    );
  }

  createDebtor(debtor:Debtor):Observable<Debtor> {
    return this.http.post<Debtor>(this.urlEndPoint, debtor, {headers : this.httpHeaders});
  }

}
