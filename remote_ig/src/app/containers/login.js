import React from 'react'
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import classNames from 'classnames'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import LoginIcon from 'material-ui-icons/Send'
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import ArrowBack from 'material-ui-icons/ArrowBack';
import IconButton from 'material-ui/IconButton';
import ArrowForward from 'material-ui-icons/ArrowForward'
import Clear from 'material-ui-icons/Clear';


import LabelIcon from '../components/labelIcon'
import {setUserAuthenticated} from "../igactions/actions";

class Email extends React.Component {
    render() {
        let {classes, igLoginId, handleChange, missedLoginId,errors,resetComplete} = this.props;
        return (
            <div className={classNames(classes.PopupFormBox, classes.loginSpacer)}>
                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                    <InputLabel htmlFor="email" className={classes.topLabelFont}>{'email address'}</InputLabel>
                    <Input className={classes.textField}
                           id="email"
                           value={igLoginId}
                           onChange={handleChange('igEmail')}
                           autoComplete="off"
                    />
                    <FormHelperText className={classNames(classes.helperText)}>{errors["email"]}</FormHelperText>
                </FormControl>
                {(resetComplete)?
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <FormHelperText className={classNames(classes.setGreenRight)}>{'emailed credentials !'}</FormHelperText>
                    </FormControl> :null }
            </div>
        )
    }
}

class SignIn extends React.Component {

    handleChange = (login, getEntities, tagSuccess,failed) => event => {
        if (failed) tagSuccess()
        event.key === 'Enter' ? login(getEntities)() : null
    }

    render() {
        let {classes, igLoginId, handleChange, missedLoginId, handleLogin, getEntities,errors} = this.props;
        return (
                <div className={classNames(classes.PopupFormBox, classes.loginSpacer)}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="sign-in" className={classes.topLabelFont}>{'sign-in'}</InputLabel>
                        <Input className={classes.textField}
                               id="sign-in"
                               autoComplete="off"
                               value={igLoginId}
                               onKeyPress={this.handleChange(handleLogin, getEntities, this.props.tagLoginSuccessful, this.props.attemptFailed)}
                               onChange={handleChange('igLoginId')}
                        />
                        <FormHelperText className={classes.helperText}>{errors["signIn"]}</FormHelperText>
                    </FormControl>
                </div>
        )
    }
}

class Password extends React.Component {

    handleChange = (login, getEntities, tagSuccess, failed) => event => {
        if (failed) tagSuccess()
        event.key === 'Enter' ? login(getEntities)() : null
    }

    render() {
        let {classes, igPassword, handleChange, missedPassword, handleLogin, getEntities,errors} = this.props;
        return (
            <div className={classNames(classes.PopupFormBox, classes.loginSpacer)}>
                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                    <InputLabel htmlFor="password" className={classes.topLabelFont}>{'password'}</InputLabel>
                    <Input className={classes.textField}
                           id="password"
                           type="password"
                           autoComplete="off"
                           value={igPassword}
                           onKeyPress={this.handleChange(handleLogin, getEntities, this.props.tagLoginSuccessful, this.props.attemptFailed)}
                           onChange={handleChange('igPassword')}
                    />
                    <FormHelperText className={classes.helperText}>{errors["password"]}</FormHelperText>
                </FormControl>
            </div>
        )
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        //props.getEntities( 'indranil.g@mobinexttech.com', 'mobinext');
    }

    state = {
        igLoginId: '',
        igPassword: '',
        igEmail: '',
        missedLoginId: false,
        missedPassword: false,
        forgot: false,
        resetComplete: false,
        resetCompletePanel:false,
        errors:{
            email:null,
            signIn:null,
            password:null
        }
    }

    handleChange = prop => event => {
        let errors = this.state.errors;
        this.setState({[prop]: event.target.value})
        if (prop === 'igLoginId' || prop === 'igPassword') this.loginInProgress = false
        if(prop === 'igEmail') errors['email'] = '';
        if(prop === 'igLoginId') errors['signIn'] = '';
        if(prop === 'igPassword') errors['password'] = '';
        this.setState({errors});

    }

