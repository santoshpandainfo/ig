import _ from 'lodash'
import React from 'react'
import {render} from 'react-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import pathToRegexp from 'path-to-regexp'
import MainHeader from './containers/mainHeader'
import ForgotCredential from './containers/forgotCredentials'
import rootReducer from './igreducers/igreducer'

injectTapEventPlugin();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

const theme = createMuiTheme();

render(
    <Router>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <div style={{height: '100%'}}>
                <Route exact path="/" component={MainHeader}/>
                <Route exact path="/resetPassword" component={ForgotCredential}/>
                </div>
            </MuiThemeProvider>
        </Provider>
    </Router>
    ,
    document.getElementById('app')
);
