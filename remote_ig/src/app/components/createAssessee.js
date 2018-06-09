import React from 'react';
import classNames from 'classnames';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import PreviousIcon from 'material-ui-icons/ArrowBack';
import NextIcon from 'material-ui-icons/ArrowForward';
import MoreVert from 'material-ui-icons/MoreVert';
import Clear from 'material-ui-icons/Clear';
import KeyboardHide from 'material-ui-icons/KeyboardHide';
import DoneIcon from 'material-ui-icons/Done';
import SearchIcon from 'material-ui-icons/Search';
import Assessment from 'material-ui-icons/Assessment';
import FormatAlignCenter from 'material-ui-icons/FormatAlignCenter';
import Description from 'material-ui-icons/Description';
import BorderAll from 'material-ui-icons/BorderAll';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import HelpIcon from 'material-ui-icons/Help';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem'
import Divider from 'material-ui/Divider';
import Flag from 'material-ui-icons/Flag';
import Edit from 'material-ui-icons/Edit';
import KeyboardArrowRight from 'material-ui-icons/ChevronRight';
import KeyboardArrowLeft from 'material-ui-icons/ChevronLeft';
import Filter1 from 'material-ui-icons/Filter1';
import FirstPage from 'material-ui-icons/FirstPage';
import LastPage from 'material-ui-icons/LastPage';
import Avatar from 'material-ui/Avatar';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Radio, { RadioGroup } from 'material-ui/Radio';
import DetailsSection from './userDetailSection';
import SearchSection from './userSearchSection';
import IGSelect from './select';
import Lightbox from 'react-image-lightbox';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Worksheet from 'material-ui-icons/Assessment';
import DeveloperMode from 'material-ui-icons/DeveloperMode';
import Manuscript from 'material-ui-icons/Description';
import Keyboard from 'material-ui-icons/Keyboard';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import NavListItems from '../containers/navListItems';
import AssociateBlock from '../containers/associate';
import AssignmentBlock from '../containers/assignment';
import AssessmentBlock from '../containers/assessment';
import NodeBlock from '../containers/node';
import LabelIcon from './labelIcon';
import BusinessCenter from 'material-ui-icons/BusinessCenter';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';
import BorderClear from 'material-ui-icons/BorderClear';
import Add from 'material-ui-icons/Add';
import DashIcon from 'material-ui-icons/Dashboard';
import PopUp from '../components/popup';
import Tooltip from 'material-ui/Tooltip';
import CheckBox from 'material-ui-icons/CheckBox';
import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank';
import VerifiedUser from 'material-ui-icons/VerifiedUser';
import Notifications from 'material-ui-icons/Notifications';
import Select from 'material-ui/Select';
import Check from 'material-ui-icons/Check';
import moment from 'moment';

