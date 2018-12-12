import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPaymentInfo(id: number): Observable<Payment> {
    return this.httpClient.get<Payment>('../assets/payment_mock.json');
  }
}
