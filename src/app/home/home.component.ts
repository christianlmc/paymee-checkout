import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { Bank } from '../model/bank';
import { BankService } from '../service/bank.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit, OnDestroy {
  // @ViewChild('form');

  banks: Bank[];
  typePerson = true;
  user: User;
  selectedBank: Bank;
  private inscBankServiceGET: Subscription;

  constructor(
    private bankService: BankService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.selectedBank = new Bank();
    this.user = new User();
    this.inscBankServiceGET = this.bankService.getBanks().subscribe(
      result => this.banks = result
    );
  }

  ngOnDestroy() {
    this.inscBankServiceGET.unsubscribe();
  }

  onSubmit() {
    //coloque sua lógica de mandar as informações para o back aqui
    this.router.navigateByUrl("/confirmar");
  }

}
