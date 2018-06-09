import {
    SET_SEARCH_USERACCOUNTS,
    END_SEARCHLIST,
    SHOW_LOADING,
    TOGGLE_FLAG_SEARCH,
    TOGGLE_SELECT_SEARCH
} from '../constants/actionTypes'

import { setAccountFlags, setAccountSelect } from './igreducer';

const initialState = {
    userAccounts: [],
    showSearch: false,
    isLoading: false
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_USERACCOUNTS:
            if (!action.accounts) {
                return state
            }

            return {...state,
                userAccounts: setAccountFlags(action.accounts, action.flagged),
                showSearch: action.showSearch,
                isLoading: action.isLoading
            };

        case END_SEARCHLIST:
            return {...state,
                showSearch: false
            };

        case SHOW_LOADING:
            return {...state,
                isLoading: true
            };

        case TOGGLE_FLAG_SEARCH:

            if (!action.list) {
                return state
            }

            return {...state,
                userAccounts: setAccountFlags(state.userAccounts, action.list)
            };

        case TOGGLE_SELECT_SEARCH:

            if (!action.list) {
                return state
            }

            return {...state,
                userAccounts: setAccountSelect(state.userAccounts, action.list)
            };

        default:
            return state
    }
};

export default search;