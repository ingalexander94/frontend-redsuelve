import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import Bank from 'src/app/interfaces/Bank';
import { LoadBankAction } from 'src/app/reducers/bank/bank.actions';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-table-bank',
  templateUrl: './table-bank.component.html',
  styles: [],
})
export class TableBankComponent implements OnInit, OnDestroy {
  banks: Bank[];
  bankSubscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.bankSubscription = this.store
      .select('bank')
      .subscribe(({ banks }) => (this.banks = banks));
  }

  ngOnDestroy(): void {
    this.bankSubscription.unsubscribe();
  }
}
