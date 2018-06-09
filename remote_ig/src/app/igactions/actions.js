import user from '../middleware/user';
import * as types from '../constants/actionTypes'

const setUserEntities = entities => ({
    type: types.SET_USER_ENTITIES,
    entities
});

const setToken = token => ({
    type: types.SET_TOKEN,
    token
})

const setCountries = list => ({
    type: types.SET_COUNTRIES,
    list
})

const setReset = (reset, resetError) => ({
    type: types.SET_RESET,
    reset,
    resetError,
})

const setGroupsForEntity = list => ({
    type: types.SET_ENTITY_GROUPS,
    list
});

const setRolesForEntity = list => ({
    type: types.SET_ENTITY_ROLES,
    list
});

const getUserAccounts = accounts => ({
    type: types.GET_ENTITY_USERACCOUNTS,
    accounts
});

const showRoles = accounts => ({
    type: types.SHOW_ROLES
});

const toggleFlag = list => ({
    type: types.TOGGLE_FLAG,
    list
});

const toggleSwitch = toggle => ({
    type: types.SET_SWITCH,
    toggle
})

const toggleFlagUser = (list) => ({
    type: types.TOGGLE_FLAG_USER,
    list
});

const toggleFlagSearch = (list) => ({
    type: types.TOGGLE_FLAG_SEARCH,
    list
});

const toggleSelect = list => ({
    type: types.TOGGLE_SELECT,
    list
});

const toggleSelectUser = list => ({
    type: types.TOGGLE_SELECT_USER,
    list
});

const toggleSelectSearch = list => ({
    type: types.TOGGLE_SELECT_SEARCH,
    list
});

const setUserEntityMap = accountMap => ({
    type: types.SET_USER_ENTITY_MAP,
    accountMap
})

const selectUser = (user, infoType, mode) => ({
    type: types.SELECT_USER,
    user,
    infoType,
    mode
});

const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    user
});

const unselectUser = () => ({
    type: types.SELECT_USER
});

const showGroups = accounts => ({
    type: types.SHOW_GROUPS
});

const failedLogin = () => ({
    type: types.TAG_FAILED
})

const tagLoginSuccess = () => ({
    type: types.TAG_SUCCESSFUL
})

const forgotPassword = enable => ({
    type: types.FORGOT_PASSWORD,
    enable
})

const setFilteredList = (list, label) => ({
    type: types.SET_FILTER,
    list,
    label
});

const setSearchUserAccounts = (accounts, flagged) => ({
    type: types.SET_SEARCH_USERACCOUNTS,
    accounts,
    flagged,
    showSearch: true,
    isLoading: false
});

const setIsLoading = () => ({
    type: types.SHOW_LOADING
});

const endSearch = () => ({
    type: types.END_SEARCHLIST
});

const endFilter = () => ({
    type: types.END_FILTERLIST
});

const setCreate = show => ({
    type: types.SET_CREATE_MODE,
    show
});
const setCreateAssessee = show => ({
    type: types.CREATE_ASSESSEE_PANEL,
    show
});
const closeCreateAssessee = show => ({
    type: types.CLOSE_ASSESSEE_PANEL,
    show
});
const setCreateAssesseeLeft = (show,infoType) => ({
    type: types.CREATE_ASSESSEE_LEFT_PANEL,
    show,
    infoType
});

const toggleAssesseePanel = show => ({
    type: types.TOGGLE_ASSESSEE_PANEL,
    show
})

const toggleDevMode = show => ({
    type: types.TOGGLE_DEV_MODE,
    show
})

const closeDevMode = show => ({
    type: types.CLOSE_DEV_MODE,
    show
})

const currentFlgMode = show => ({
    type: types.CURRENT_FLAG_MODE,
    show
})

const toggleMiddle = (pane, category) => ({
    type: types.TOGGLE_MIDDLE,
    pane,
    category
})

const toggleRight = pane => ({
    type: types.TOGGLE_RIGHT,
    pane
})

const viewSelf = toggle => ({
    type: types.VIEW_SELF,
    toggle
})

