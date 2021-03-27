import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { LoadBankAction } from './reducers/bank/bank.actions';
import { BankService } from './services/bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private store: Store<AppState>,
    private bankService: BankService
  ) {
    this.loadBanks();
  }

  async loadBanks() {
    const data: any = await this.bankService.loadBank();
    if (data.ok) {
      this.store.dispatch(new LoadBankAction(data.banks));
    }
  }
}
