import { Action } from '@ngrx/store';
import Bank from 'src/app/interfaces/Bank';

export const ADD_BANK = '[BANK] Agregar Banco';
export const LOAD_BANK = '[BANK] Cargar Bancos';

export class AddBankAction implements Action {
  readonly type = ADD_BANK;
  constructor(public payload: Bank) {}
}

export class LoadBankAction implements Action {
  readonly type = LOAD_BANK;
  constructor(public payload: Bank[]) {}
}

export type actions = AddBankAction | LoadBankAction;
