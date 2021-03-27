import { Action } from '@ngrx/store';
import Account from 'src/app/interfaces/Account';
import Person from 'src/app/interfaces/Person';

export const ADD_PERSON = '[PERSON] Agregar Persona';
export const LOAD_PERSON = '[PERSON] Cargar Personas';
export const ACTIVE_PERSON = '[PERSON] Activar Persona';
export const SET_ACTIVE_ACCOUNT = '[PERSON] Activar Cuenta';
export const UNSET_ACTIVE_ACCOUNT = '[PERSON] Desactivar Cuenta';

export class AddPersonAction implements Action {
  readonly type = ADD_PERSON;
  constructor(public payload: Person) {}
}

export class LoadPersonAction implements Action {
  readonly type = LOAD_PERSON;
  constructor(public payload: Person[]) {}
}

export class ActivePersonAction implements Action {
  readonly type = ACTIVE_PERSON;
  constructor(public payload: { person: Person; accounts: Account[] }) {}
}

export class SetActiveAccountAction implements Action {
  readonly type = SET_ACTIVE_ACCOUNT;
  constructor(public payload: Account) {}
}

export class UnsetActiveAccountAction implements Action {
  readonly type = UNSET_ACTIVE_ACCOUNT;
  constructor(public payload: String) {}
}

export type actions =
  | AddPersonAction
  | LoadPersonAction
  | ActivePersonAction
  | SetActiveAccountAction
  | UnsetActiveAccountAction;
