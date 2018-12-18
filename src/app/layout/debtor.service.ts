import { Injectable } from '@angular/core';
import { Debtor } from './debtor';
import { PersonalData } from './personalData';
import { Observable, of } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable()
export class DebtorService {

  private debtors:Debtor[] = [
    {id:1, name:'César Erick Hernández López', debt:'$500,000', bankName: 'BBVA-Bancomer', createAt:'04-07-2018', state:'NC', personalData: null},
    {id:2, name:'Sebastián Hernández López', debt:'$450,000', bankName: 'Banamex', createAt:'05-07-2018', state:'NC', personalData: null}
  ];

  constructor() { }

  getDebtors(): Observable<Debtor[]> {
    return of(this.debtors);
  }
}
