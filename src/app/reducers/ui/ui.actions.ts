import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Iniciar Carga';
export const FINISH_LOADING = '[UI] Finalizar Carga';

export class StartLoadingAction implements Action {
  readonly type = START_LOADING;
  constructor() {}
}

export class FinishLoadingAction implements Action {
  readonly type = FINISH_LOADING;
  constructor() {}
}

export type actions = StartLoadingAction | FinishLoadingAction;
