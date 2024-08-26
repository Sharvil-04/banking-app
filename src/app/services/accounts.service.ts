import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }

  private accounts: Account[] = [
    {
      id: 1,
      accType: 'Checking',
      balance: 234.21,
      accNumber: 232312,
      currency: 'USD'
    },
    {
      id: 2,
      accType: 'Savings',
      balance: 10000,
      accNumber: 879761,
      currency: 'USD'
    },
    {
      id: 3,
      accType: 'Line of Credit',
      balance: 20000,
      accNumber: 564532,
      currency: 'USD'
    },
  ];

  getAccounts(): Observable<Account[]> {
    return of(this.accounts)  
  }

}
