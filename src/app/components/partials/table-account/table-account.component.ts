import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { showMessage } from 'src/app/helpers/alert';
import Account from 'src/app/interfaces/Account';
import { UnsetActiveAccountAction } from 'src/app/reducers/person/person.actions';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-table-account',
  templateUrl: './table-account.component.html',
  styles: [],
})
export class TableAccountComponent implements OnInit, OnDestroy {
  accounts: Account[];
  accountSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountSubscription = this.store
      .select('person')
      .subscribe(({ active }) => {
        this.accounts = active.accounts;
      });
  }

  ngOnDestroy(): void {
    this.accountSubscription.unsubscribe();
  }
  async deleteAccount(id: String) {
    const data = await this.accountService.deleteAccount(id);
    if (data.ok) {
      this.store.dispatch(new UnsetActiveAccountAction(id));
      showMessage('success', data.msg);
    } else {
      showMessage('error', data.msg);
    }
  }
}
