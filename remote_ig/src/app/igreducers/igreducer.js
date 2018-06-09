import { combineReducers } from 'redux'

import currentUser from './user'
import search from './search'
import attributes from './attributes';
import view from './view';
import authenticate from './authenticate';

const rootReducer = combineReducers({
    currentUser,
    search,
    attributes,
    view,
    authenticate
});

export const setAccountFlags = (accounts, list) => {
    if (!Array.isArray(accounts) || !Array.isArray(list) || accounts.length === 0) return accounts;
    if (list.length === 0) {
        accounts.map(account => {
            account.flag = false;
        });
        return accounts;
    }
    return accounts.map(account => {
        let inList = false;
        list.forEach( id => {
            if (account._id === id) inList = true;
        });
        account.flag = inList;
        return account
    });
};

export const getUser = state => state.currentUser ? state.currentUser : {};

export const getSearch = state => state.search ? state.search : {};

export const getAttributes = state => state.attributes ? state.attributes : {};

export const getView = state => state.view ? state.view : {};

export const getAuthenticate = state => state.authenticate ? state.authenticate : {};

export const setAccountSelect = (accounts, list) => {
    if (!Array.isArray(accounts) || !Array.isArray(list) || accounts.length === 0) return accounts;
    if (list.length === 0) {
        accounts.map(account => {
            account.select = false;
        });
        return accounts;
    }
    return accounts.map(account => {
        let inList = false;
        list.forEach( id => {
            if (account._id === id) inList = true;
        });
        account.select = inList;
        return account
    });
};

export default rootReducer