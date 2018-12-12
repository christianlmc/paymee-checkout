import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
  preserveWhitespaces: true
})
export class FinishComponent implements OnInit, OnDestroy {

  private inscPaymentServideGET: Subscription;
  payment: Payment;
  situation = true;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.payment = new Payment();
    this.inscPaymentServideGET = this.paymentService.getPaymentInfo(1).subscribe(
      result => this.payment = result
    );
  }

  ngOnDestroy() {
    this.inscPaymentServideGET.unsubscribe();
  }

}