const closeMiddle = () => ({
    type: types.CLOSE_MIDDLE
})

const setMeasureCount = count => ({
    type: types.TOGGLE_MEASURE,
    count
})

const setAuthenticated = auth => ({
    type: types.SET_AUTHENTICATED,
    auth
})

const setEntities = entities => ({
    type: types.SET_ENTITIES,
    entities
})

const setEntity = entity => ({
    type: types.SELECT_ENTITY,
    entity
})

const login = (email, password) => user
    .signIn(email, password)
    .then(resData => {

        if (!resData || !resData.data || resData.data.authenticated === false) {
            throw new Error('Login failed')
        }

        if (resData.status === 200 && resData.data.authenticated) {
            return resData
        }

        throw new Error('Login failed')
    })


const getEntityUsers = (token, entityId, userId, records, number) => {
    return user
        .getEntityUsers(token, entityId, userId, records, number)
        .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);
}

const searchAccounts = (token, assesseeId, entityId, text) => user.searchUserAccounts(token, assesseeId, entityId, text)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const getUserAccountDetails = (entityAccountId, userAccountId) => user.getUserAccount(entityAccountId, userAccountId)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : {});

const getEntityRoles = (token, assesseeId, entityId) => user.getEntityRoles(token, assesseeId, entityId)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const getEntityGroups = (token, assesseeId, entityId) => user.getEntityGroups(token, assesseeId, entityId)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const getEntityGroupUsers = (token, assesseeId, entityId, groupId) => user.getEntityGroupUsers(token, assesseeId, entityId, groupId)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const getEntityRoleUsers = (token, assesseeId, entityId, roleId) => user.getEntityRoleUsers(token, assesseeId, entityId, roleId)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const signIn = email => user.login(email)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const resetPassword = (token, password) => user.resetPassword(token, password)
    .then(resData => resData.data ? resData.data : false);

const resetPasswordAuth = (token,oldPassword,newPassword) => user.resetPasswordAuth(token,oldPassword,newPassword)
    .then(resData => resData.data ? resData.data : false);
