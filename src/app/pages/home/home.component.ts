import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../model/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountsService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }

}
