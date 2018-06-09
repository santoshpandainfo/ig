import axios from 'axios';

import {API_AUTH_ROOT, API_ROOT} from '../constants/defaultConfigs';

const getAuthClient = () => axios.create({
    baseURL: API_AUTH_ROOT,
    method: 'post'
});

const getAuthWithTokenClient = token => axios.create({
    baseURL: API_AUTH_ROOT,
    headers: {'Authorization': token}
});

const getClient = (j_username) => axios.create({
    baseURL: API_ROOT
});

const signIn = (email, password) => getAuthClient().post('/insightguru/api/assessee/signIn', {
    email,
    password
});

const resetPassword = (token, password) => getAuthClient().post('/insightguru/api/assessee/resetPassword', {
        token,
        password
});

const resetPasswordAuth = (token,oldPassword,newPassword) => getAuthWithTokenClient(token)
        .post(`/insightguru/api/assessee/resetPasswordAuth`,{
            oldPassword,
            newPassword
        });

const setUserEntities = (entityList, token) => getAuthWithTokenClient(token)
    .post('/insightguru/api/assessee/associates', {
        associateTags: entityList
});

const getEntityUsers = (token, associateTag, assesseeTag, pageRecords, pageNumber) => getAuthWithTokenClient(token)
        .get(`/insightguru/api/associate/assessees/${associateTag}/${assesseeTag}/${pageRecords}/${pageNumber}`);

const signOut = (token) => getAuthWithTokenClient(token)
        .post(`/insightguru/api/assessee/signOut`);

const getCountries = token => getAuthWithTokenClient(token)
    .get(`/insightguru/api/assessee/countries`);

const searchUserAccounts = (token, assesseeId, associateId, scanText) => getAuthWithTokenClient(token)
        .post(`/insightguru/api/assessees/scan/${assesseeId}/${associateId}/${scanText}`);

const getEntityGroups = (token, assesseeId, associateId) => getAuthWithTokenClient(token)
        .post(`/insightguru/api/assessees/groups/${associateId}/${assesseeId}`);

const getEntityRoles = (token, assesseeId, associateId) => getAuthWithTokenClient(token)
        .post(`/insightguru/api/assessees/roles/${associateId}/${assesseeId}`);

const getEntityGroupUsers = (token, assesseeId, associateId, groupId) => getAuthWithTokenClient(token)
    .post(`/insightguru/api/assessees/group/assessees/${groupId}/${associateId}/${assesseeId}`);

const getEntityRoleUsers = (token, assesseeId, associateId, roleId) => getAuthWithTokenClient(token)
    .post(`/insightguru/api/assessees/role/assessees/${roleId}/${associateId}/${assesseeId}`);


const getUserAccount = id => getClient()
    .post('/user/' + id);

const createAssessees = (token,userAccountId,entityAccountId,userAccountUI) => getAuthWithTokenClient(token)
    .post(`/insightguru/api/assessees/add`,{
        userAccountId,
        entityAccountId,
        userAccountUI
    });


module.exports = {
    signIn: signIn,
    resetPassword: resetPassword,
    resetPasswordAuth:resetPasswordAuth,
    signOut: signOut,
    searchUserAccounts: searchUserAccounts,
    getEntityUsers: getEntityUsers,
    getUserAccount: getUserAccount,
    getEntityGroups: getEntityGroups,
    getEntityRoles: getEntityRoles,
    getEntityRoleUsers: getEntityRoleUsers,
    getEntityGroupUsers: getEntityGroupUsers,
    setUserEntities: setUserEntities,
    getCountries: getCountries,
    createAssessees:createAssessees
};