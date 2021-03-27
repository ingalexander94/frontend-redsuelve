import * as fromPerson from '../person/person.actions';
import Person from 'src/app/interfaces/Person';
import Account from 'src/app/interfaces/Account';

export interface AppState {
  persons: Person[];
  active: {
    person: Person;
    accounts: Account[];
  };
}

const initState: AppState = {
  persons: [],
  active: null,
};

export const personReducer = (
  state = initState,
  actions: fromPerson.actions
): AppState => {
  switch (actions.type) {
    case fromPerson.ADD_PERSON:
      return {
        ...state,
        persons: [actions.payload, ...state.persons],
      };
    case fromPerson.LOAD_PERSON:
      return {
        ...state,
        persons: [...actions.payload],
      };
    case fromPerson.ACTIVE_PERSON:
      return {
        ...state,
        active: {
          person: { ...actions.payload.person },
          accounts: [...actions.payload.accounts],
        },
      };

    case fromPerson.SET_ACTIVE_ACCOUNT:
      return {
        ...state,
        active: {
          person: { ...state.active.person },
          accounts: [...state.active.accounts, actions.payload],
        },
      };

    case fromPerson.UNSET_ACTIVE_ACCOUNT:
      return {
        ...state,
        active: {
          person: { ...state.active.person },
          accounts: state.active.accounts.filter(
            (account) => account._id !== actions.payload
          ),
        },
      };
    default:
      return state;
  }
};
