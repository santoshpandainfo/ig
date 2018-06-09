import {
    TOGGLE_ASSESSEE_PANEL,
    TOGGLE_DEV_MODE,
    TOGGLE_MIDDLE,
    VIEW_SELF,
    TOGGLE_MEASURE,
    CLOSE_DEV_MODE,
    CURRENT_FLAG_MODE,
    CLOSE_MIDDLE,
    SET_SWITCH,
    TOGGLE_RIGHT
} from '../constants/actionTypes'

const initialState = {
    previousPanel: 'left',
    assessee: {
        panel: 'left',
        all: true,
        roles: false,
        managers: false,
        groups: false,
        nodes: false
    },
    assessment: {
        all: true,
        groups: false,
        managers: false,
        nodes: false
    },
    assignment: {
        all: true,
        groups: false,
        managers: false,
        nodes: false
    },
    associate: {
        all: true,
        roles: false,
        managers: false,
        groups: false,
        nodes: false
    },
    cryptospace:{},
    marketspace:{},
    workspace:{},
    storespace:{},
    node:{
        node: false
    },
    progress:{},
    dev: true,
    measure: 6,
    switch: true,
    middle: {
        assessee : false,
        assignment: false,
        assessment: false,
        associate: false,
        cryptospace: false,
        marketspace:false,
        workspace: false,
        storespace:false,
        node:false
    },
    right: {
        assessee : false,
        assignment: false,
        assessment: false,
        associate: false,
        cryptospace: false,
        marketspace: false,
        workspace: false,
        storespace: false,
        node : false
    },
    pane: 'left',
    flag : null,
    self: false
};

const view = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ASSESSEE_PANEL:
            if (!action.show) {
                return state
            }

            const setPanel = (assessee, show) => {
                if (typeof assessee !== 'object') return 'middle';
                    assessee.panel = show;
                    return assessee;
            }

            return {...state,
                previousPanel: state.assessee.panel === action.show ?
                    state.previousPanel : (state.assessee.panel || 'left'),
                assessee: setPanel(state.assessee, action.show),
                pane: action.show
            };

        case TOGGLE_DEV_MODE:

            return {...state,
                dev: action.show ? false : !state.dev
            }

        case VIEW_SELF:
            if (action.toggle === undefined) {
                return state
            }

            return {...state,
                self: action.toggle
            }

        case CLOSE_DEV_MODE:
            return {...state,
                dev: true
            }

        case CURRENT_FLAG_MODE:
            return {...state,
                flag: action.show
            }

        case SET_SWITCH:

            return {...state,
                switch: action.toggle
            }

        case TOGGLE_MEASURE:

            if (!action.count) {
                return state
            }

            return {...state,
                measure: action.count
            }

        case CLOSE_MIDDLE:

            return {...state,
                middle: {
                    assessee : false,
                    assignment: false,
                    assessment: false,
                    associate: false,
                    cryptospace: false,
                    marketspace:false,
                    workspace: false,
                    storespace:false,
                    node:false
                },
                switch: false
            }

        case TOGGLE_MIDDLE:

            if (!action.pane) {
                return state
            }

            const setMiddle = pane => {

                const middleState = {
                    assessee : false,
                    assignment: false,
                    assessment: false,
                    associate: false,
                    cryptospace: false,
                    marketspace:false,
                    workspace: false,
                    storespace:false,
                    node:false
                };

                if (middleState.hasOwnProperty(pane)) {
                    middleState[pane] = true;
                    return middleState

                }

                middleState.assessee = true;

                return middleState
            }

            const setMiddleType = (category, pane) => pane === 'assessee' ?
                    {
                        panel: 'middle',
                        all: category === 'all',
                        roles: category === 'roles',
                        managers: category === 'managers',
                        exchange: category === 'exchange',
                        groups: category === 'groups',
                        nodes: category === 'nodes'
                    } : pane === 'assessment' ? {
                        all: category === 'all',
                        roles: category === 'roles',
                        managers: category === 'managers',
                        progress: category === 'progress',
                        groups: category === 'groups',
                        nodes: category === 'nodes'
                    } : pane === 'assignment' ? {
                        all: category === 'all',
                        roles: category === 'roles',
                        managers: category === 'managers',
                        progress: category === 'progress',
                        groups: category === 'groups',
                        nodes: category === 'nodes'
                    } : pane === 'associate' ? {
                        all: category === 'all',
                        roles: category === 'roles',
                        managers: category === 'managers',
                        progress: category === 'progress',
                        groups: category === 'groups',
                        nodes: category === 'nodes'
                    } : pane === 'marketspace' ? {
                        } :
                    {
                        all: category === 'all',
                        roles: category === 'roles',
                        groups: category === 'groups',
                        nodes: category === 'nodes',

                    }

            state[action.pane] = setMiddleType(action.category, action.pane, state[action.pane])

            return {...state,
               middle: setMiddle(action.pane)
            }

        case TOGGLE_RIGHT:

            if (!action.pane) {
                return state
            }

            const setRight = pane => {

                const rightState = {
                    assessee : false,
                    assignment: false,
                    assessment: false,
                    associate: false,
                    cryptospace: false,
                    marketspace:false,
                    workspace: false,
                    storespace:false,
                    node:false
                };

                if (rightState.hasOwnProperty(pane)) {
                    rightState[pane] = true;
                    return rightState

                }

                rightState.assessee = true;

                return rightState
            }

            return {...state,
                right: setRight(action.pane)
            }

        default:
            return state
    }
};


export default view;