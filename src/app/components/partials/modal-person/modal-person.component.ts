import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { showMessage } from 'src/app/helpers/alert';
import Bank from 'src/app/interfaces/Bank';
import Person from 'src/app/interfaces/Person';
import { SetActiveAccountAction } from 'src/app/reducers/person/person.actions';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-modal-person',
  templateUrl: './modal-person.component.html',
  styles: [],
})
export class ModalPersonComponent implements OnInit, OnDestroy {
  accountSubscription: Subscription = new Subscription();
  bankSubscription: Subscription = new Subscription();
  person: Person;
  banks: Bank[];
  bankId: String = '';
  constructor(
    private store: Store<AppState>,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountSubscription = this.store
      .select('person')
      .subscribe(({ active }) => {
        this.person = active ? active.person : null;
      });
    this.bankSubscription = this.store
      .select('bank')
      .subscribe(({ banks }) => (this.banks = banks));
  }

  ngOnDestroy(): void {
    this.accountSubscription.unsubscribe();
    this.bankSubscription.unsubscribe();
  }

  async createAccount() {
    if (this.bankId) {
      const data: any = await this.accountService.createAccount(
        this.bankId,
        this.person._id
      );
      if (data.ok) {
        this.store.dispatch(new SetActiveAccountAction(data.account));
        showMessage('success', data.msg);
      } else {
        showMessage('error', data.msg);
      }
    } else {
      showMessage('warning', 'Seleccione un banco');
    }
  }
}
