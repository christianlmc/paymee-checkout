import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Bank } from '../model/bank';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]> ("../../assets/banks_mock.json");
  }
}
