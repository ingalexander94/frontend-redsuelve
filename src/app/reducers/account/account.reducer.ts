import * as fromAccount from '../account/account.actions';
import Account from 'src/app/interfaces/Account';

export interface AppState {
  accounts: Account[];
}

const initState: AppState = {
  accounts: [],
};

export const accountReducer = (
  state = initState,
  actions: fromAccount.actions
): AppState => {
  switch (actions.type) {
    case fromAccount.ADD_ACCOUNT:
      return {
        ...state,
        accounts: [actions.payload, ...state.accounts],
      };

    case fromAccount.REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(
          (account) => account._id !== actions.payload
        ),
      };

    case fromAccount.LOAD_ACCOUNT:
      return {
        ...state,
        accounts: [...actions.payload],
      };

    default:
      return state;
  }
};