class CreateAssessee extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        createName: false,
        createEmail: false,
        createMobile: false,
        createGender: false,
        createManager: false,
        createTagPrimary: false,
        createTagSecondary: false,
        createexpanded: false,
        confirmCancel: false,
        confirmCreate: false,
        createSignIn: false,
        verificationName: false,
        communicationEmailPrimary: true,
        signInEmailPrimary: true,
        verificationEmailPrimary: false,
        verificationTelephone: false,
        verificationGender: false,
        signInTagPrimary: false,
        signInTagSecondary: false,
        createMode: 'all',
        lastCreateAssesseePop: '',
        todayDate: moment(new Date()).format('YYYY-MM-DD'),
        createOptions: [
            {
                show: 'information',
                divider: 'dark',
                selected: false
            },
            {
                show: 'all',
                selected: true
            },
            {
                show: 'key',
                selected: false
            },
        ],
        fields: {
            prefix: '',
            prefixUnlisted:'',
            firstName: '',
            otherName: '',
            lastName: '',
            suffix: '',
            suffixUnlisted:'',            
            email: '',
            countryCode: '',
            countryCodeUnlisted:'', 
            telephone: '',
            gender: '',
            genderUnlisted:'',             
            manager: '',
            startDate: '',
            endDate: '',
            tagPrimary: '',
            tagSecondary: '',
        },
        errors: {
            prefix: null,
            prefixUnlisted:null,
            firstName: null,
            otherName: null,
            lastName: null,
            suffix: null,
            suffixUnlisted:null,
            email: null,
            countryCode: null,
            countryCodeUnlisted:null, 
            telephone: null,
            gender: null,
            genderUnlisted:null,                         
            manager: null,
            startDate: null,
            endDate: null,
            tagPrimary: null,
            tagSecondary: null,
            formIsValid: true
        }
    };
    createAssesseeObj = {
        userName: {
            prefix: "",
            firstName: "",
            lastName: "",
            otherNames: "",
            suffix: "",
            verified: false,
            alias: "",
            middleName: ""
        },
        userEmail: {
                email: "",
                loginId: "",
                type: "primary",
                communication: false,
                verified: false
        },
        contactHome:{
                title: "",
                type: "",
                country: "",
                countryCode: "",
                city: "",
                cityCode: "",
                phoneNo: "",
                extension: "",
                verified: false
        },
        contactMobile: {
                title: "",
                type: "primary",
                country: "",
                countryCode: "",
                city: "",
                cityCode: "",
                phoneNo: "",
                extension: "",
                verified: false
        },
        contactWork: {
                title: "",
                type: "",
                country: "",
                countryCode: "",
                city: "",
                cityCode: "",
                phoneNo: "",
                extension: "",
                verified: false
        },
        address: {
                type: "",
                country: "",
                state: "",
                zip: "",
                city: "",
                address: "",
                verified: false,
                communication: false
        },
        workAddress: {
                type: "",
                country: "",
                state: "",
                zip: "",
                city: "",
                address: "",
                verified: false,
                communication: false
        },
        personalInfo: {
                birthDate: "",
                birthPlace: {
                        country: "",
                        state: "",
                        city: ""
                },
                community: [{
                        assign: "",
                        communityCountryRegion: "",
                        community: ""
                }],
                gender: ""
        }
    };

    userAccountUI = {
                "userName": {},
                "userEmail": [],
                "contactHome": [],
                "contactMobile": [],
                "contactWork": [],
                "address": [],
                "workAddress": [],
                "personalInfo": {},
                "credentialData": {},
                "tenure": {},
                "informationAlliance": {},
                "career": [],
                "rootManager": true
        };

    userObj = {};
    handleValidation = (prop, field = null) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true
        if (field != null) {
            switch (field) {
                case "firstName":
                    if (!fields["firstName"]) {
                        formIsValid = false;
                        errors["firstName"] = "This information is required.";
                    }
                    else if (typeof fields["firstName"] !== "undefined") {
                        if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
                            formIsValid = false;
                            errors["firstName"] = "This information is invalid.";
                        }
                        else if (fields["firstName"] && (fields["firstName"].match(/^[a-zA-Z]+$/))) {
                            formIsValid = true;
                            errors["firstName"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                    break;
                case "lastName":
                    if (!fields["lastName"]) {
                        formIsValid = false;
                        errors["lastName"] = "This information is required.";
                    }
                    else if (typeof fields["lastName"] !== "undefined") {
                        if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
                            formIsValid = false;
                            errors["lastName"] = "This information is invalid.";
                        }
                        else if (fields["lastName"] && (fields["lastName"].match(/^[a-zA-Z]+$/))) {
                            formIsValid = true;
                            errors["lastName"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                    break;
                case "gender":
                    if (!fields["gender"]) {
                        formIsValid = false;
                        errors["gender"] = "This information is required.";
                    }
                    else if (typeof fields["gender"] !== "undefined") {
                        if (!fields["gender"].match(/^[a-zA-Z]+$/)) {
                            formIsValid = false;
                            errors["gender"] = "This information is invalid.";
                        }
                        else if (fields["gender"] && (fields["gender"].match(/^[a-zA-Z]+$/))) {
                            formIsValid = true;
                            errors["gender"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                    break;
                case "email":
                    //Email
                    if (!fields["email"]) {
                        formIsValid = false;
                        errors["email"] = "This information is required.";
                    }
                    else if (typeof fields["email"] !== "undefined") {
                        let lastAtPos = fields["email"].lastIndexOf('@');
                        let lastDotPos = fields["email"].lastIndexOf('.');

                        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                            formIsValid = false;
                            errors["email"] = "This information is invalid.";
                        }
                        else if (fields["email"] && (lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                            formIsValid = true;
                            errors["email"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                    break;
                default:
                    break;
            }
        }
        else {
            var result = Object.keys(prop).forEach(function (key) {
                if (key == 'firstName') {
                    if (!(prop[key])) {
                        formIsValid = false;
                        errors["firstName"] = "This information is required.";
                    }
                    else if (typeof prop[key] !== "undefined") {
                        if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                            formIsValid = false;
                            errors["firstName"] = "This information is invalid.";
                        }
                        else if (prop[key] && (prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/))) {
                            formIsValid = true;
                            errors["firstName"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                }
                if (key == 'lastName') {
                    if (!(prop[key])) {
                        formIsValid = false;
                        errors["lastName"] = "This information is required.";
                    }
                    else if (typeof prop[key] !== "undefined") {
                        if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                            formIsValid = false;
                            errors["lastName"] = "This information is invalid.";
                        }
                        else if (prop[key] && (prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/))) {
                            formIsValid = true;
                            errors["lastName"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                }
                if (key == 'email') {
                    if (!(prop[key])) {
                        formIsValid = false;
                        errors["email"] = "This information is required.";
                    }
                    else if (typeof prop[key] !== "undefined") {
                        let lastAtPos = prop[key].lastIndexOf('@');
                        let lastDotPos = prop[key].lastIndexOf('.');

                        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && prop[key].indexOf('@@') == -1 && lastDotPos > 2 && (prop[key].length - lastDotPos) > 2)) {
                            formIsValid = false;
                            errors["email"] = "This information is invalid.";
                        }
                        else if (prop[key] && (lastAtPos < lastDotPos && lastAtPos > 0 && prop[key].indexOf('@@') == -1 && lastDotPos > 2 && (prop[key].length - lastDotPos) > 2)) {
                            formIsValid = true;
                            errors["email"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                }
                if (key == 'gender') {
                    if (!(prop[key])) {
                        formIsValid = false;
                        errors["gender"] = "This information is required.";
                    }
                    else if (typeof prop[key] !== "undefined") {
                        if (!prop[key].match(/^[a-zA-Z]+$/)) {
                            formIsValid = false;
                            errors["gender"] = "This information is invalid.";
                        }
                        else if (prop[key] && (prop[key].match(/^[a-zA-Z]+$/))) {
                            formIsValid = true;
                            errors["gender"] = null;
                            errors["formIsValid"] = true;
                        }
                    }
                }
            });
        }
        this.setState({ errors });
        return formIsValid;
    }
    formSubmit = (type) => () => {
        let fields = this.state.fields;
        var vaildation = false;
        var { listCardsPanel } = this.props;
        switch (type) {
            case "createName":
                var obj = {
                    firstName: '',
                    lastName: '',
                    prefix: '',
                    otherName: '',
                    suffix: '',
                };
                obj.firstName = document.getElementById("createAssesseeFirstName").value;
                obj.lastName = document.getElementById("createAssesseeLastName").value;
                obj.prefix = document.getElementById("createAssesseePrefix").value;
                obj.suffix = document.getElementById("createAssesseeSuffix").value;
                obj.otherName = document.getElementById("createAssesseeOtherName").value;
                fields['prefix'] = obj.prefix;
                fields['firstName'] = obj.firstName;
                fields['otherName'] = obj.otherName;
                fields['lastName'] = obj.lastName;
                fields['suffix'] = obj.suffix;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                    this.createAssesseeObj.userName.firstName = obj.firstName;
                    this.createAssesseeObj.userName.lastName = obj.lastName;
                    this.createAssesseeObj.userName.prefix = obj.prefix;
                    this.createAssesseeObj.userName.suffix = obj.suffix;
                    this.createAssesseeObj.userName.otherNames = obj.otherName;
                    this.setState(this.change("createEmail", listCardsPanel));
                    this.props.closeCreateAssesseeMode();
                }
                break;
            case "createEmail":
                var obj = {
                    email: '',
                };
                obj.email = document.getElementById("createAssesseeEmail").value;
                fields['email'] = obj.email;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                    this.createAssesseeObj.userEmail.email = obj.email;
                    this.setState(this.change("createMobile", listCardsPanel));

                }
                break;
            case "createMobile":
                var obj = {
                    number: '',
                    countryCode: '',
                };
                var countryPluseCode = '';
                var countryPluseCodeSplit = '';
                var country = '';
                var code = '';
                obj.number = document.getElementById("createAssesseeTelephone").value;
                obj.countryCode = document.getElementById("createAssesseeCountryCode").value;

                countryPluseCode = document.getElementById("createAssesseeCountryCode").value;
                countryPluseCodeSplit = countryPluseCode.split(" ");
                code = countryPluseCodeSplit[countryPluseCodeSplit.length-1];
                country =countryPluseCode.substring(0, countryPluseCode.lastIndexOf(" "));

                fields['telephone'] = obj.number;
                fields['countryCode'] = obj.countryCode;
                this.setState({ fields });
                this.createAssesseeObj.contactMobile.phoneNo = obj.number;
                this.createAssesseeObj.contactMobile.country = country;
                this.createAssesseeObj.contactMobile.countryCode = code;
                this.setState(this.change("createGender", listCardsPanel));

                break;
            case "createGender":
                var obj = {
                    gender: '',
                };
                obj.gender = document.getElementById("createAssesseeGender").value;
                fields['gender'] = obj.gender;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                    this.createAssesseeObj.personalInfo.gender = obj.gender;
                    this.setState(this.change("createManager", listCardsPanel));

                }
                break;
            case "createManager":
                var obj = {
                    managerName: '',
                    startDate: '',
                    endDate: ''
                };
                obj.managerName = document.getElementById("createAssesseeManager").value;
                fields['manager'] = obj.managerName;
                this.setState({ fields });
                //this.createAssesseeObj.manager.managerName = obj.managerName;
                if (this.state.signInEmailPrimary == true) {
                    this.setState({ 'lastCreateAssesseePop': 'createManager' });
                    this.setState(this.change("confirmCreate", listCardsPanel));
                }
                if (this.state.signInEmailPrimary == false) {
                    if (this.state.signInTagSecondary == false) {
                        this.setState({ 'signInTagPrimary': true });
                    }
                    this.setState(this.change("createTagPrimary", listCardsPanel));
                }
                break;
            case "createTagPrimary":
                var obj = {
                    tagPrimary: '',
                };
                obj.tagPrimary = document.getElementById("createAssesseeTagPrimary").value;
                fields['tagPrimary'] = obj.tagPrimary;
                this.setState({ fields });
                this.createAssesseeObj.tagPrimary = obj.tagPrimary;
                if (this.state.signInTagPrimary == true) {
                    this.setState({ 'lastCreateAssesseePop': 'createTagPrimary' });
                    this.setState(this.change("confirmCreate", listCardsPanel));
                }
                if (this.state.signInTagPrimary == false) {
                    if (this.state.fields.tagSecondary != '') {
                        this.setState({ 'signInTagSecondary': true });
                    } else {
                        this.setState({ 'signInTagSecondary': false });
                    }
                    this.setState(this.change("createTagSecondary", listCardsPanel));
                }
                break;
            case "createTagSecondary":
                var obj = {
                    tagSecondary: '',
                };
                obj.tagSecondary = document.getElementById("createAssesseeTagSecondary").value;
                fields['tagSecondary'] = obj.tagSecondary;
                this.setState({ fields });
                this.createAssesseeObj.tagSecondary = obj.tagSecondary;
                if (this.state.signInTagSecondary == true) {
                    this.setState({ 'lastCreateAssesseePop': 'createTagSecondary' });
                    this.setState(this.change("confirmCreate", listCardsPanel));
                }
                if (this.state.signInTagSecondary == false) {
                    this.setState({ 'signInEmailPrimary': true });
                    this.setState(this.change("createSignIn", listCardsPanel));
                }
                break;
            case "createSignIn":
                this.setState({ 'lastCreateAssesseePop': 'createSignIn' });
                this.setState(this.change("confirmCreate", listCardsPanel));
                break;
            case "confirmCreate":
                this.userAccountUI.userName  = {};
                this.userAccountUI.userEmail = [];
                this.userAccountUI.contactMobile = [];
                this.userAccountUI.personalInfo.gender = '';
                let temp = {};
                temp['confirmCreate'] = false;

                this.userAccountUI.userName = this.createAssesseeObj.userName;
                this.userAccountUI.userEmail.push(this.createAssesseeObj.userEmail);
                this.userAccountUI.contactMobile.push(this.createAssesseeObj.contactMobile);
                this.userAccountUI.personalInfo.gender = this.createAssesseeObj.personalInfo.gender;
                this.setState(temp);
                break;
            default:
                break;
        }

    }
    handleChange(field, e) {
        let fields = this.state.fields;
        switch (field) {
            case "prefix":
                fields["prefix"] = e.target.value;
                this.setState({ fields });
                //this.handleValidation({},"firstName");
                break;
            case "firstName":
                fields["firstName"] = e.target.value;
                this.setState({ fields });
                //this.handleValidation({},"firstName");
                break;
            case "otherName":
                fields["otherName"] = e.target.value;
                this.setState({ fields });
                //this.handleValidation({},"firstName");
                break;
            case "lastName":
                fields["lastName"] = e.target.value;
                this.setState({ fields });
                // this.handleValidation({},"lastName");
                break;
            case "suffix":
                fields["suffix"] = e.target.value;
                this.setState({ fields });
                // this.handleValidation({},"lastName");
                break;
            case "email":
                fields["email"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "countryCode":
                fields["countryCode"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "telephone":
                fields["telephone"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "gender":
                fields["gender"] = e.target.value;
                this.setState({ fields });
                // this.handleValidation({},"gender");
                break;
            case "manager":
                fields["manager"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "startDate":
                fields["startDate"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "endDate":
                fields["endDate"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "tagPrimary":
                fields["tagPrimary"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;
            case "tagSecondary":
                fields["tagSecondary"] = e.target.value;
                this.setState({ fields });
                //  this.handleValidation({},"email");
                break;

            default:
                break;
        }

    }
    handleChangeSearch = prop =>{
        let fields   = this.state.fields;
        fields[prop] = '';
        this.setState({ fields });      
    }
    handelCreateAssesseesAccount = (createAssesseesAccount,userAccountUI) => createAssesseesAccount(userAccountUI);
    createAssesseeSubmit = (formSubmit, createAssesseesAccount,handleSelectReviewFilter) => () => {
        formSubmit();
        if(typeof createAssesseesAccount === 'function') this.handelCreateAssesseesAccount(createAssesseesAccount,this.userAccountUI);
     // handleSelectReviewFilter();
        let fields = this.state.fields;
        Object.keys(fields).forEach(function (key, index) {
            fields[key] = '';
        });
        this.setState({ 'verificationName': false });
        this.setState({ 'communicationEmailPrimary': true });
        this.setState({ 'signInEmailPrimary': true });
        this.setState({ 'verificationEmailPrimary': false });
        this.setState({ 'verificationTelephone': false });
        this.setState({ 'verificationGender': false });
        this.setState({ 'signInTagPrimary': false });
        this.setState({ 'signInTagSecondary': false });
    };

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'createName',
            'confirmCancel',
            'createEmail',
            'createMobile',
            'createGender',
            'createManager',
            'createTagPrimary',
            'confirmCreate',
            'createTagSecondary',
            'createSignIn',
            'openGenNode',
            'openCreate',
            'createexpanded',
            'openExchange'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        temp.anchorEl = panel;
        return temp
    };

    handleClick = prop => event => {
        let { listCardsPanel } = this.props;
        this.setState(this.change(prop, listCardsPanel));
        if (typeof this.props.closeCreateAssesseeMode === 'function') {
            this.props.closeCreateAssesseeMode();
        }
    };
    handleClickCloseAssesseePopup = (prop, popup) => event => {
        this.setState({ 'lastCreateAssesseePop': popup });
        let { listCardsPanel } = this.props;
        this.setState(this.change(prop, listCardsPanel));
        if (typeof this.props.closeCreateAssesseeMode === 'function') {
            this.props.closeCreateAssesseeMode();
        }
    }
    handleClickCancelConfirmAssesseePopup = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
        let fields = this.state.fields;
        Object.keys(fields).forEach(function (key, index) {
            fields[key] = '';
        });
        this.setState({ 'verificationName': false });
        this.setState({ 'communicationEmailPrimary': true });
        this.setState({ 'signInEmailPrimary': true });
        this.setState({ 'verificationEmailPrimary': false });
        this.setState({ 'verificationTelephone': false });
        this.setState({ 'verificationGender': false });
        this.setState({ 'signInTagPrimary': false });
        this.setState({ 'signInTagSecondary': false });
    };

    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };
    toggleCheckbox = (prop, value) => event => {
        let temp = {};
        temp[prop] = !value;
        this.setState(temp);
        return false;
    };
    toggleSignInCheckbox = (prop, value) => event => {
        let temp = {};
        temp[prop] = !value;
        this.setState(temp);
        if (prop == 'signInEmailPrimary') {
            this.setState({ 'signInEmailPrimary': !value });
            if (value == true) {
                this.setState({ 'signInTagPrimary': true });
                this.setState({ 'signInTagSecondary': false });
            }
            if (value == false) {
                this.setState({ 'signInTagPrimary': false });
                this.setState({ 'signInTagSecondary': false });
            }

        }
        if (prop == 'signInTagPrimary') {
            this.setState({ 'signInTagPrimary': !value });
            if (value == true) {
                if (this.state.fields.tagSecondary) {
                    this.setState({ 'signInTagSecondary': true });
                    this.setState({ 'signInEmailPrimary': false });
                } else {
                    this.setState({ 'signInTagSecondary': false });
                    this.setState({ 'signInEmailPrimary': true });
                }

            }
            if (value == false) {
                this.setState({ 'signInTagSecondary': false });
                this.setState({ 'signInEmailPrimary': false });
            }
        }
        if (prop == 'signInTagSecondary') {
            this.setState({ 'signInTagSecondary': !value });
            if (value == true) {
                this.setState({ 'signInEmailPrimary': true });
                this.setState({ 'signInTagPrimary': false });
            }
            if (value == false) {
                this.setState({ 'signInEmailPrimary': false });
                this.setState({ 'signInTagPrimary': false });
            }
        }
        return false;
    };

    listFilter = (list) => {
        if (!Array.isArray(list) || list.length === 0) return [];
        return list
            .filter(account => {
                return account._id ?
                    account._id.length > 0 : false;
            })
            .map(account => {
                return account._id ?
                    account._id : ''
            });
    };

    handleCreate = (f, close, setTo) => () => {
        close();
        setTo('right');
        f(true);
    }

    handleActions = (...actions) => () => actions.forEach(action => action());

    handleDiagOpen = prop => event => {
        this.setState(this.afterChange(prop));
    }
    handleExpandClick = (val) => {
        if (val == 'createexpanded') {
            this.setState({ createexpanded: !this.state.createexpanded });

        }
    }


    handleSelect = (group, show, actions) => () => {

        actions = actions.filter(action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })
        actions.forEach(action => { action.selected = false })

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({ actions })
        if (show == 'all' || show == 'key') {
            this.setState({ 'createMode': show });
        }
    }

    handleNavAction = (close, togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile) => () => {
        close();
        if (typeof togglePane === 'function') togglePane(pane, type);
        if (pane === 'assessee') this.actionAssessee(type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile);
        if (typeof toggleMobile === 'function') toggleMobile('middle');
    }
    handleSelectFilter = (prop, f, user, infoType, setTo, mode, group, show, actions) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter(action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach(action => { action.selected = false })

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({ actions })
    }

    isSelected = (view, navItem) => view.middle[navItem]

    handleNavActionMiddle = (close, togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity) => () => {
        close();
        if (type === 'all') endSearch();
        if (type === 'roles') setEntityRoles(currentEntity);
        if (type === 'groups') setEntityGroups(currentEntity);
        this.setState({
            showSift: false
        })
    }


    handleSelectReviewFilter = (prop, f, user, infoType, setTo, mode, group, show, actions, setCreateMode) => actionList => {
        let type = Array.isArray(actionList) && actionList.length > 0 ?
            actionList.find(action => action.selected).show : null
        if (typeof f === 'function') this.handleUserSelect(f, user, (!type ? infoType : type === 'key' ?
            'basic' : type),
            mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter(action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach(action => { action.selected = false })

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        setCreateMode();
        this.setState({ actions })
        // if (typeof this.props.setCreateAssesseeLeftPanel === 'function') {
        //     if (this.props.createAssesseePanel == 'left') {
        //         this.handelcreateAssesseePanel(this.props.setCreateAssesseeLeftPanel, 'middle', this.state.createMode)
        //     }
        // }
    }

    handelcreateAssesseePanel = (setCreateAssesseeLeftPanel, panel, type) => setCreateAssesseeLeftPanel(panel, type);


    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);


    getMiddle = view => {
        if (view && view.middle) {
            for (let pane of Object.keys(view.middle)) {
                if (view.middle[pane]) {
                    let newPane = pane.split('');
                    newPane[0] = newPane[0].toUpperCase();
                    return newPane.join('') === 'Assessee' ?
                        'Assessees' : newPane.join('')
                }
            }
            return 'Assessee'
        }
    };



    render() {
        let { classes, scrolledList, toggleMiddlePane, width, endSearch, setEntityRoles, setEntityGroups, currentEntity, view, card, toggleAssesseeMobile } = this.props;

        const createInfo = ['all', 'key'];

        let createMap = [

            {
                show: 'information',
                action: this.handleClick('createName'),
                // action: this.handleSelectReviewFilter('openCreate', this.props.selectUserAccount, card, this.state.createMode , this.props.toggleAssesseeMobile, 'review', createInfo, this.state.createMode, this.state.createOptions),
                style: classes.optionPrimary
            },
            {
                show: 'all',
                action: this.handleSelect(createInfo, 'all', this.state.createOptions),
                style: classes.optionSecondary
            },
            {
                show: 'key',
                action: this.handleSelect(createInfo, 'key', this.state.createOptions),
                style: classes.optionSecondary
            }

        ];

        let isEntitySelected = this.props.isEntitySelected;

        return (
            <div className={classes.iconBarNavMiddleLess}>
                <div>
                    <PopUp
                        onOpen={this.state.confirmCancel}
                        titleStyle={classes.titleLightBlue}
                        //previousIcon={classes.backArrow}
                        noCloseIcon={true}
                        textOptions={true}
                        actionType={this.handleClick(this.state.lastCreateAssesseePop)}
                        classes={classes}
                        title={'cancel'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleClick(this.state.lastCreateAssesseePop),
                                    style: classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: this.handleClickCancelConfirmAssesseePopup('confirmCancel'),
                                    style: classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleClickCancelConfirmAssesseePopup('confirmCancel')}
                    />


                    <PopUp
                        onOpen={this.state.createName || this.props.isCreateAssesseeMode}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('openCreate')}
                        onSubmitForm={this.formSubmit("createName")}
                        disableCheckIcon={false}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createName')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel
                                    htmlFor="name-input"
                                >name</InputLabel>
                                <div className={classes.unitFlex}>

                                </div>
                                <div className={classes.unitFlex}>

                                </div>
                            </div>
                            {(this.state.fields.prefix === 'unlisted')?
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="prefixUnlisted" shrink={ true } className={classes.textForLabelPopup}>prefix <sup>unlisted</sup></InputLabel>
                                    <Input
                                        id="createAssesseePrefix"
                                        autoComplete="off"
                                        name="prefixUnlisted"
                                        type="text"
                                        defaultValue={this.state.fields.prefixUnlisted}
                                        onChange={(e) => this.handleChange("prefixUnlisted", e)}
                                    />                           
                                    <div className={classes.inputClearIcon} onClick={()=>this.handleChangeSearch("prefix")}>
                                        <Clear/>
                                    </div>
                                    <FormHelperText className={classes.helperText}>{this.state.errors["prefix"]}</FormHelperText>

                                </FormControl>
                            </div>
                            :
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.selectFields)}>
                                    <IGSelect
                                        name="prefix"
                                        id="createAssesseePrefix"
                                        list={['Dr.', 'Dr. (Mrs.)', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Prof. (Mrs.)', 'Rev. Fr.', 'Rev. Sr.','divider','none','unlisted']}
                                        label="prefix"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.prefix}
                                        onChange={(e) => this.handleChange("prefix", e)}
                                    />                                
                                    <FormHelperText className={classes.helperText}>{this.state.errors["prefix"]}</FormHelperText>
                                </FormControl>
                            </div>
                            }
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        name="firstName"
                                        id="createAssesseeFirstName"
                                        label="first name"
                                        className={classNames(classes.textForInput, classes.inputText)}
                                        margin="normal"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.firstName}
                                        onChange={(e) => this.handleChange("firstName", e)}
                                    // InputProps={{
                                    //     classes: {
                                    //       input: classes.inputUnderLine,
                                    //     },
                                    //   }}
                                    //   InputLabelProps={{
                                    //     className: classes.inputFloatingLabel,
                                    //   }}
                                    />
                                    <FormHelperText className={classes.helperText}>{this.state.errors["firstName"]}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        name="otherName"
                                        id="createAssesseeOtherName"
                                        label="other names"
                                        className={classNames(classes.textForInput, classes.inputText)}
                                        margin="normal"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.otherName}
                                        onChange={(e) => this.handleChange("otherName", e)}
                                    // InputProps={{
                                    //     classes: {
                                    //       input: classes.inputUnderLine,
                                    //     },
                                    //   }}
                                    //   InputLabelProps={{
                                    //     className: classes.inputFloatingLabel,
                                    //   }}
                                    />
                                    <FormHelperText className={classes.helperText}>{this.state.errors["otherName"]}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        name="lastName"
                                        id="createAssesseeLastName"
                                        label="last name"
                                        className={classNames(classes.textForInput, classes.inputText)}
                                        margin="normal"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.lastName}
                                        onChange={(e) => this.handleChange("lastName", e)}
                                    // InputProps={{
                                    //     classes: {
                                    //       input: classes.inputUnderLine,
                                    //     },
                                    //   }}
                                    //   InputLabelProps={{
                                    //     className: classes.inputFloatingLabel,
                                    //   }}
                                    />
                                    <FormHelperText className={classes.helperText}>{this.state.errors["lastName"]}</FormHelperText>
                                </FormControl>
                            </div>
                            {(this.state.fields.suffix === 'unlisted')?
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="suffixUnlisted" shrink={ true } className={classes.textForLabelPopup}>suffix <sup>unlisted</sup></InputLabel>
                                    <Input
                                        id="createAssesseeSuffix"
                                        autoComplete="off"
                                        name="suffixUnlisted"
                                        type="text"
                                        defaultValue={this.state.fields.suffixUnlisted}
                                        onChange={(e) => this.handleChange("suffixUnlisted", e)}
                                    /> 
                                    <div className={classes.inputClearIcon} onClick={()=>this.handleChangeSearch("suffix")}>
                                        <Clear/>
                                    </div>                          
                                    <FormHelperText className={classes.helperText}>{this.state.errors["suffix"]}</FormHelperText>
                                </FormControl>
                            </div>
                            :
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        name="suffix"
                                        id="createAssesseeSuffix"
                                        list={['Jr.', 'Sr.','divider','none','unlisted']}
                                        label="suffix"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.suffix}
                                        onChange={(e) => this.handleChange("suffix", e)}
                                    />
                                    <FormHelperText className={classes.helperText}>{this.state.errors["suffix"]}</FormHelperText>
                                </FormControl>
                            </div>
                            }
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                <div className={classes.contFlex}>
                                    <div className={classes.f4}>verification</div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.verificationName}
                                            onChange={this.toggleCheckbox('verificationName', this.state.verificationName)}
                                            value={this.state.verificationName}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.createEmail}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createName')}
                        onSubmitForm={this.formSubmit("createEmail")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createEmail')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="email" className={classes.textForLabelPopup}>email address <sup>primary</sup></InputLabel>
                                    <Input
                                        id="createAssesseeEmail"
                                        autoComplete="off"
                                        name="email"
                                        type="text"
                                        defaultValue={this.state.fields.email}
                                        onChange={(e) => this.handleChange("email", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["email"]}</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                <div className={classes.contFlex}>
                                    <div className={classes.f4}>communication</div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.communicationEmailPrimary}
                                            onChange={this.toggleCheckbox('communicationEmailPrimary', this.state.communicationEmailPrimary)}
                                            value={this.state.communicationEmailPrimary}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                                <div className={classes.contFlex}>
                                    <div className={classes.f4}>sign-in</div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.signInEmailPrimary}
                                            onChange={this.toggleCheckbox('signInEmailPrimary', this.state.signInEmailPrimary)}
                                            value={this.state.signInEmailPrimary}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                                {(this.state.verificationEmailPrimary) ?
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4}>verification</div>
                                        <div className={classes.checkedFontNew}>
                                            <Checkbox
                                                checked={this.state.verificationEmailPrimary}
                                                onChange={this.toggleCheckbox('verificationEmailPrimary', this.state.verificationEmailPrimary)}
                                                value={this.state.verificationEmailPrimary}
                                                color="default"
                                                disabled
                                                disableRipple={true}
                                                disableFocusRipple={true}
                                            />
                                        </div>
                                    </div> :
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4Disable}>verification</div>
                                        <div className={classes.checkedFontNewDisable}>
                                            <Checkbox
                                                checked={this.state.verificationEmailPrimary}
                                                onChange={this.toggleCheckbox('verificationEmailPrimary', this.state.verificationEmailPrimary)}
                                                value={this.state.verificationEmailPrimary}
                                                color="default"
                                                disabled
                                                disableRipple={true}
                                                disableFocusRipple={true}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.createMobile}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createEmail')}
                        onSubmitForm={this.formSubmit("createMobile")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createMobile')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel
                                    htmlFor="name-input"
                                    className={classes.textForLabelPopup}>mobile telephone <sup>primary</sup></InputLabel>
                            </div>
                            {(this.state.fields.countryCode === 'unlisted')?
                             <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="countryCodeUnlisted" shrink={ true } className={classes.textForLabelPopup}>country <sup>unlisted</sup></InputLabel>
                                    <Input
                                        id="createAssesseeCountryCode"
                                        autoComplete="off"
                                        name="countryCodeUnlisted"
                                        type="text"
                                        defaultValue={this.state.fields.countryCodeUnlisted}
                                        onChange={(e) => this.handleChange("countryCodeUnlisted", e)}
                                    />
                                    <div className={classes.inputClearIcon} onClick={()=>this.handleChangeSearch("countryCode")}>
                                        <Clear/>
                                    </div>                            
                                    <FormHelperText className={classes.helperText}>{this.state.errors["countryCode"]}</FormHelperText>
                                </FormControl>
                            </div>
                            :
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        name="countryCode"
                                        id="createAssesseeCountryCode"
                                        list={this.props.countries
                                            .map(country => `${country.name} ${country.countryIsdCode}`)
                                            .concat(['none','unlisted'])}
                                        label="country / region"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.countryCode}
                                        onChange={(e) => this.handleChange("countryCode", e)}
                                    />                                
                                <FormHelperText className={classes.helperText}>{this.state.errors["countryCode"]}</FormHelperText>
                                </FormControl>
                            </div>
                            }
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        name="telephone"
                                        id="createAssesseeTelephone"
                                        label="telephone number"
                                        type="text"
                                        className={classes.textField}
                                        autoComplete="off"
                                        defaultValue={this.state.fields.telephone}
                                        onChange={(e) => this.handleChange("telephone", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["telephone"]}</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                {(this.state.verificationTelephone) ?
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4}>verification</div>
                                        <div className={classes.checkedFontNew}>
                                            <Checkbox
                                                checked={this.state.verificationTelephone}
                                                onChange={this.toggleCheckbox('verificationTelephone', this.state.verificationTelephone)}
                                                value={this.state.verificationTelephone}
                                                color="default"
                                                disabled
                                            />
                                        </div>
                                    </div> :
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4Disable}>verification</div>
                                        <div className={classes.checkedFontNewDisable}>
                                            <Checkbox
                                                checked={this.state.verificationTelephone}
                                                onChange={this.toggleCheckbox('verificationTelephone', this.state.verificationTelephone)}
                                                value={this.state.verificationTelephone}
                                                color="default"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.createGender}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createMobile')}
                        onSubmitForm={this.formSubmit("createGender")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createGender')}>
                        <div className={classes.revisePopupContent}>
                        {(this.state.fields.gender === 'unlisted')?
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="genderUnlisted" shrink={ true } className={classes.textForLabelPopup}>gender <sup>unlisted</sup></InputLabel>
                                    <Input
                                        id="createAssesseeGender"
                                        autoComplete="off"
                                        name="genderUnlisted"
                                        type="text"
                                        defaultValue={this.state.fields.genderUnlisted}
                                        onChange={(e) => this.handleChange("genderUnlisted", e)}
                                    /> 
                                    <div className={classes.inputClearIcon} onClick={()=>this.handleChangeSearch("gender")}>
                                        <Clear/>
                                    </div>                          
                                    <FormHelperText className={classes.helperText}>{this.state.errors["gender"]}</FormHelperText>
                                </FormControl>
                            </div>
                            :
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        id="createAssesseeGender"
                                        list={['Female', 'Male', 'divider','unlisted']}
                                        label="gender"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.gender}
                                        onChange={(e) => this.handleChange("gender", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["gender"]}</FormHelperText>
                            </div>
                            }
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                <div className={classes.contFlex}>
                                    <div className={classes.f4}>verification</div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.verificationGender}
                                            onChange={this.toggleCheckbox('verificationGender', this.state.verificationGender)}
                                            value={this.state.verificationGender}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.createManager}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createGender')}
                        onSubmitForm={this.formSubmit("createManager")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createManager')}>
                        <div className={classes.revisePopupContent}>
                            {/*<div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>*/}
                                {/*<InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>managers <sup>primary</sup></InputLabel>*/}
                            {/*</div>*/}
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classes.inputFields}>
                                    {/* <TextField
                                        id="createAssesseeManager"
                                        label="managers"
                                        type="text"
                                        className={classes.textField}
                                        autoComplete="off"
                                        defaultValue={this.state.fields.manager}
                                        onChange={(e)=>this.handleChange("manager",e)}
                                    /> */}
                                    <IGSelect
                                        id="createAssesseeManager"
                                        list={['']}
                                        label="managers"
                                        autoComplete="off"
                                        defaultValue={this.state.fields.manager}
                                        onChange={(e) => this.handleChange("manager", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["manager"]}</FormHelperText>
                            </div>
                            {/* <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="createAssesseeStartDate"
                                        label="start date"
                                        type="date"
                                        className={classes.textField}
                                        autoComplete="off"
                                        defaultValue={(this.state.fields.startDate) ? this.state.fields.startDate : this.state.todayDate}
                                        onChange={(e) => this.handleChange("startDate", e)}
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{ inputProps: { max: this.state.todayDate } }}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["startDate"]}</FormHelperText>
                            </div>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="createAssesseeEndDate"
                                        label="end date"
                                        type="date"
                                        className={classNames(classes.textField, classes.disabledClass)}
                                        autoComplete="off"
                                        disabled={true}
                                        onChange={(e) => this.handleChange("endDate", e)}
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                input: classes.disableUnderline,
                                            },
                                        }}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["endDate"]}</FormHelperText>
                            </div> */}
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.createTagPrimary}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createManager')}
                        onSubmitForm={this.formSubmit("createTagPrimary")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createTagPrimary')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="tagPrimary" shrink={true} className={classes.textForLabelPopup}>tag <sup className={classes.font1_0}>primary</sup></InputLabel>
                                    <TextField
                                        id="createAssesseeTagPrimary"
                                        label=" "
                                        type="text"
                                        name="tagPrimary"
                                        className={classes.textField}
                                        defaultValue={(this.state.fields.tagPrimary) ? this.state.fields.tagPrimary : "tag-primary"}
                                        onChange={(e) => this.handleChange("tagPrimary", e)}
                                        disabled={true}
                                        autoComplete="off"
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                input: classes.disableUnderline,
                                            },
                                        }}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["TagPrimary"]}</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                <div className={classes.contFlex}>
                                    <div className={classes.f4}>sign-in</div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.signInTagPrimary}
                                            onChange={this.toggleCheckbox('signInTagPrimary', this.state.signInTagPrimary)}
                                            value={this.state.signInTagPrimary}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.createTagSecondary}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createTagPrimary')}
                        onSubmitForm={this.formSubmit("createTagSecondary")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createTagSecondary')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormCheckBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop, classes.tagInputs)} style={{ flexDirection: 'row' }}>
                                    <InputLabel htmlFor="tagSecondary" shrink={true} className={classes.textForLabelPopup}>tag <sup className={classes.font1_0}>secondary</sup></InputLabel>
                                    <TextField
                                        id="createAssesseeTagSecondaryDefault"
                                        label=" "
                                        type="text"
                                        defaultValue="xxxx"
                                        className={classes.textField}
                                        disabled={true}
                                        autoComplete="off"
                                        InputProps={{
                                            disableUnderline: true,
                                            classes: {
                                                input: classes.disableUnderline,
                                            },
                                        }}
                                    />
                                    <span>-</span>
                                    <TextField
                                        id="createAssesseeTagSecondary"
                                        label=" "
                                        type="text"
                                        className={classes.textField}
                                        autoComplete="off"
                                        onChange={(e) => this.handleChange("tagSecondary", e)}
                                        defaultValue={(this.state.fields.tagSecondary) ? this.state.fields.tagSecondary : ""}

                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors["tagSecondary"]}</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                {(this.state.fields.tagSecondary) ?
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4}>sign-in</div>
                                        <div className={classes.checkedFontNew}>
                                            <Checkbox
                                                checked={this.state.signInTagSecondary}
                                                onChange={this.toggleCheckbox('signInTagSecondary', this.state.signInTagSecondary)}
                                                value={this.state.signInTagSecondary}
                                                color="default"
                                                disableRipple={true}
                                                disableFocusRipple={true}
                                                disabled={(this.state.fields.tagSecondary) ? false : true}
                                            />
                                        </div>
                                    </div> :
                                    <div className={classes.contFlex}>
                                        <div className={classes.f4Disable}>sign-in</div>
                                        <div className={classes.checkedFontNewDisable}>
                                            <Checkbox
                                                checked={this.state.signInTagSecondary}
                                                onChange={this.toggleCheckbox('signInTagSecondary', this.state.signInTagSecondary)}
                                                value={this.state.signInTagSecondary}
                                                color="default"
                                                disableRipple={true}
                                                disableFocusRipple={true}
                                                disabled={(this.state.fields.tagSecondary) ? false : true}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.createSignIn}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleClick('createTagSecondary')}
                        onSubmitForm={this.formSubmit("createSignIn")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createSignIn')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>sign-in</InputLabel>
                            </div>
                            <div className={classNames(classes.PopupFormCheckBox, classes.margin_0)}>
                                <div className={classes.contFlex}>
                                    <div className={classNames(classes.f4, classes.textForLabelPopup)}>email address<sup className={classes.font1_0}>primary</sup></div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.signInEmailPrimary}
                                            onChange={this.toggleSignInCheckbox('signInEmailPrimary', this.state.signInEmailPrimary)}
                                            value={this.state.signInEmailPrimary}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                                <div className={classes.contFlex}>
                                    <div className={classNames(classes.f4, classes.textForLabelPopup)}>tag<sup className={classes.font1_0}>primary</sup></div>
                                    <div className={classes.checkedFontNew}>
                                        <Checkbox
                                            checked={this.state.signInTagPrimary}
                                            onChange={this.toggleSignInCheckbox('signInTagPrimary', this.state.signInTagPrimary)}
                                            value={this.state.signInTagPrimary}
                                            color="default"
                                            disableRipple={true}
                                            disableFocusRipple={true}
                                        />
                                    </div>
                                </div>
                                {(this.state.fields.tagSecondary) ?
                                    <div className={classes.contFlex}>
                                        <div className={classNames(classes.f4, classes.textForLabelPopup)}>tag<sup className={classes.font1_0}>secondary</sup></div>
                                        <div className={classes.checkedFontNew}>
                                            <Checkbox
                                                checked={this.state.signInTagSecondary}
                                                onChange={this.toggleSignInCheckbox('signInTagSecondary', this.state.signInTagSecondary)}
                                                value={this.state.signInTagSecondary}
                                                color="default"
                                                disableRipple={true}
                                                disableFocusRipple={true}
                                            />
                                        </div>
                                    </div> : null}
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.confirmCreate}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleClick(this.state.lastCreateAssesseePop)}
                        classes={classes}
                        title={'create'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleClickCloseAssesseePopup('confirmCancel', 'createName'),
                                    style: classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: this.createAssesseeSubmit(this.formSubmit("confirmCreate"),this.props.createAssesseesAccount, this.handleSelectReviewFilter('openCreate', this.props.selectUserAccount, this.userObj, this.state.createMode, this.props.toggleAssesseeMobile, 'create', createInfo, this.state.createMode, this.state.createOptions, this.props.setCreateMode)),
                                    style: classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleClickCloseAssesseePopup('confirmCancel', 'createName')}
                    />
                </div>
            </div>
        )
    }
}

export default (CreateAssessee);