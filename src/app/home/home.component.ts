import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {

  banks;
  constructor() { }

  ngOnInit() {
    this.banks = [
      {
        'name' : 'Banco do Brasil',
        'logo' : 'assets/bb.jpg'
      },
      {
        'name' : 'Banco do Bradesco',
        'logo' : 'assets/bradesco.jpg'
      },
      {
        'name' : 'Banco Itau',
        'logo' : 'assets/itau.png'
      },
      {
        'name' : 'Banco Santander',
        'logo' : 'assets/santander.png'
      },
      {
        'name' : 'Banco Original',
        'logo' : 'assets/original.png'
      }
    ];
  }

}