    loginInProgress = false;

    handleForgot = (callForgotpassword, view) => () => {
        this.setState({
            forgot: view
        })
    }

    allowLogin = () => this.state.forgot ?
        this.state.igEmail : ( this.state.igPassword && this.state.igLoginId )

    returnToLogin = () =>{ this.setState({
        forgot: false,
        resetComplete: false,
        resetCompletePanel:false,
        igEmail:'',
        igLoginId:'',
        igPassword:''
    })
        let temp = this.state.errors;
        temp['signIn'] = '';
        temp['password'] = '';
        this.setState({ temp });
        this.loginInProgress = false;
    }
    handleValidation = (prop,field)  => {
        let errors = this.state.errors;
        let formIsValid = true;
        switch(field){
            case "email":
                if (!prop) {
                    formIsValid = false;
                    errors["email"] = "This information is required.";
                }
                else if (typeof prop !== "undefined") {
                    let lastAtPos = prop.lastIndexOf('@');
                    let lastDotPos = prop.lastIndexOf('.');

                    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && prop.indexOf('@@') == -1 && lastDotPos > 2 && (prop.length - lastDotPos) > 2)) {
                        formIsValid = false;
                        errors["email"] = "This email address is invalid.";
                    }
                    else if (prop&&(lastAtPos < lastDotPos && lastAtPos > 0 && prop.indexOf('@@') == -1 && lastDotPos > 2 && (prop.length - lastDotPos) > 2)) {
                        formIsValid = true;
                        errors["email"] = null;
                    }
                }
                break;
            case "signIn":
                if (!prop) {
                    formIsValid = false;
                    errors["signIn"] = "This information is required.";
                }
                else if (typeof prop !== "undefined") {
                    let lastAtPos = prop.lastIndexOf('@');
                    let lastDotPos = prop.lastIndexOf('.');

                    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && prop.indexOf('@@') == -1 && lastDotPos > 2 && (prop.length - lastDotPos) > 2)) {
                        formIsValid = false;
                        errors["signIn"] = "This information is invalid.";
                    }
                    else if (prop&&(lastAtPos < lastDotPos && lastAtPos > 0 && prop.indexOf('@@') == -1 && lastDotPos > 2 && (prop.length - lastDotPos) > 2)) {
                        formIsValid = true;
                        errors["signIn"] = null;
                    }
                }
                break;
            case "password":
                if (!prop) {
                    formIsValid = false;
                    errors["password"] = "This information is required.";
                }
                break;
            default:
                break;
        }
        this.setState({errors});
        return formIsValid;

    }
    handleLogin = getEntities => () => {
        let validation = false;
        let email = '';
        let password = '';
        if (this.state.forgot) {
            validation = this.handleValidation(this.state.igEmail,'email');
            if(validation){
                this.setState({
                    resetComplete: true
                })
                this.setState({resetCompletePanel:true})
            }
            return;
        }

        let denyLogin = false

        if (!this.state.igLoginId) {
            this.setState({ missedLoginId : true})
            validation = this.handleValidation(this.state.igLoginId,'signIn');
            if(validation){
                denyLogin = false
            } else{
                denyLogin = true
            }
        } else {
            this.setState({ missedLoginId : false})
            validation = this.handleValidation(this.state.igLoginId,'signIn');
            if(validation){
                denyLogin = false
            } else{
                denyLogin = true
            }
        }

        if (!this.state.igPassword) {
            denyLogin = true
            this.setState({ missedPassword : true})
            validation = this.handleValidation(this.state.igPassword,'password');
        } else {
            this.setState({ missedPassword : false})
            validation = this.handleValidation(this.state.igPassword,'password');
        }

        if (!denyLogin) {
            this.loginInProgress = true
            getEntities( this.state.igLoginId, this.state.igPassword)
        }
    }

    render() {

        let {classes, getEntities, setUserAuthenticated, authenticate, forgotPassword} = this.props;
        let errors = this.state.errors;

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
                            {!this.state.forgot ?
                                <div className={classes.unitFlex}></div>:null}

                            { (this.state.forgot && !this.state.resetCompletePanel) ? <LabelIcon
                                classes={classes}
                                iconLabelStyle={classes.noShadowDisabled}
                                iconButtonStyle={!this.state.forgot ? classes.noShadowDisabled : classes.noShadowDisabled}
                                className={classes.goIcon}>
                                <div
                                    className={classNames(classes.noShadowEnabled,classes.revertedImg)}
                                    onClick={this.returnToLogin}
                                >
                                    <LoginIcon/>
                                </div>
                            </LabelIcon>:null}
                            {(this.state.resetCompletePanel)?
                                <LabelIcon
                                    classes={classes}
                                    iconMainStyle={classes.authIconBox}
                                    iconLabelStyle={classes.noShadowDisabled}
                                    iconButtonStyle={!this.allowLogin() ? classes.noShadowDisabled : classes.noShadowDisabled}
                                >
                                    <div className={classes.noShadowEnabled} onClick={this.returnToLogin}> <Clear/> </div>
                                </LabelIcon>
                                :
                                <LabelIcon
                                    classes={classes}
                                    iconMainStyle={classes.authIconBox}
                                    iconLabelStyle={classes.noShadowDisabled}
                                    iconButtonStyle={!this.allowLogin() ? classes.noShadowDisabled : classes.noShadowDisabled}
                                >
                                    <div
                                        className={classes.noShadowEnabled}
                                        onClick={this.handleLogin(getEntities)}
                                    >
                                        <LoginIcon/>
                                    </div>
                                </LabelIcon>
                            }
                        </div>
                    </Paper>

                    { (this.state.forgot) ?

                        <div className={classes.authInputBox}>

                        <Email igEmail={this.state.igEmail}
                        handleChange={this.handleChange}
                        errors = {errors}
                        resetComplete = {this.state.resetComplete}
                        classes={classes}/>

                        </div> : <div className={classes.authInputBox}>

                        <SignIn missedLoginId={this.state.missedLoginId}
                        tagLoginSuccessful={this.props.tagLoginSuccessful}
                        igLoginId={this.state.igLoginId}
                        handleChange={this.handleChange}
                        errors = {errors}
                        classes={classes}
                        handleLogin={this.handleLogin}
                        getEntities={getEntities}
                        attemptFailed={authenticate.attemptFailed}
                        />

                        <Password missedPassword={this.state.missedPassword}
                        tagLoginSuccessful={this.props.tagLoginSuccessful}
                        igPassword={this.state.igPassword}
                        handleChange={this.handleChange}
                        errors = {errors}
                        classes={classes}
                        handleLogin={this.handleLogin}
                        getEntities={getEntities}
                        attemptFailed={authenticate.attemptFailed}
                        />

                        <div className={classes.forgotBox}>
                        <div className={classes.forgotText}>
                        <div className={classes.nameText}>
                        <span className={classNames(classes.clickable, classes.setDefaultSecondary)}
                        onClick={this.handleForgot(forgotPassword, true)}>
                        forgot credentials !
                        </span>
                        </div>
                        {this.loginInProgress ?
                            <span className={this.loginInProgress && !authenticate.attemptFailed ?
                                classes.setGreenRight : classes.errorTextPwd}> {
                                this.loginInProgress && !authenticate.attemptFailed ?
                                    'in progress !' : !this.state.loginInProgress && authenticate.attemptFailed ?
                                    'incorrect credentials !' : ''} </span>
                            :null}
                        </div>
                        </div>
                        </div> }

                        </div>
                        </div>
                        );
                        }
                    }

                    export default Login;