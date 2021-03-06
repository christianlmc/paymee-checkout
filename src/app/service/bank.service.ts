import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Bank } from '../model/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]> ('../../assets/banks_mock.json');
  }

  getBankInfo(id: number): Observable<Bank> {
    return this.httpClient.get<Bank> ('../../assets/bank__info_mock.json');
  }

  getBanksMoney(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]> ('../../assets/banks_money_mock.json');
  }

}
