import {
    SET_USER_ENTITIES,
    GET_ENTITY_USERACCOUNTS,
    SELECT_USER,
    UNSELECT_USER,
    TOGGLE_FLAG_USER,
    SET_CREATE_MODE,
    TOGGLE_SELECT_USER,
    CREATE_ASSESSEE_PANEL,
    CLOSE_ASSESSEE_PANEL,
    CREATE_ASSESSEE_LEFT_PANEL
} from '../constants/actionTypes'

import { setAccountFlags, setAccountSelect } from './igreducer';
import { create } from 'jss';

const initialState = {
    entity: {},
    accounts: [],
    selectedUser: {},
    selectedEntity: {},
    detailType: 'all',
    flagAll: false,
    isCreate: false,
    isCreateAssesseeMode:false,
    createAssesseePanel:null,
    mode: 'review'
};

const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ENTITIES:
            if (!action.entities) {
                return state
            }
            return {...state,
                entity: action.entities
            };
        case GET_ENTITY_USERACCOUNTS:
            if (!action.accounts) {
                return state
            }
            return {...state,
                accounts: action.accounts
            };

        case SELECT_USER:
            if (!action.user && action.infoType) {
                return state
            }

            return {...state,
                selectedUser: action.user,
                detailType: action.infoType,
                mode: action.mode
            };

        case UNSELECT_USER:

            return {...state,
                selectedUser: {}
            };

        case TOGGLE_FLAG_USER:

            if (!action.list) {
                return state
            }

            return {...state,
                accounts: setAccountFlags(state.accounts, action.list)
            };

        case TOGGLE_SELECT_USER:

            if (!action.list) {
                return state
            }

            return {...state,
                accounts: setAccountSelect(state.accounts, action.list)
            };

        case SET_CREATE_MODE:

            return {...state,
                isCreate: true
            };
        case CREATE_ASSESSEE_PANEL:

            return {...state,
                isCreateAssesseeMode: true
            };
        case CLOSE_ASSESSEE_PANEL:

            return {...state,
                isCreateAssesseeMode: false
            };
        case CREATE_ASSESSEE_LEFT_PANEL:

            return {...state,
                createAssesseePanel: action.show,
                detailType: action.infoType,

        };

        default:
            return state
    }
};

export default currentUser;