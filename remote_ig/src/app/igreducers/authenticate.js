import {
    SET_AUTHENTICATED,
    TAG_FAILED,
    TAG_SUCCESSFUL,
    SET_ENTITIES,
    SELECT_ENTITY,
    FORGOT_PASSWORD,
    SET_CURRENT_USER,
    SET_USER_ENTITY_MAP,
    SET_TOKEN,
    SET_RESET
} from '../constants/actionTypes'

const initialState = {
    token: '',
    entities: [],
    userEntityMap: [],
    selectedEntity: {},
    currentUser: {},
    passwordReset: false,
    loggedIn: false,
    forgot: false,
    resetError: '',
    attemptFailed: false
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:

            return typeof action.auth === 'undefined' || !action.auth ? {
                ...state,
                token: '',
                entities: [],
                userEntityMap: [],
                selectedEntity: {},
                currentUser: {},
                loggedIn: false,
                forgot: false,
                attemptFailed: false
            } : {
                ...state,
                loggedIn: true
            }

        case TAG_FAILED:

            return {...state,
                attemptFailed: true
            };

        case TAG_SUCCESSFUL:

            return {...state,
                attemptFailed: false
            };

        case SET_RESET:

            return {...state,
                passwordReset: action.reset || false,
                resetError: action.resetError || ''
            }

        case SET_TOKEN:

            if (!action.token) {
                return state
            }

            return {...state,
                token: action.token || ''
            }

        case SET_ENTITIES:

            if (!action.entities) {
                return state
            }

            return {...state,
                entities: action.entities
            }

        case SET_CURRENT_USER:

            if (!action.user) {
                return state
            }

            return {...state,
                currentUser: action.user
            }

        case FORGOT_PASSWORD:

            if (!action.enable) {
                return state
            }

            return {...state,
                forgot: action.enable
            }

        case SET_USER_ENTITY_MAP:

            if (!action.accountMap || !Array.isArray(action.accountMap)) {
                return state
            }

            return {...state,
                userEntityMap: action.accountMap
            }

        case SELECT_ENTITY:

            if (!action.entity) {
                return state
            }

            const getMappedUser = () => state.userEntityMap.find(
                item => item.entityAccountDetails['_id'] === action.entity['_id']
            )['userAccountDetails']

            return {...state,
                selectedEntity: action.entity,
                currentUser: getMappedUser(action.entity) || {}
            };

        default:
            return state
    }
};

export default search;