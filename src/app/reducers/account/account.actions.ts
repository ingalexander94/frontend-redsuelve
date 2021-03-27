import { Action } from '@ngrx/store';
import Account from 'src/app/interfaces/Account';

export const ADD_ACCOUNT = '[ACCOUNT] Agregar Cuenta';
export const REMOVE_ACCOUNT = '[ACCOUNT] Eliminar Cuenta';
export const LOAD_ACCOUNT = '[ACCOUNT] Cargar Cuentas';

export class AddAccountAction implements Action {
  readonly type = ADD_ACCOUNT;
  constructor(public payload: Account) {}
}

export class RemoveAccountAction implements Action {
  readonly type = REMOVE_ACCOUNT;
  constructor(public payload: String) {}
}

export class LoadAccountAction implements Action {
  readonly type = LOAD_ACCOUNT;
  constructor(public payload: Account[]) {}
}

export type actions =
  | AddAccountAction
  | RemoveAccountAction
  | LoadAccountAction;
