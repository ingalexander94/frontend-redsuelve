import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { showMessage } from 'src/app/helpers/alert';
import { AddBankAction } from 'src/app/reducers/bank/bank.actions';
import {
  FinishLoadingAction,
  StartLoadingAction,
} from 'src/app/reducers/ui/ui.actions';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styles: [],
})
export class BankComponent implements OnInit, OnDestroy {
  createFormBank() {
    return new FormGroup({
      nit: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      motto: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      register: new FormControl('', Validators.required),
    });
  }

  formBank: FormGroup;
  loading: boolean = false;
  today: Date = new Date();
  uiSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private bankService: BankService
  ) {
    this.formBank = this.createFormBank();
  }

  ngOnInit(): void {
    this.uiSubscription = this.store
      .select('ui')
      .subscribe(({ loading }) => (this.loading = loading));
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  async onSubmit() {
    this.store.dispatch(new StartLoadingAction());
    if (this.formBank.valid) {
      const data: any = await this.bankService.createBank(this.formBank.value);
      if (data.ok) {
        this.store.dispatch(new AddBankAction(data.bank));
        this.formBank.reset();
        showMessage('success', data.msg);
      } else {
        showMessage('error', data.msg);
      }
    }
    this.store.dispatch(new FinishLoadingAction());
  }

  get nit() {
    return this.formBank.get('nit');
  }

  get name() {
    return this.formBank.get('name');
  }

  get motto() {
    return this.formBank.get('motto');
  }

  get register() {
    return this.formBank.get('register');
  }
}
