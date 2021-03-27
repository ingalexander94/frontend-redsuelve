import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './reducers/ui/ui.reducer';
import * as fromPerson from './reducers/person/person.reducer';
import * as fromBank from './reducers/bank/bank.reducer';
import * as fromAccount from './reducers/account/account.reducer';

export interface AppState {
  ui: fromUI.AppState;
  person: fromPerson.AppState;
  bank: fromBank.AppState;
  account: fromAccount.AppState;
}

export const combineReducer: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  person: fromPerson.personReducer,
  bank: fromBank.bankReducer,
  account: fromAccount.accountReducer,
};
