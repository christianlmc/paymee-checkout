import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bank } from '../model/bank';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  preserveWhitespaces: true
})
export class ConfirmComponent implements OnInit, OnDestroy {

  bank: Bank;
  private inscBankService: Subscription;
  public transfer_type = true;

  myDate: string;
  private date_ext: Date;
  private $counter: Observable<number>;
  private time_exp = '2020-1-1 03:24:00';
  private difference: number;
  private time_disp: string;
  private subs: Subscription;

  constructor(
    private bankService: BankService
  ) { }

  ngOnInit() {
    this.bank = new Bank();
    this.inscBankService = this.bankService.getBankInfo(1).subscribe(result => this.bank = result);
    this.date_ext = new Date(this.time_exp);
    this.$counter = interval(1000).pipe(
      map((x) => {
        this.difference = Math.floor((this.date_ext.getTime() - new Date().getTime()) / 1000);
        return x;
      })
    );
    this.subs = this.$counter.subscribe((x) => this.time_disp = this.getTime(this.difference));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getTime(t: number): string {
    let days, hours, minutes, seconds;
      days = Math.floor(t / 86400);
      t -= days * 86400;
      hours = Math.floor(t / 3600) % 24;
      t -= hours * 3600;
      minutes = Math.floor(t / 60) % 60;
      t -= minutes * 60;
      seconds = t % 60;

      return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }

}
