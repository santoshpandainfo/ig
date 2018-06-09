import {
    SET_ENTITY_GROUPS,
    SET_ENTITY_ROLES,
    HIDE_ROLES,
    HIDE_GROUPS,
    SHOW_ROLES,
    SHOW_GROUPS,
    SET_FILTER,
    END_FILTERLIST,
    TOGGLE_FLAG,
    TOGGLE_SELECT,
    SET_COUNTRIES
} from '../constants/actionTypes'
import { setAccountFlags, setAccountSelect } from './igreducer';

const initialState = {
    groups: [],
    roles: [],
    showGroups: false,
    showRoles: false,
    filtered: {
        show: false,
        list: [],
        label: ''
    },
    flagged: [],
    selected: [],
    countries: []
};

const attributes = (state = initialState, action) => {
    switch (action.type) {
        case SET_ENTITY_GROUPS:
            if (!action.list || !Array.isArray(action.list)) {
                return state
            }
            return {...state,
                groups: action.list,
                showGroups: true,
                showRoles: false,
                filtered: {
                    show: false,
                    list: [],
                    label: ''
                }
            };

        case SET_ENTITY_ROLES:
            if (!action.list) {
                return state
            }
            return {...state,
                roles: action.list,
                showRoles: true,
                showGroups: false,
                filtered: {
                    show: false,
                    list: [],
                    label: ''
                }
            };

        case SET_FILTER:
            if (!action.list || !action.label) {
                return state
            }
            return {...state,
                filtered: {
                    show: true,
                    list: setAccountFlags(action.list, state.flagged),
                    label: action.label
                },
                showRoles: false,
                showGroups: false,
            };

        case HIDE_ROLES:
            return {...state,
                showRoles: false
            };

        case SET_COUNTRIES:

            if (!Array.isArray(action.list) || action.list.length === 0) return state;

            return {...state,
                countries: action.list
            };

        case HIDE_GROUPS:
            return {...state,
                showRoles: false
            };

        case SHOW_ROLES:
            return {...state,
                showRoles: false
            };

        case SHOW_GROUPS:
            return {...state,
                showRoles: false
            };

        case END_FILTERLIST:

            return {...state,
                filtered: {
                    show: false
                },
                showRoles: false,
                showGroups: false,
            };

        case TOGGLE_FLAG:

            if (!Array.isArray(action.list)) {
                return state
            }

            return {...state,
            flagged: action.list,
                filtered: {
                list: setAccountFlags(state.filtered.list, action.list)
                }
            };

        case TOGGLE_SELECT:

            if (!Array.isArray(action.list)) {
                return state
            }

            return {...state,
                selected: action.list,
                filtered: {
                    list: setAccountSelect(state.filtered.list, action.list)
                }
            };

        default:
            return state
    }
};

export default attributes;