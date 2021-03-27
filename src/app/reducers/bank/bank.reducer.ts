import * as fromBank from '../bank/bank.actions';
import Bank from 'src/app/interfaces/Bank';

export interface AppState {
  banks: Bank[];
}

const initState: AppState = {
  banks: [],
};

export const bankReducer = (
  state = initState,
  actions: fromBank.actions
): AppState => {
  switch (actions.type) {
    case fromBank.ADD_BANK:
      return {
        ...state,
        banks: [actions.payload, ...state.banks],
      };

    case fromBank.LOAD_BANK:
      return {
        ...state,
        banks: [...actions.payload],
      };

    default:
      return state;
  }
};