const signOut = token => user.signOut(token)
    .then(resData => typeof resData === 'string' ?
        resData : resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const setEntityList = (entityList, token) => user.setUserEntities(entityList, token)
    .then(resData => resData.data ? resData.data : []);

const getUserAccount = id => user.getUserAccount(id)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

const setCountryList = token => user.getCountries(token)
    .then(resData => !resData.data ? [] : resData.data.message ? resData.data.message : [])

const createAssessees = (token,userAccountId,entityAccountId,userAccountUI) => user.createAssessees(token,userAccountId,entityAccountId,userAccountUI)
    .then(resData => resData.data && resData.data.responseObject ? resData.data.responseObject : []);

export const getEntities = (email, password) => dispatch => {

    let token = ''

    login(email, password)
    .then(tokenPackage => {
        dispatch(tagLoginSuccess());
        dispatch(setAuthenticated(true));

        token = tokenPackage && tokenPackage.data ?
            tokenPackage.data.token : '';

        if (!tokenPackage || !tokenPackage.data || !Array.isArray(tokenPackage.data.userAccountDetails)) throw new Error('Entities missing')

        dispatch(setToken(token))

        const getListOfEntities = accountDetails => accountDetails.map(detail => detail['entityAccountDetails']);

        dispatch(setUserEntityMap(tokenPackage.data.userAccountDetails));

        let entityList = getListOfEntities(tokenPackage.data.userAccountDetails),
            entityIdList = entityList.map(entity => entity['_id'].toString());

        setEntityList(entityIdList, token);

        dispatch(setEntities(entityList));
        dispatch(setCurrentUser({email}))

        return setCountryList(token)

        })
        .then(list => dispatch(setCountries(list)))
        .catch(err => dispatch(failedLogin()))
}

    const selectEntity = (entity, dispatch, cred) => dispatch(setEntity(entity));

    export const searchUserAccounts = searchText => (dispatch, getState) => {

        let flagged = getState() && getState().attributes ?
            getState().attributes.flagged : [];

        dispatch(setIsLoading());
        searchAccounts(
            getState().authenticate.token,
            getState().authenticate.currentUser['_id'],
            getState().authenticate.selectedEntity['_id'],searchText)
            .then(list => {
                list = (list && !Array.isArray(list)) ?
                    [list] : list;
                dispatch(setSearchUserAccounts(list, flagged))
            });
    };

    export const setEntityRoles = entityId => (dispatch, getState) => {

        getEntityRoles(
            getState().authenticate.token,
            getState().authenticate.currentUser['_id'],
            getState().authenticate.selectedEntity['_id']
            )
            .then(list => {
                list = list[0]
                list = (list && !Array.isArray(list)) ?
                    [list] : list;
                dispatch(setRolesForEntity(list))
                dispatch(toggleMiddle('assessee', 'roles'))
                dispatch(unselectUser())
            });
    };

    export const setEntityGroups = entityId => (dispatch, getState) => {
        getEntityGroups(
            getState().authenticate.token,
            getState().authenticate.currentUser['_id'],
            getState().authenticate.selectedEntity['_id'])
            .then(list => {
                list = list[0]
                list = (list && !Array.isArray(list)) ?
                    [list] : list;
                dispatch(setGroupsForEntity(list))
                dispatch(toggleMiddle('assessee', 'groups'))
                dispatch(unselectUser())
            });
    };

    export const setEntityGroupUsers = (groupId, label) => (dispatch, getState) => {
        getEntityGroupUsers(
            getState().authenticate.token,
            getState().authenticate.currentUser['_id'],
            getState().authenticate.selectedEntity['_id'],
            groupId)
            .then(list => dispatch(setFilteredList(list, label)));
    };

    export const setEntityRoleUsers = (roleId, label) => (dispatch, getState) => {
        getEntityRoleUsers(
            getState().authenticate.token,
            getState().authenticate.currentUser['_id'],
            getState().authenticate.selectedEntity['_id'],
            roleId)
            .then(list => dispatch(setFilteredList(list, label)));
    };

    export const signOutUser = () => (dispatch, getState) => {
        signOut(getState().authenticate.token)
            .then(status => {
                dispatch(setAuthenticated(false))
                dispatch(closeMiddle())
            })
    }

    export const showEntityGroups = entityId => dispatch => dispatch(showGroups());

    export const showEntityRoles = entityId => dispatch => dispatch(showRoles());

    export const selectUserAccount = (user, infoType, mode) => dispatch => {
        if (typeof user === 'object' && Object.keys(user).length > 0) dispatch(viewSelf(false));
        dispatch(selectUser(user, infoType, mode));
    }

    export const unselectUserAccount = () => dispatch => dispatch(unselectUser());

    const getFlagged = (list, selectList, show) => show ? _.unionBy(list, selectList) : _.difference(list, selectList);

    export const updateFlag = (list, show) => (dispatch, getState) => {

        let flagged = getState() && getState().attributes ?
            getState().attributes.flagged : [],
            flagList = getFlagged(flagged, list, show);

        dispatch(toggleFlag(flagList));
        dispatch(toggleFlagUser(flagList));
        dispatch(toggleFlagSearch(flagList));

    };

    const getSelected = (list, selectList, show) => show ? _.unionBy(list, selectList) : _.difference(list, selectList);

    export const updateSelect = (list, show) => (dispatch, getState) => {

        let selected = getState() && getState().attributes ?
            getState().attributes.selected : [],
            selectList = getSelected(selected, list, show);

        dispatch(toggleSelect(selectList));
        dispatch(toggleSelectUser(selectList));
        dispatch(toggleSelectSearch(selectList));

    };

    export const endSearchListing = () => dispatch => {
        dispatch(endFilter());
        dispatch(endSearch());
        dispatch(toggleMiddle('assessee', 'all'))
    };

export const setCreateMode = show => dispatch => {
    dispatch(setCreate(show));
}

export const resetAssesseePassword = (token, password) => dispatch => {
    resetPassword(token, password)
        .then(response =>{
            if (response === 'password reset successful') {
                dispatch(setReset(true, ''));
                window.location="http://development.insightguru.com"
                return
            }
            dispatch(setReset(false, response))
        })
        .catch(err => dispatch(setReset(false, 'Reset Failed')))
}
export const resetAssesseePasswordAuth = (oldPassword,newPassword) => (dispatch, getState) => {
    resetPasswordAuth(getState().authenticate.token, oldPassword,newPassword)
        .then(response =>{
            if (response === 'password reset successful') {
                dispatch(setReset(true, ''));
                signOut(getState().authenticate.token)
                .then(status => {
                dispatch(setAuthenticated(false))
                dispatch(closeMiddle())
            })
               // window.location="http://development.insightguru.com"
                return
            }
            dispatch(setReset(false, response))
        })
        .catch(err => dispatch(setReset(false, 'Reset Failed')))
}

export const setCreateAssesseeMode = show => dispatch => {
    dispatch(setCreateAssessee(show));
}
export const closeCreateAssesseeMode = show => dispatch => {
    dispatch(closeCreateAssessee(show));
}
export const setCreateAssesseeLeftPanel = (show,infoType) => dispatch => {
    dispatch(setCreateAssesseeLeft(show,infoType));
}

    export const toggleAssesseeMobile = show => dispatch => {
        dispatch(toggleAssesseePanel(show))
    }

    export const toggleDeveloperMode = () => dispatch => {
        dispatch(toggleDevMode())
    }

    export const closeDeveloperMode = () => dispatch => {
        dispatch(closeDevMode())
    }

    export const currentFlagMode = show => dispatch => {
        dispatch(currentFlgMode(show))
    }

    export const toggleMiddlePane = (pane, category) => dispatch => {

        dispatch(toggleMiddle(pane, category))

        if (pane !== 'assessee' && category !== 'distinct') dispatch(unselectUser())

    }

    export const toggleRightPane = pane => dispatch => dispatch(toggleRight(pane))

    export const viewCurrentUser = toggle => dispatch => dispatch(viewSelf(toggle))

    export const setMeasureCardCount = count => dispatch => {

        dispatch(toggleDevMode(true))
        dispatch(setMeasureCount(count))

    }

    export const setUserAuthenticated = auth => dispatch => dispatch(setAuthenticated(auth));

    export const manageForgotPassword = enable => dispatch => dispatch(forgotPassword(enable));

    export const closeMiddlePane = () => dispatch => dispatch(closeMiddle());

    export const tagLoginSuccessful = () => dispatch => dispatch(tagLoginSuccess())

    export const setUserEntity = entity => (dispatch, getState) => {

        dispatch(setEntity(entity))

        let token = getState().authenticate.token;
        let currentUserId = getState().authenticate.currentUser['_id'];

        getEntityUsers( token, entity['_id'], currentUserId, 100, 0)
            .then(accounts => dispatch(getUserAccounts(accounts)))
            .catch(err => console.error(err))

    }

    export const setSwitch = toggle => dispatch => {

        dispatch(toggleSwitch(toggle));

        if (!toggle) dispatch(closeMiddlePane())

    }
    export const createAssesseesAccount = (userAccountUI) => (dispatch, getState) => {
        let token = getState().authenticate.token;
        let currentUserId = getState().authenticate.currentUser['_id'];
        let selectedEntity = getState().authenticate.selectedEntity['_id'];
        let infoType = getState().currentUser.detailType;
        infoType = (infoType === 'key')? 'basic' : infoType;
        createAssessees(token,currentUserId,selectedEntity,userAccountUI)
            .then(user => {
                user = user[0]
                 getEntityUsers( token, selectedEntity, currentUserId, 100, 0)
                    .then(accounts => dispatch(getUserAccounts(accounts)))
                    .catch(err => console.error(err))
                        dispatch(toggleMiddle('assessee', 'all'))
                        dispatch(selectUser(user, infoType, 'revise'));
                        dispatch(toggleAssesseePanel('right'));
                        dispatch(setCreate());                
            });
    };