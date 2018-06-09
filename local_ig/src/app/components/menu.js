import React from 'react';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Menu, { MenuItem } from 'material-ui/Menu';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import Lightbox from 'react-image-lightbox';
import PopupComponent from '../components/popup';
import Person from 'material-ui-icons/Person';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
// import Visibility from 'material-ui/icons/Visibility';
// import VisibilityOff from 'material-ui/icons/VisibilityOff';


const images = [
    '/resources/images/steve.jpg'];

class IGMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            fields: {
                currentPassword: '',
                revisedPassword: '',
                revisedPasswordConfirm: '',
            },
            errors: {
                currentPassword: null,
                revisedPassword: null,
                revisedPasswordConfirm: null,

            }
        };
    }
    state = {
        anchorEl: null,
        open: false,
        openMobile: false,
        password: false
    };
    handleValidation = prop => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = false;
        let isValiadCurrentPassword = true,
            isValiadRevisedPassword = true,
            isValiadRevisedPasswordConfirm = true;
        let revisedPassword,revisedPasswordConfirm;
        var result = Object.keys(prop).forEach(function (key) {
            if (key == 'currentPassword') {
                if (!(prop[key])) {
                    isValiadCurrentPassword = false;
                    errors["currentPassword"] = "This information is required.";
                } else{
                    isValiadCurrentPassword = true;
                    errors["currentPassword"] = null;
                }
            }
            if (key == 'revisedPassword') {
                if (!(prop[key])) {
                    isValiadRevisedPassword = false;
                    errors["revisedPassword"] = "This information is required.";
                } else{
                    revisedPassword = prop[key];
                    isValiadRevisedPassword = true;
                    errors["revisedPassword"] = null;
                }
            }
            if (key == 'revisedPasswordConfirm') {
                if (!(prop[key])) {
                    isValiadRevisedPasswordConfirm = false;
                    errors["revisedPasswordConfirm"] = "This information is required.";
                } else{
                    revisedPasswordConfirm = prop[key];                    
                    isValiadRevisedPasswordConfirm = true;
                    errors["revisedPasswordConfirm"] = null;
                }
            }
        });
        this.setState({ errors });
        if(isValiadCurrentPassword && isValiadRevisedPassword && isValiadRevisedPasswordConfirm){
            if(revisedPassword  == revisedPasswordConfirm){
                formIsValid =true;
            }else{
                errors["revisedPasswordConfirm"] = "This information is invalid.";
            }            
        } 
        return formIsValid;

    }
    formSubmit = (type) => () => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        var vaildation = false;
        switch (type) {
            case "password":
                var obj = {
                    currentPassword: '',
                    revisedPassword: '',
                    revisedPasswordConfirm: '',
                };
                obj.currentPassword = document.getElementById("currentPassword").value;
                obj.revisedPassword = document.getElementById("revisedPassword").value;
                obj.revisedPasswordConfirm = document.getElementById("revisedPasswordConfirm").value;
                fields['currentPassword'] = obj.currentPassword;
                fields['revisedPassword'] = obj.revisedPassword;
                fields['revisedPasswordConfirm'] = obj.revisedPasswordConfirm;
                this.setState({ fields });
                vaildation = this.handleValidation(obj);
                if (vaildation) {
                    this.props.resetAssesseePasswordAuth(obj.currentPassword,obj.revisedPassword);
                    let temp = {};
                    temp['password'] = false;
                    this.setState(temp);
                    Object.keys(fields).forEach(function (key, index) {
                        fields[key] = '';
                    });
                    Object.keys(errors).forEach(function (key, index) {
                        errors[key] = '';
                    });
                }
                break;
            default:
                break;
        }
    }

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'open',
            'openMobile',
            'password'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        temp.anchorEl = panel;
        return temp
    };

    handleClickDiag = prop => event => {
        let { listCardsPanel } = this.props;
        this.setState(this.change(prop, listCardsPanel));
    };

    handleCloseDiag = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    handleClosePassword = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
        let errors = this.state.errors;
        Object.keys(errors).forEach(function(key,index) {
            errors[key]='';
            });
        this.setState({errors});
    };
    handleClickOpen = () => {
        this.setState({ openMobile: true });
    };

    handleClose = () => {
        this.setState({ openMobile: false });
    };
    handleLightboxClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        const { classes, userName, userEmail, currentEntity } = this.props;
        const sessionUserProfile = false;

        return (
            <div>
                <div className={classes.dashContainer}>
                    <Hidden only="xs">
                        <div
                            onClick={this.handleClick}
                            className={classNames(classes.labelHeader, classes.deskDiv)}>

                            {currentEntity && Object.keys(currentEntity).length > 0 ? userName : ''}

                            {currentEntity && Object.keys(currentEntity).length > 0 ? <br /> : null}

                            {userEmail}

                        </div>

                    </Hidden>
                    <div className={classes.layoutDiv}>
                        <div className={classes.flexForSignIn}>
                            {(sessionUserProfile) ?
                                <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={() => this.setState({ isOpen: true })}>
                                    <Avatar
                                        alt="Anonymous"
                                        aria-owns={this.state.open ? 'simple-menu' : null}
                                        aria-haspopup="true"
                                        src="/resources/images/steve.jpg"
                                        className={classNames(classes.avatar, classes.profileAvatar, classes.avatarImg, classes.deskDiv)}
                                    /></Button> : <Button variant="fab" disabled={true} mini className={classNames(classes.button, classes.deskDiv, classes.iconsFooterDefault, classes.unAvailable, classes.imageNA)}>
                                    <Person />
                                </Button>
                            }
                        </div>
                        <div className={classNames(classes.flexForMobile, classes.forMobileDiv)}>
                            {(sessionUserProfile) ?
                                <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={this.handleClickDiag('openMobile')}>
                                    <Avatar
                                        alt="Anonymous"
                                        aria-owns={this.state.open ? 'simple-menu' : null}
                                        aria-haspopup="true"
                                        src="/resources/images/steve.jpg"
                                        onClick={this.handleClickDiag('openMobile')}
                                        className={classNames(classes.avatar, classes.profileAvatar, classes.avatarImg, classes.forMobileDiv)}
                                    /></Button> :
                                <Button variant="fab" onClick={this.handleClickDiag('openMobile')} mini className={classNames(classes.button, classes.forMobileDiv, classes.iconsFooterDefault, classes.fontSize_4rem, classes.imageNA)}>
                                    <Person />
                                </Button>

                            }

                        </div>
                        {isOpen && (
                            <div>
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={this.handleLightboxClose('isOpen')}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            </div>
                        )}
                    </div>

                </div>
                <PopupComponent
                    onOpen={this.state.open}
                    classes={classes}
                    textOptions={true}
                    actionType={this.handleCloseDiag('open')}
                    titleStyle={classes.titleWhite}
                    whiteHeader={classes.whiteTitle}
                    whiteIcons={classes.darkTitle}
                    title={currentEntity && Object.keys(currentEntity).length > 0 ? userName : userEmail}
                    optionList={
                        [
                            {
                                show: 'password',
                                action: this.handleClickDiag('password'),
                                style: classes.optionSignIn
                            },
                            {
                                show: 'sign-out',
                                action: null,
                                style: classes.optionPrimary,
                                action: this.props.signOutUser,
                                style:classes.optionPrimary,
                            },
                        ]
                    }
                    close={this.handleCloseDiag('open')}
                />
                <PopupComponent
                    onOpen={this.state.password}
                    classes={classes}
                    iconOptions={true}
                    formCheckIcon={classes.backArrow}
                    actionType={this.handleCloseDiag('password')}
                    onSubmitForm={this.formSubmit("password")}
                    titleStyle={classes.titleWhite}
                    whiteHeader={classes.whiteTitle}
                    whiteIcons={true}
                    title={currentEntity && Object.keys(currentEntity).length > 0 ? userName : userEmail}
                    close={this.handleClosePassword('password')}
                >
                    <div className={classes.revisePopupContent}>
                        <div className={classNames(classes.PopupFormBoxNew)} style={{marginTop:'17px'}}>
                            <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                <TextField
                                    id="currentPassword"
                                    label="current password"
                                    type="password"
                                    defaultValue={this.state.fields.currentPassword}
                                    className={classes.textField}
                                    InputProps={{
                                        classes: {
                                                underline: classes.inputFloatingLabelUnderline,
                                                },
                                }}
                                InputLabelProps={{
                                            FormLabelClasses:{
                                                root: classes.inputFloatingLabel,
                                                focused: classes.inputFloatingLabelFocused,
                                            }
                                }} 
                                />
                            </FormControl>
                            <FormHelperText className={classes.helperText}>{this.state.errors["currentPassword"]}</FormHelperText>
                        </div>
                        <div className={classNames(classes.PopupFormBoxNew)}>
                            <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                <TextField
                                    id="revisedPassword"
                                    label="revised password"
                                    type="text"
                                    defaultValue={this.state.fields.revisedPassword}
                                    className={classes.textField}
                                    InputProps={{
                                        classes: {
                                                underline: classes.inputFloatingLabelUnderline,
                                                },
                                }}
                                InputLabelProps={{
                                            FormLabelClasses:{
                                                root: classes.inputFloatingLabel,
                                                focused: classes.inputFloatingLabelFocused,
                                            }
                                }} 
                                />
                            </FormControl>
                            <FormHelperText className={classes.helperText}>{this.state.errors["revisedPassword"]}</FormHelperText>
                        </div>
                        <div className={classNames(classes.PopupFormBoxNew)}>
                            <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                <TextField
                                    id="revisedPasswordConfirm"
                                    label="revised password"
                                    type="text"
                                    defaultValue={this.state.fields.revisedPasswordConfirm}
                                    className={classes.textField}
                                    InputProps={{
                                        classes: {
                                                underline: classes.inputFloatingLabelUnderline,
                                                },
                                }}
                                InputLabelProps={{
                                            FormLabelClasses:{
                                                root: classes.inputFloatingLabel,
                                                focused: classes.inputFloatingLabelFocused,
                                            }
                                }} 
                                />
                            </FormControl>
                            <FormHelperText className={classes.helperText}>{this.state.errors["revisedPasswordConfirm"]}</FormHelperText>
                        </div>
                    </div>
                </PopupComponent>
                <PopupComponent
                    onOpen={this.state.openMobile}
                    classes={classes}
                    textOptions={true}
                    actionType={this.handleCloseDiag('openMobile')}
                    titleStyle={classes.titleWhite}
                    whiteHeader={classes.whiteTitle}
                    whiteIcons={classes.darkTitle}
                    title={currentEntity && Object.keys(currentEntity).length > 0 ? userName : userEmail}
                    optionList={
                        [
                            {
                                show: 'password',
                                action: this.handleClickDiag('password'),
                                style: classes.optionSignIn
                            },
                            {
                                show: 'sign-out',
                                action: null,
                                style: classes.optionPrimary,
                                divider: 'dark'
                            },
                            {
                                show: 'zoom-in',
                                action: () => {
                                    this.setState({ isOpen: true });
                                    this.setState({ 'openMobile': false });
                                },
                                style: classes.optionPrimary,
                                divider: 'light'
                            },
                        ]
                    }
                    close={this.handleCloseDiag('openMobile')}
                />

            </div>
        );
    }
}

export default IGMenu;