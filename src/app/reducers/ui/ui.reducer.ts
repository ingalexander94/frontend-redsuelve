import * as fromUI from '../ui/ui.actions';

export interface AppState {
  loading: boolean;
}

const initState: AppState = {
  loading: false,
};

export const uiReducer = (
  state = initState,
  actions: fromUI.actions
): AppState => {
  switch (actions.type) {
    case fromUI.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case fromUI.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
