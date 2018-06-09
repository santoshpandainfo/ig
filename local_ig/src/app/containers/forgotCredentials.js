import React from 'react'
import PropTypes from 'prop-types'
import LoginIcon from 'material-ui-icons/Send'
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles'
import {connect} from 'react-redux'
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
const queryString = require('querystring');

import GlobalStyles from './globalStyles'
import LabelIcon from '../components/labelIcon';
import classNames from 'classnames';

import {resetAssesseePassword} from '../igactions/actions'
import {getAuthenticate} from "../igreducers/igreducer";

class ForgotCredential extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        igLoginId: '',
        igPassword: '',
        missedLoginId: false,
        missedPassword: false,
        revisedPassword: '',
        confirmRevised: '',
        failsMatch: false
    }

    loginInProgress = false

    handleManage = callForgotpassword => () => callForgotpassword(true)

    handleSubmit = (formPasswords, reset) => event => {
        if (event.key === 'Enter') {
            formPasswords.revisedPassword === formPasswords.confirmRevised ?
                this.setState({failsMatch : false}) : this.setState({failsMatch : true})
            let queryObject = queryString.parse(window.location || window.location.search ?
                window.location.search : { token: '' })
            if (queryObject['?token']) reset(queryObject['?token'], formPasswords.confirmRevised)
        }
    }

    handleChange = field => event => this.setState({[field] : event.target.value})

    render() {

        let { resetAssesseePassword, classes, passwordReset, resetError } = this.props;
        let {revisedPassword, confirmRevised , failsMatch} = this.state;

        return (
            <div className={classes.authCover}>
                <div className={classes.authBody}>
                    <Paper className={classes.loginTitle}>
                        <div className={classes.authImgLogo}>
                            <div className={classes.logoImgDiv}>
                                <img className={classes.authImg}
                                     src="resources/images/iglogo1.png">
                                </img>
                            </div>
                        </div>
                    </Paper>
                    { !passwordReset && resetError ? <div style={{padding: '1em'}}>
                        {resetError}
                    </div> : <div className={classes.authInputBox}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBoxNew)}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="revisedPassword"
                                        label="new password"
                                        type="password"
                                        value={this.state.revisedPassword}
                                        onKeyPress={this.handleSubmit(this.state, resetAssesseePassword)}
                                        onChange={this.handleChange('revisedPassword', this.state)}
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}></FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormBoxNew)}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="revisedPasswordConfirm"
                                        label="confirm new password"
                                        type="password"
                                        value={this.state.confirmRevised}
                                        onKeyPress={this.handleSubmit(this.state, resetAssesseePassword)}
                                        onChange={this.handleChange('confirmRevised', this.state)}
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <br/>
                                <FormHelperText className={classes.helperText}>{
                                    this.state.failsMatch ? 'passwords do not match' : null
                                }</FormHelperText>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

ForgotCredential.propTypes = {
    resetAssesseePassword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    ...getAuthenticate(state)
});

export default withStyles(
    GlobalStyles, {withTheme: true})(
    connect(
        mapStateToProps,
        {
            resetAssesseePassword
        }
    )(ForgotCredential));