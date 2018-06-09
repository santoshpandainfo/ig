import React from 'react';
import classNames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import DoneAll from 'material-ui-icons/DoneAll';
import AddAll from 'material-ui-icons/Add';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/Button';
import IGPhone from './phoneInput';
import IGSelect from './select';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog'
import Paper from 'material-ui/Paper';
import Clear from 'material-ui-icons/Clear';
import DoneIcon from 'material-ui-icons/Done';
import ExpansionPanel,{
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Explore from './inputDialog';
import moment from 'moment';
import Lightbox from "react-image-lightbox";
import Button from 'material-ui/Button';
import Manuscript from 'material-ui-icons/Description';
import PopUp from '../components/popup';
import Fingerprint from 'material-ui-icons/Fingerprint';
import Edit from 'material-ui-icons/Edit';
import LabelIcon from './labelIcon';
import Mail from 'material-ui-icons/Mail';
import MailOutline from 'material-ui-icons/MailOutline';

class SectionOne extends React.Component {
    state = {
        nameReview: false,
        aliasReview: false
    };

    change = (prop, show) => {
        let temp = {};
        let openList = [
            'nameReview',
            'aliasReview'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    handleNameChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }

    render() {
        let {classes} = this.props;

        return (
            <div>
                <div
                    className={classes.FormBox}
                >
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel
                            htmlFor="name-input"
                            onClick={this.toggle('nameReview')}
                            className={classes.showPointer}
                        >Name</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="Joachim Carvalho"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <IconButton disableRipple={true}  color="primary" className={classes.button} aria-label="">
                            <DoneAll className={classes.iconsDefault}/>
                        </IconButton>
                    </div>
                </div>
                <Dialog
                    open={this.state.nameReview}
                    onClose={this.toggle('nameReview', true)}
                    keepMounted
                >
                <DialogTitle className={classes.popupHeader}>
                    <Paper>
                        <div className={classes.popUpTitleContainerParent}>
                            <div className={classes.unitFlex}></div>
                            <div className={classes.unitFlex}></div>
                            <div className={classes.unitFlex}>
                                <IconButton><DoneIcon className={classes.iconsPopupDefault} onClick={this.toggle('nameReview', true)}/></IconButton>
                            </div>
                            <div className={classes.unitFlex}>
                                <IconButton><Clear className={classes.iconsPopupDefault} onClick={this.toggle('nameReview', true)}/></IconButton>
                            </div>
                        </div>
                    </Paper>
                </DialogTitle>
                    <DialogContent className={classes.PopupContainer}>
                        <div className={classNames(classes.PopupFormBox, classes.fixedDim)}>
                            <FormControl className={classes.formControlReviewAlias}>
                                <IGSelect
                                    list={['', 'Dr.', 'Dr. (Mrs)', 'Mr.','Mrs.','Ms.','Prof.','Prof. (Mrs)','Rev. Fr.','Rev. Sr.']}
                                    label="Prefix"/>
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="name" className={classes.topLabelFont}>{'First Name'}</InputLabel>
                                <Input className={classes.textField}
                                       id="name"
                                />
                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="other-name" className={classes.topLabelFont}>{'Other Name'}</InputLabel>
                                <Input className={classes.textField}
                                       id="other-name"
                                />
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="last-name" className={classes.topLabelFont}>{'Last Name'}</InputLabel>
                                <Input className={classes.textField}
                                       id="last-name"
                                />
                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <IGSelect
                                    list={['', 'Jr.', 'Sr.']}
                                    label="Suffix"/>
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div>
                    </DialogContent>
                </Dialog>
                <div className={classes.FormBox}
                     onClick={this.toggle('aliasReview')}
                >
                    <FormControl className={classes.formControlReviewAlias}>
                        <InputLabel
                            htmlFor="name-input"
                            className={classes.showPointer}
                        >Alias</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-alias"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                </div>
                <Dialog
                    open={this.state.aliasReview}
                    onClose={this.toggle('aliasReview', true)}
                    keepMounted
                >
                    <DialogTitle className={classes.popupHeader}>
                        <Paper>
                            <div className={classes.popUpTitleContainerParent}>
                                <div className={classes.unitFlex}></div>
                                <div className={classes.unitFlex}></div>
                                <div className={classes.unitFlex}>
                                    <IconButton><DoneIcon className={classes.iconsPopupDefault} onClick={this.toggle('aliasReview', true)}/></IconButton>
                                </div>
                                <div className={classes.unitFlex}>
                                    <IconButton><Clear className={classes.iconsPopupDefault} onClick={this.toggle('aliasReview', true)}/></IconButton>
                                </div>
                            </div>
                        </Paper>
                    </DialogTitle>
                    <DialogContent className={classes.PopupContainer}>
                        <div className={classNames(classes.PopupFormBox, classes.fixedDim)}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="alias" className={classes.topLabelFont}>{'alias'}</InputLabel>
                                <Input className={classes.textField}
                                       id="alias"
                                />
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </FormControl>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

const images = [
    "resources/images/hand.svg"
];

const rightImages = [
    "/resources/images/rightHand.png"
];

const signImages = [
    "/resources/images/sign.jpg"
];

const leftFingerArea = [
    {'title':"1",'headerTitle':"left hand 1",'fingerImg':'resources/images/finger.png','coords':"2,129,54,170"},
    {'title':"2",'headerTitle':"left hand 2",'fingerImg':'resources/images/finger.png','coords':"75,24,118,60"},
    {'title':"3",'headerTitle':"left hand 3",'fingerImg':'resources/images/finger.png','coords':"121,1,163,31"},
    {'title':"4",'headerTitle':"left hand 4",'fingerImg':'resources/images/finger.png','coords':"168,10,208,40"},
    {'title':"5",'headerTitle':"left hand 5",'fingerImg':'resources/images/finger.png','coords':"211,39,249,69"},
];

const rightFingerArea = [
    {'title':"1",'headerTitle':"right hand 1",'fingerImg':'resources/images/finger.png','coords':"210,134,259,170"},
    {'title':"2",'headerTitle':"right hand 2",'fingerImg':'resources/images/finger.png','coords':"139,25,180,58"},
    {'title':"3",'headerTitle':"right hand 3",'fingerImg':'resources/images/finger.png','coords':"92,0,134,32"},
    {'title':"4",'headerTitle':"right hand 4",'fingerImg':'resources/images/finger.png','coords':"42,10,90,44"},
    {'title':"5",'headerTitle':"right hand 5",'fingerImg':'resources/images/finger.png','coords':"2,42,40,70"},
];


class CareerInformation extends React.Component {
    state={
        documents:{
            dummy:true,
            forms:false,
            reports:false,
            resume:false,
        },
        formsPopUp:false,
        reportsPopUp:false,
        resumePopUp:false,
    };
    change = (type, prop) => {
        let option = [
            'dummy',
            'forms',
            'reports',
            'resume'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    changePopUp = prop =>{
        let temp = {};
        let opt = [
            'formsPopUp',
            'reportsPopUp',
            'resumePopUp'
        ];
        opt.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp;
    };
    handleChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };
    handleClick = prop => event => {
        this.setState(this.changePopUp(prop));
    };
    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };
    render () {
        let {classes, user, information, isCreate} = this.props;

        const stateConfig = {
            forms: {
                all: true,
                primary: false
            },
            reports: {
                all: true,
                primary: false
            },
            resume: {
                all: true,
                primary: false
            }
        };

        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];

        const visibility = {
            forms: information ?
                handleVisibility(information, 'forms') : 'none',
            reports: information ?
                handleVisibility(information, 'reports'): 'none',
            resume: information ?
                handleVisibility(information, 'resume') : 'none'
        };

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="forms-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.careerLabelRight)}>documents
                            <sup onClick={this.handleChange(this.state.documents,'forms')} className={this.state.documents.forms?
                                classes.activeLabelItem : null}>forms</sup>
                            <sup onClick={this.handleChange(this.state.documents,'reports')} className={this.state.documents.reports?
                                classes.activeLabelItem : null}>reports</sup>
                            <sup onClick={this.handleChange(this.state.documents,'resume')} className={this.state.documents.resume?
                                classes.activeLabelItem : null}>resumes</sup></InputLabel>
                    </FormControl>
                    <div className={classes.careerIcon}></div>
                    { this.state.documents.dummy?
                        <div className={classes.careerIcon}>
                            <Button disabled={true} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.forms?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('formsPopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.reports?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('reportsPopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.resume?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('resumePopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    <PopUp
                        onOpen={this.state.formsPopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('formsPopUp')}
                        title={'forms'}
                        close={this.handleRequestClose('formsPopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='form one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='form two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.reportsPopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('reportsPopUp')}
                        title={'reports'}
                        close={this.handleRequestClose('reportsPopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='report one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='report two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.resumePopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('resumePopUp')}
                        title={'resumes'}
                        close={this.handleRequestClose('resumePopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='resume one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='resume two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>
                </div>
            </div>
        )
    }
}

class ContactInformation extends React.Component {

    state={
        openEmailP:false,
        openEmailS:false,

        emailAddress:{
            primary:true,
            secondary:false,
        },
        homeAddress:{
            primary:true,
            secondary:false,
        },
        homeTelephone:{
            primary:true,
            secondary:false,
        },
        mobileTelephone:{
            primary:true,
            secondary:false,
        },
        workAddress:{
            primary:true,
            secondary:false,
        },
        workTelephone:{
            primary:true,
            secondary:false,
        }
    };

    constructor(props) {
        super(props);
        this.handleDetailClose = this.handleDetailClose.bind(this);
    }

    setPhoneNumber (telephoneObj, type, select) {
        const getPrimeSecondaryPostfix = (type, select) => select === 'primary' ?
            type + '-primary': type + '-secondary';

        let notFoundMsg,assign;

        switch (type) {
            case 'Home Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('home-telephone', select);
                    if(select == 'primary') assign = 'home1';
                    if(select == 'secondary') assign = 'home2';
                break;
            case 'Mobile Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('mobile-telephone', select);
                    if(select == 'primary') assign = 'mobile1';
                    if(select == 'secondary') assign = 'mobile2';
                break;
            case 'Work Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('work-telephone', select);
                    if(select == 'primary') assign = 'work1';
                    if(select == 'secondary') assign = 'work2';
                break;
            default: notFoundMsg = 'Not found';
        }

        let numberTypes = [
            'primary',
            'secondary'
        ];

        const getNumberFromType = (list) => {

            let foundNumber = list.find( pNumber => {
                return !pNumber.assign ?
                    false : (pNumber.assign === assign )
            });

            const formatPNumber = pNumber => {

                let numberLiteral = '';

                numberLiteral += pNumber.telephoneCountryRegion ? pNumber.telephoneCountryRegion: '';
                numberLiteral += pNumber.telephoneAreaCity ? ' (' + pNumber.telephoneAreaCity + ') ' : '';
                numberLiteral += pNumber.telephoneNumber ? pNumber.telephoneNumber : '';
                numberLiteral += pNumber.telephoneExtension ? ' extension : ' + pNumber.telephoneExtension : '';

                return numberLiteral
            };

            return foundNumber ? formatPNumber(foundNumber) : notFoundMsg

        };

        const getTelephone = (telephoneObj) => {

            if (!telephoneObj) return notFoundMsg;

            let showNumber = Array.isArray(telephoneObj) ?
                getNumberFromType(telephoneObj) : notFoundMsg;

            return showNumber
        };

        return <IGPhone fullWidth={true} phone={getTelephone(telephoneObj)}/>
    };

    handleDetailOpen = prop => () => {
        this.setState({ [prop] : true});
    };

    handleDetailClose = prop => () => {
        this.setState({ [prop] : false })
    };

    change = (type, prop) => {
        let option = [
            'primary',
            'secondary'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };

    render () {
        let {classes, user,information, isCreate, label} = this.props;

        const stateConfig ={

            emailAddressPrimary:{
                all:true,
                primary:true
            },
            emailAddressSecondary:{
                all:true,
                primary:false
            },

            homeAddressPrimary:{
                all:true,
                primary:false
            },
            homeAddressSecondary:{
                all:true,
                primary:false
            },
            homeTelephonePrimary:{
                all:true,
                primary:false
            },
            homeTelephoneSecondary:{
                all:true,
                primary:false
            },
            mobileTelephonePrimary:{
                all:true,
                primary:true
            },
            mobileTelephoneSecondary:{
                all:true,
                primary:false
            },
            workAddressPrimary:{
                all:true,
                primary:false
            },
            workAddressSecondary:{
                all:true,
                primary:false
            },
            workTelephonePrimary:{
                all:true,
                primary:false
            },
            workTelephoneSecondary:{
                all:true,
                primary:false
            },
        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            emailAddressPrimary: information ?
                handleVisibility(information, 'emailAddressPrimary') : 'none',
            emailAddressSecondary: information ?
                handleVisibility(information, 'emailAddressSecondary'): 'none',
            homeAddressPrimary: information ?
                handleVisibility(information, 'homeAddressPrimary') : 'none',
            homeAddressSecondary: information ?
                handleVisibility(information, 'homeAddressSecondary'): 'none',
            homeTelephonePrimary: information ?
                handleVisibility(information, 'homeTelephonePrimary') : 'none',
            homeTelephoneSecondary: information ?
                handleVisibility(information, 'homeTelephoneSecondary') : 'none',
            mobileTelephonePrimary: information ?
                handleVisibility(information, 'mobileTelephonePrimary') : 'none',
            mobileTelephoneSecondary: information ?
                handleVisibility(information, 'mobileTelephoneSecondary') : 'none',
            workAddressPrimary: information ?
                handleVisibility(information, 'workAddressPrimary') : 'none',
            workAddressSecondary: information ?
                handleVisibility(information, 'workAddressSecondary'): 'none',
            workTelephonePrimary: information ?
                handleVisibility(information, 'workTelephonePrimary') : 'none',
            workTelephoneSecondary: information ?
                handleVisibility(information, 'workTelephoneSecondary') : 'none'
        };
        const getEmailAddress = (emailObj,type,defaultValue) => {
            let emaiId,filterObj;
            if(_.isEmpty(emailObj)) return emaiId = defaultValue;
            filterObj = _.find(emailObj, { 'assign': type });
            if(filterObj){
                emaiId=filterObj.email                               
            }else{
                emaiId = defaultValue;
            }
            return emaiId;
        }
        const getAddress = (addressObj,type,defaultValue) => {
            let address ='',filterObj;
            if(_.isEmpty(addressObj)) return address = defaultValue;
            filterObj = _.find(addressObj, { 'assign': type });
            if(filterObj){
                address=filterObj.address                
            }else{
                address = defaultValue;
            }
            return address;

            // if (!address || (Array.isArray(address) && address.length === 0)) return notFoundMsg;

            // let userAddress = Array.isArray(address) && !isNaN(select) ?
            //     address[+select - 1] : Array.isArray(address) ?
            //         address[0]: address;

            // let addressLine = '';

            // addressLine += userAddress.address ? userAddress.address : '';
            // addressLine += userAddress.address1 ? userAddress.address1 : '';
            // addressLine += userAddress.address2 ? userAddress.address2 : '';
            // addressLine += userAddress.address3 ? userAddress.address3 : '';
            // return addressLine
        }

        const getAddress2 = (addressObj,type, defaultValue) => {
            let address ='',filterObj;
            if(_.isEmpty(addressObj)) return address = defaultValue;
            filterObj = _.find(addressObj, { 'assign': type });
            if(filterObj){
                address += filterObj.addressCity?filterObj.addressCity:'';
                address += filterObj.addressProvinceState?", "+filterObj.addressProvinceState:'';
                address += filterObj.addressPostCodeZip?" "+filterObj.addressPostCodeZip:'';
                address += filterObj.addressCountryRegion?", "+filterObj.addressCountryRegion:'';
            }else{
                address = defaultValue;
            }
            return address;
            // let notFoundMsg  = type;
            // if (!address || (Array.isArray(address) && address.length === 0)) return notFoundMsg;

            // let userAddress = Array.isArray(address) && !isNaN(select) ?
            //     address[+select - 1] : Array.isArray(address) ?
            //         address[0]: address;

            // let addressLine = '';

            // addressLine += userAddress.city ? '' + userAddress.city : '';
            // addressLine += userAddress.state ? ', ' + userAddress.state : '';
            // addressLine += userAddress.zipcode ? ' ' + userAddress.zipcode : '';
            // addressLine += userAddress.zip ? ' ' + userAddress.zip : '';
            // addressLine += userAddress.country ? ', ' + userAddress.country : '';

            // return addressLine
        }

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress,'primary')} className={this.state.emailAddress.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress,'secondary')} className={this.state.emailAddress.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>

                        { this.state.emailAddress.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={(user && user.ContactInformation.email)?getEmailAddress(user.ContactInformation.email,'email1',"email-address-primary") : "email-address-primary"}
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                        { this.state.emailAddress.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={(user && user.ContactInformation.email)?getEmailAddress(user.ContactInformation.email,'email2',"email-address-secondary") : "email-address-secondary"}
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.emailAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton> <Mail/> </IconButton>
                                </div> : null
                            }
                            { this.state.emailAddress.secondary?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><MailOutline/></IconButton>
                                </div>:null
                            }
                        </div>

                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                        </div>
                    </div>
                </div>

                <div className={classNames(classes.FormBox, classes.FormBoxNew)}>
                    <FormControl className={classNames(classes.formControlReviewTextMultiLine, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>home address
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.homeAddress,'primary')} className={this.state.homeAddress.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.homeAddress,'secondary')} className={this.state.homeAddress.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>

                        { this.state.homeAddress.primary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'home1','home-address-primary') : 'home-address-primary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'home1','home-address-primary') : 'home-address-primary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                        { this.state.homeAddress.secondary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'home2','home-address-secondary') : 'home-address-secondary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'home2','home-address-secondary') : 'home-address-secondary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.homeAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton> <Mail/> </IconButton>
                                </div> : null
                            }
                            {this.state.homeAddress.secondary ?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><MailOutline/></IconButton>
                                </div>:null
                            }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>home telephone
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.homeTelephone,'primary')} className={this.state.homeTelephone.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.homeTelephone,'secondary')} className={this.state.homeTelephone.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>
                        { this.state.homeTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Home Telephone', 'primary') : null
                        }
                        { this.state.homeTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Home Telephone', 'secondary') : null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>

                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'primary')} className={this.state.mobileTelephone.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'secondary')} className={this.state.mobileTelephone.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>
                        { this.state.mobileTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Mobile Telephone', 'primary') : null
                        }
                        { this.state.mobileTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Mobile Telephone', 'secondary') : null
                        }


                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                </div>

                <div className={classNames(classes.FormBox, classes.FormBoxNew)}>
                    <FormControl className={classNames(classes.formControlReviewTextMultiLine, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work address
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workAddress,'primary')} className={this.state.workAddress.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workAddress,'secondary')} className={this.state.workAddress.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>

                        { this.state.workAddress.primary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'work1','work-address-primary') : 'work-address-primary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'work1','work-address-primary') : 'work-address-primary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                        { this.state.workAddress.secondary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'work2','work-address-secondary', 1) : 'work-address-secondary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'work2','work-address-secondary', 1) : 'work-address-secondary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.workAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><Mail/></IconButton>
                                </div>:null
                            }
                            {this.state.workAddress.secondary ?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <MailOutline/>
                                </div>:null
                            }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work telephone
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workTelephone,'primary')} className={this.state.workTelephone.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workTelephone,'secondary')} className={this.state.workTelephone.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>
                        { this.state.workTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Work Telephone', 'primary'):null
                        }
                        { this.state.workTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Work Telephone', 'secondary'):null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CredentialInformation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            finger:{
                dummy:true,
                left:false,
                right:false,
            },
            selectedImageURL:null,
            openLeftFinger:false,
            openRightFinger:false,
            openSign:false,
            openFingerprintSecondary:false,
            fingerPrintSecondaryPopUpTitle:null,
            fingerPrintSecondaryPopUpImage:null,
            previousAction:null,
        };
    }

    change = (type, prop) => {
        let option = [
            'dummy',
            'left',
            'right'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleSignChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };
    openLightBoxImage = prop => event =>{
        this.setState({ isOpen: true, selectedImageURL:prop });
    };

    changePopUpFingerImage = (prop, panel) => {
        let temp = {};
        let openList = [
            'openLeftFinger',
            'openRightFinger',
            'openSign',
            'openFingerprintSecondary',
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp
    };
    handleClick = prop => event => {
        this.setState(this.changePopUpFingerImage(prop));
    };

    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleSecondaryPopup= (prop, title,image,previousAction) =>() => {
        this.setState(this.changePopUpFingerImage(prop));
        this.setState({fingerPrintSecondaryPopUpTitle : title, fingerPrintSecondaryPopUpImage : image, previousAction : previousAction});

    }

    render () {
        let {classes,information,isCreate} = this.props;
        const stateConfig ={

            birthmark:{
                all:true,
                primary:false
            },
                signature:{
                all:true,
                primary:false
            },
            fingerprint:{
                all:true,
                primary:false
            },


        };
        const { photoIndex, isOpen, selectedImageURL } = this.state;

        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {

            fingerprint: information ?
                handleVisibility(information, 'fingerprint'): 'none',
            signature: information ?
                handleVisibility(information, 'signature') : 'none'

        };

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.credentialBox}>
                    <div className={classNames(classes.FormBox, classes.fingerprintBox)}>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" shrink={false} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.credentialLabel)}>fingerprints
                                <sup onClick={this.handleSignChange(this.state.finger,'left')} className={this.state.finger.left?classes.activeLabelItem:null}>left hand</sup>
                                <sup onClick={this.handleSignChange(this.state.finger,'right')} className={this.state.finger.right?classes.activeLabelItem:null}>right hand</sup>
                            </InputLabel>
                        </FormControl>
                        <div className={classes.iconCredential}></div>
                        <div className={classes.iconCredential}>
                            { this.state.finger.dummy?
                                images.map((value,index) =>
                                    <Button variant="fab" key={index} mini disabled={true} className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable)} >
                                        <Fingerprint />
                                    </Button>
                                ):null
                            }
                            { this.state.finger.left?
                                images.map((value,index) =>
                                    <Button variant="fab" mini key={index} className={classNames(classes.button, classes.iconsFooterDefault)} onClick={this.handleClick('openLeftFinger')}>
                                        <Fingerprint />
                                    </Button>
                                ):null
                            }
                            { this.state.finger.right?

                                rightImages.map((value,index) =>
                                    <Button variant="fab" mini key={index} className={classNames(classes.button, classes.iconsFooterDefault)} onClick={this.handleClick('openRightFinger')}>
                                        <Fingerprint />
                                    </Button>
                                ) :null
                            }
                        </div>
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={selectedImageURL}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )}

                    <PopUp
                        onOpen={this.state.openLeftFinger}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('openLeftFinger')}
                        title={'left hand'}
                        close={this.handleRequestClose('openLeftFinger')}
                    >
                        <div className={classes.imagePopup} >


                        <img className={classes.fingerImg} src="resources/images/lhand.png" useMap="#left-fingure" />

                            <map name="left-fingure" className={classes.imageMap}>
                            {
                                leftFingerArea.map((value,index) =>
                                    <area alt="" key={index}  onClick={this.handleSecondaryPopup('openFingerprintSecondary',value.headerTitle,value.fingerImg,'openLeftFinger')} coords={value.coords} shape="rect" />
                                )
                            }
                        </map>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.openRightFinger}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        iconOptions={true}
                        previousIcon={classes.backArrow}
                        actionType={this.handleRequestClose('openRightFinger')}
                        title={'right hand'}
                        close={this.handleRequestClose('openRightFinger')}
                    >
                        <div className={classes.imagePopup} >
                            <img className={classes.fingerImg} src="resources/images/rhand.png" useMap="#right-fingure"/>
                            <map name="right-fingure" className={classes.imageMap}>
                                {
                                    rightFingerArea.map((value,index) =>
                                        <area alt="" key={index}  onClick={this.handleSecondaryPopup('openFingerprintSecondary',value.headerTitle,value.fingerImg,'openRightFinger')} coords={value.coords} shape="rect" />
                                    )
                                }
                            </map>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.openFingerprintSecondary}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        titleStyle={classes.titleLightBlue}
                        iconOptions={true}
                        actionType={(this.handleRequestClose('openFingerprintSecondary'),this.handleClick(this.state.previousAction))}
                        title={this.state.fingerPrintSecondaryPopUpTitle}
                        close={this.handleRequestClose('openFingerprintSecondary')}
                    >
                        <div className={classes.imagePopup} >
                            <img className={classes.logoImg} src={this.state.fingerPrintSecondaryPopUpImage}/>
                        </div>
                    </PopUp>



                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" shrink={false} className={classNames(classes.textForLabel, classes.credentialLabel)}>signature </InputLabel>
                    </FormControl>
                    <div className={classes.iconCredential}></div>
                    <div className={classes.iconCredential}>
                        {signImages.map((value,index) =>

                            <Button variant="fab" key={index}  mini className={classNames(classes.button, classes.iconsFooterDefault)} onClick={this.handleClick('openSign')}>
                                <Edit />
                                <span className={classes.verifiedBadge}>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                    />
                                    {/*<img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                    />*/}
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
                    <PopUp
                        onOpen={this.state.openSign}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('openSign')}
                            title={'signature'}
                        close={this.handleRequestClose('openSign')}
                    >
                        <div className={classes.imagePopup} ><img className={classes.logoImg} src="resources/images/sign.jpg"/></div>
                    </PopUp>
                    <div className={classes.FormBox}>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                <sup>citizen</sup>
                            </InputLabel>
                          <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="tag-citizen"
                                   disableUnderline={true}
                                   readOnly
                            />
                        </FormControl>
                        <div className={classes.validationIcon}>
                            <div className={classes.unitFlex}>

                            </div>

                            <div className={classNames(classes.unitFlex, classes.verifiedUser)}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PersonalInformation extends React.Component {

    state = {
        birthmarksRevise: false,
        genderRevise: false,
        birthdateRevise:false,
        socialGroupRevise:false,
        spiritualGroupRevise:false,
        community:{
            social:true,
            spiritual:false,
        },
    };

    change = (prop, show) => {
        let temp = {};
        let openList = [
            'birthmarksRevise',
            'genderRevise',
            'birthdateRevise',
            'socialGroupRevise',
            'spiritualGroupRevise'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };
    changeCommunity = (type, prop) => {
        let option = [
            'social',
            'spiritual',
            'father',
            'mother',
            'brother',
            'sister',
            'husband',
            'wife',
            'unlisted',
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleCommunityChange = (type,prop) => event => {
        this.setState(this.changeCommunity(type, prop));
    };
    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }

    setBirthPlace (input) {

        let placeOfBirth = '';

        placeOfBirth += input.birthCity ? input.birthCity : 'city';
        placeOfBirth += input.birthProvinceState ? ', ' + input.birthProvinceState : ' province-state';
        placeOfBirth += input.birthCountryRegion ? ', ' + input.birthCountryRegion : ' country-region';

        return placeOfBirth;

    }
    setSocialGroup (input){
        let socialGroup = '';
        socialGroup += input.groupSocialCountryRegion ?input.groupSocialCountryRegion : 'country-region';
        socialGroup += input.groupSocial ?' '+ input.groupSocial : ' social-community';
        return socialGroup;
    }
    setSpiritualGroup (input){
        let spiritualGroup = '';
        spiritualGroup += input.groupSpiritualCountryRegion ?input.groupSpiritualCountryRegion : 'country-region';
        spiritualGroup += input.groupSpiritual ?' '+ input.groupSpiritual : ' spiritual-community';
        return spiritualGroup;
    }

    setDate = (date, moment, type) => date && moment ?
        moment(date).format('DD/MM/YYYY') : type

    render () {
        let {classes, user,information ,isCreate} = this.props;
        const stateConfig ={

            birthdate:{
                all:true,
                primary:false
            },
            gender:{
                all:true,
                primary:true
            },
            birthplace:{
                all:true,
                primary:false
            },
            spiritualGroup:{
                all:true,
                primary:false
            },
            socialGroup:{
                all:true,
                primary:false
            },


        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            birthdate: information ?
                handleVisibility(information, 'birthdate') : 'none',
            gender: information ?
                handleVisibility(information, 'gender'): 'none',
            birthplace: information ?
                handleVisibility(information, 'birthplace') : 'none',
            spiritualGroup: information ?
                handleVisibility(information, 'spiritualGroup') : 'none',
            socialGroup: information ?
                handleVisibility(information, 'socialGroup') : 'none'

        };
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input"  className={classNames(classes.textForLabel, classes.textForLabelRight)}>birthdate</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={user.informationPersonal ?
                                   this.setDate(user.informationPersonal.birthDate, moment, 'birth-date') : 'birth-date'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                        </div>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>birthmarks</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="birthmark"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>birthplace</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={user.informationPersonal ?
                                   this.setBirthPlace(user.informationPersonal) : 'city province-state country-region'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input"  className={classNames(classes.textForLabel, classes.textForLabelRight)}>gender</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={( user && user.informationPersonal.gender) ?  user && user.informationPersonal.gender :'gender'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.community.social?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>community
                            <sup onClick={this.toggle('socialGroupRevise')} className={classNames(classes.activeLabelItem)}>social</sup>
                            <sup onClick={this.handleCommunityChange(this.state.community,'spiritual')} >spiritual</sup>
                         </InputLabel>
                        :null }

                        { this.state.community.spiritual?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>community
                            <sup onClick={this.handleCommunityChange(this.state.community,'social')} >social</sup>
                            <sup onClick={this.toggle('socialGroupRevise')} className={classNames(classes.activeLabelItem)}>spiritual</sup>
                        </InputLabel>
                        :null }

                        {this.state.community.social ?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={user.informationPersonal ? this.setSocialGroup(user.informationPersonal) : 'country-region social-community'}
                                   disableUnderline={true}
                                   readOnly
                            /> : null
                        }
                        {this.state.community.spiritual ?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={user.informationPersonal ? this.setSpiritualGroup(user.informationPersonal) : 'country-region spiritual-community'}
                                   disableUnderline={true}
                                   readOnly
                            /> : null
                        }
                    </FormControl>
                    </div>
            </div>
        )
    }
}

class AllianceInformation extends React.Component {
    state={
        guaurdianTgl:{
            primary:true,
            secondary:false,
        },
        managerTgl:{
            primary:true,
            secondary:false,
        },
        mentorTgl:{
            primary:true,
            secondary:false,
        },
        familyTgl:{
            descendant:false,
            parent:false,
            sibling:false,
            spouse:false,
        },
        familyInsideTgl:{
            daughter:false,
            son:false,
            father:false,
            mother:false,
            brother:false,
            sister:false,
            husband:false,
            wife:false,
            unlisted:false,
        },
    };
    changeFamily = (type, prop) => {
        let option = [
            'daughter',
            'son',
            'father',
            'mother',
            'brother',
            'sister',
            'husband',
            'wife',
            'unlisted',
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleFamilyInnerChange = (type,prop) => event => {
        this.setState(this.changeFamily(type, prop));
    };

    change = (type, prop) => {
        let option = [
            'primary',
            'secondary',
            'descendant',
            'parent',
            'sibling',
            'spouse'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };

    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };

    render () {
        let {classes} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>family
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'descendant')} className={this.state.familyTgl.descendant?classes.activeLabelItem:null}>descendant</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'parent')} className={this.state.familyTgl.parent?classes.activeLabelItem:null}>parent</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'sibling')} className={this.state.familyTgl.sibling?classes.activeLabelItem:null}>sibling</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'spouse')} className={this.state.familyTgl.spouse?classes.activeLabelItem:null}>spouse</sup>
                        </InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee / assessee-alliance"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.familyRight}></div>
                    <div className={classes.familyRight}>
                        {
                            this.state.familyTgl.descendant ?
                                <span className={classes.verticalLabels}>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'daughter')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.daughter?classes.activeLabelItem:null)}>daughter</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'son')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.son?classes.activeLabelItem:null)}>son</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                            </span> : null
                        }
                        {
                            this.state.familyTgl.parent ?
                                <span className={classes.verticalLabels}>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'father')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.father?classes.activeLabelItem:null)}>father</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'mother')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.mother?classes.activeLabelItem:null)}>mother</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                            </span> : null
                        }
                        {
                            this.state.familyTgl.sibling ?
                                <span className={classes.verticalLabels}>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'brother')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.brother?classes.activeLabelItem:null)}>brother</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'sister')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.sister?classes.activeLabelItem:null)}>sister</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                                </span> : null
                        }
                        {
                            this.state.familyTgl.spouse ?
                                <span className={classes.verticalLabels}>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'husband')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.husband?classes.activeLabelItem:null)}>husband</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'wife')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.wife?classes.activeLabelItem:null)}>wife</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                                </span> : null
                        }
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>guardians
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.guaurdianTgl,'primary')} className={this.state.guaurdianTgl.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.guaurdianTgl,'secondary')} className={this.state.guaurdianTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>


                        { this.state.guaurdianTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-guardian-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.guaurdianTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-guardian-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl,'primary')} className={this.state.managerTgl.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl,'secondary')} className={this.state.managerTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>

                        { this.state.managerTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-manager-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.managerTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-manager-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>

                </div>

                {/* { this.state.managerTgl.primary?
                <div className={classNames(classes.FormBox, classes.startEndDates)}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>start date</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="2/10/2015"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}> end date</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="2/10/2019"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                </div>
                :null}
                { this.state.managerTgl.secondary?
                    <div className={classNames(classes.FormBox, classes.startEndDates)}>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>start date</InputLabel>
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="2/10/2011"
                                   disableUnderline={true}
                                   readOnly
                            />
                        </FormControl>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}> end date</InputLabel>
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="2/10/2021"
                                   disableUnderline={true}
                                   readOnly
                            />
                        </FormControl>
                        <div className={classes.emptyIcon}></div>
                    </div>
                    :null} */}

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mentors
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.mentorTgl,'primary')} className={this.state.mentorTgl.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.mentorTgl,'secondary')} className={this.state.mentorTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>
                        { this.state.mentorTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-mentor-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.mentorTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-mentor-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                </div>

            </div>
        )
    }
}

class EngagementInformation extends React.Component {
    state={
        rolesTgl:{
            primary:true,
            secondary:false,
        },
        tagsTgl:{
            primary:true,
            secondary:false,
        },
        tenure:{
            startDate:true,
            endDate:false
        }
    };
    change = (type, prop) => {
        let option = [
            'primary',
            'secondary',
            'startDate',
            'endDate'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };

    render () {
        let {classes} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>nodes</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-node"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl,'primary')} className={this.state.rolesTgl.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl,'secondary')} className={this.state.rolesTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>
                        { this.state.rolesTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-role-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.rolesTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-role-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>sign-in</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-sign-in"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>status</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-status"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl,'primary')} className={this.state.tagsTgl.primary?classes.activeLabelItem:null}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl,'secondary')} className={this.state.tagsTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                        </InputLabel>

                        { this.state.tagsTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tag-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.tagsTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tag-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.tenure,'startDate')} className={this.state.tenure.startDate?classes.activeLabelItem:null}>start date</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.tenure,'endDate')} className={this.state.tenure.endDate?classes.activeLabelItem:null}>end date</sup>
                        </InputLabel>

                        { this.state.tenure.startDate?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tenure-start-date"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.tenure.endDate?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tenure-end-date"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                </div>
            </div>
        )
    }
}


class CareerInformationRevise extends React.Component {
    state={
        documents:{
            dummy:true,
            forms:false,
            reports:false,
            resume:false,
        },
        formsPopUp:false,
        reportsPopUp:false,
        resumePopUp:false,
        formRevise:false,
        reportRevise:false,
        resumeRevise:false
    };

    changePop = (prop, show) => {
        let temp = {};
        let openList = [
            'formRevise',
            'reportRevise',
            'resumeRevise',
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.changePop(prop, close ? false : !this.state[prop]))
    };

    change = (type, prop) => {
        let option = [
            'dummy',
            'forms',
            'reports',
            'resume'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };

    changePopUp = prop =>{
        let temp = {};
        let opt = [
            'formsPopUp',
            'reportsPopUp',
            'resumePopUp'
        ];
        opt.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp;
    };
    handleChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };
    handleClick = prop => event => {
        this.setState(this.changePopUp(prop));
    };
    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };
    render () {
        let {classes, user, information, isCreate} = this.props;

        const stateConfig = {
            forms: {
                all: true,
                primary: false
            },
            reports: {
                all: true,
                primary: false
            },
            resume: {
                all: true,
                primary: false
            }
        };

        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];

        const visibility = {
            forms: information ?
                handleVisibility(information, 'forms') : 'none',
            reports: information ?
                handleVisibility(information, 'reports'): 'none',
            resume: information ?
                handleVisibility(information, 'resume') : 'none'
        };

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.documents.dummy?
                            <InputLabel htmlFor="forms-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.careerLabelRight)}>documents
                                <sup onClick={this.handleChange(this.state.documents,'forms')}>forms</sup>
                                <sup onClick={this.handleChange(this.state.documents,'reports')}>reports</sup>
                                <sup onClick={this.handleChange(this.state.documents,'resume')}>resumes</sup>
                            </InputLabel>:null
                        }
                        { this.state.documents.forms?
                            <InputLabel htmlFor="forms-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.careerLabelRight)}>documents
                                <sup className={classes.activeLabelItem}>forms</sup>
                                <sup onClick={this.handleChange(this.state.documents,'reports')}>reports</sup>
                                <sup onClick={this.handleChange(this.state.documents,'resume')}>resumes</sup>
                            </InputLabel>:null
                        }
                        { this.state.documents.reports?
                            <InputLabel htmlFor="forms-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.careerLabelRight)}>documents
                                <sup onClick={this.handleChange(this.state.documents,'forms')} >forms</sup>
                                <sup className={classes.activeLabelItem}>reports</sup>
                                <sup onClick={this.handleChange(this.state.documents,'resume')} >resumes</sup>
                            </InputLabel>:null
                        }
                        { this.state.documents.resume?
                            <InputLabel htmlFor="forms-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.careerLabelRight)}>documents
                                <sup onClick={this.handleChange(this.state.documents,'forms')} >forms</sup>
                                <sup onClick={this.handleChange(this.state.documents,'reports')} >reports</sup>
                                <sup onClick={this.toggle('resumeRevise')} className={classNames(classes.activeLabelItem, classes.linkText)}>resumes</sup>
                            </InputLabel>:null
                        }
                    </FormControl>
                    <div className={classes.careerIcon}></div>
                    { this.state.documents.dummy?
                        <div className={classes.careerIcon}>
                            <Button disabled={true} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.forms?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('formsPopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.reports?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('reportsPopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    { this.state.documents.resume?
                        <div className={classes.careerIcon}>
                            <Button onClick={this.handleClick('resumePopUp')} variant="fab" mini className={classNames(classes.button, classes.iconsFooterDefault)}>
                                <Manuscript />
                            </Button>
                        </div>:null}
                    <PopUp
                        onOpen={this.state.formsPopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('formsPopUp')}
                        title={'forms'}
                        close={this.handleRequestClose('formsPopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='form one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='form two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.reportsPopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('reportsPopUp')}
                        title={'reports'}
                        close={this.handleRequestClose('reportsPopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='report one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='report two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>
                    <PopUp
                        onOpen={this.state.resumePopUp}
                        classes={classes}
                        titleStyle={classes.titleSolidBlue}
                        previousIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.handleRequestClose('resumePopUp')}
                        title={'resumes'}
                        close={this.handleRequestClose('resumePopUp')}
                    >
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='resume one'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon classes={classes} disabled={'true'} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='resume two'><Manuscript /></LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </PopUp>

                    <PopUp
                        onOpen={this.state.resumeRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('resumeRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('resumeRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>resume</InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.fileFields)}>

                                    <Button
                                        color='primary'
                                        containerElement='label' // <-- Just add me!
                                        className={classes.uploadButton}
                                    >
                                        <input type="file"  />
                                    </Button>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>
            </div>
        )
    }
}

class ContactInformationRevise extends React.Component {
    state={
        openEmailP:false,
        openEmailS:false,

        emailAdd:false,
        homeAdd:false,
        workAdd:false,
        homePhone:false,
        mobilePhone:false,
        workPhone:false,

        emailAddress:{
            primary:true,
            secondary:false,
        },
        homeAddress:{
            primary:true,
            secondary:false,
        },
        homeTelephone:{
            primary:true,
            secondary:false,
        },
        mobileTelephone:{
            primary:true,
            secondary:false,
        },
        workAddress:{
            primary:true,
            secondary:false,
        },
        workTelephone:{
            primary:true,
            secondary:false,
        },
           // email:'email'
           fields: {
            emailAddress:{
                email:'',
            },
            homeAddress:{
                    country:'',
                    state:'',
                    zip:'',
                    city:'',
                    address:'',
            },
            homeTelephone:{
                    country:'',
                    city:'',
                    telephone:'',
                    extention:''
            },
            mobileTelephone:{
                    country:'',
                    telephone:''
            },
            workAddress:{
                country:'',
                state:'',
                zip:'',
                city:'',
                address:'',
            },
            workTelephone:{
                country:'',
                city:'',
                telephone:'',
                extention:''
            },

        },
        errors: {
            emailAddress:{
                email:null,
                formIsValid:false
            },
            homeAddress:{
                    country:null,
                    state:null,
                    zip:null,
                    city:null,
                    address:null,
                    formIsValid:false
            },
            homeTelephone:{
                    country:null,
                    city:null,
                    telephone:null,
                    extention:null,
                    formIsValid:false
            },
            mobileTelephone:{
                    country:null,
                    telephone:null,
                    formIsValid:false
            },
            workAddress:{
                country:null,
                state:null,
                zip:null,
                city:null,
                address:null,
                formIsValid:false
            },
            workTelephone:{
                country:null,
                city:null,
                telephone:null,
                extention:null,
                formIsValid:false
            },

        }
    };
    handleValidation = (prop, field = null) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true
        if (field != null) {
            switch (field) {
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
                if (key == 'email') {
                    if (!(prop[key])) {
                        formIsValid = false;
                        errors["emailAddress"]["email"] = "This information is required.";
                        errors["emailAddress"]["formIsValid"] = false;                        
                    }
                    else if (typeof prop[key] !== "undefined") {
                        let lastAtPos = prop[key].lastIndexOf('@');
                        let lastDotPos = prop[key].lastIndexOf('.');

                        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && prop[key].indexOf('@@') == -1 && lastDotPos > 2 && (prop[key].length - lastDotPos) > 2)) {
                            formIsValid = false;
                            errors["emailAddress"]["email"] = "This information is invalid.";
                            errors["emailAddress"]["formIsValid"] = false;                     
                        }
                        else if (prop[key] && (lastAtPos < lastDotPos && lastAtPos > 0 && prop[key].indexOf('@@') == -1 && lastDotPos > 2 && (prop[key].length - lastDotPos) > 2)) {
                            formIsValid = true;
                            errors["emailAddress"]["email"] = null;
                            errors["emailAddress"]["formIsValid"] = true;
                        }
                    }
                }
                if (key == 'homeAddressZip') {
                     if (typeof prop[key] !== "undefined") {
                        if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                            formIsValid = false;
                            errors["homeAddress"]["zip"] = "This information is invalid.";
                            errors["homeAddress"]["formIsValid"] = false;                        
                            
                            
                        }
                        else if (prop[key] && prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                            formIsValid = true;
                            errors["homeAddress"]["zip"] = null;
                            errors["homeAddress"]["formIsValid"] = true;                        
                            
                            
                        }
                    }
                }
                if (key == 'homeAddressAddress') {
                    if (typeof prop[key] !== "undefined") {
                       if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                           formIsValid = false;
                           errors["homeAddress"]["address"] = "This information is invalid.";
                           errors["homeAddress"]["formIsValid"] = false;
                           
                           
                       }
                       else if (prop[key] && prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                           formIsValid = true;
                           errors["homeAddress"]["address"] = null;
                           errors["homeAddress"]["formIsValid"] = true;
                           
                           
                       }
                   }
               }
               if (key == 'homeTelephoneTelephone') {
                if (typeof prop[key] !== "undefined") {
                   if (!prop[key].match(/^[0-9]+$/)) {
                       formIsValid = false;
                       errors["homeTelephone"]["telephone"] = "This information is invalid.";
                       errors["homeTelephone"]["formIsValid"] = false;
                       
                       
                   }
                   else if (prop[key] && prop[key].match(/^[0-9]+$/)) {
                       formIsValid = true;
                       errors["homeTelephone"]["telephone"] = null;
                       errors["homeTelephone"]["formIsValid"] = true;
                       
                   }
               }
           }
                if (key == 'homeTelephoneExtention') {
                        if (typeof prop[key] !== "undefined") {
                        if (!prop[key].match(/^[0-9]+$/)) {
                            formIsValid = false;
                            errors["homeTelephone"]["extention"] = "This information is invalid.";
                            errors["homeTelephone"]["formIsValid"] = false;    
                        }
                        else if (prop[key] && prop[key].match(/^[0-9]+$/)) {
                            formIsValid = true;
                            errors["homeTelephone"]["extention"] = null;
                            errors["homeTelephone"]["formIsValid"] = true;                            
                            
                        }
                    }
                }
                if (key == 'workAddressZip') {
                    if (typeof prop[key] !== "undefined") {
                       if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                           formIsValid = false;
                           errors["workAddress"]["zip"] = "This information is invalid.";
                           errors["workAddress"]["formIsValid"] = false;                        
                           
                           
                       }
                       else if (prop[key] && prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                           formIsValid = true;
                           errors["workAddress"]["zip"] = null;
                           errors["workAddress"]["formIsValid"] = true;                        
                           
                           
                       }
                   }
               }
               if (key == 'workAddressAddress') {
                   if (typeof prop[key] !== "undefined") {
                      if (!prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                          formIsValid = false;
                          errors["workAddress"]["address"] = "This information is invalid.";
                          errors["workAddress"]["formIsValid"] = false;
                          
                          
                      }
                      else if (prop[key] && prop[key].match(/^[a-zA-Z0-9_@./#&-=+\s]+$/)) {
                          formIsValid = true;
                          errors["workAddress"]["address"] = null;
                          errors["workAddress"]["formIsValid"] = true;
                          
                          
                      }
                  }
              }
              if (key == 'workTelephoneTelephone') {
               if (typeof prop[key] !== "undefined") {
                  if (!prop[key].match(/^[0-9]+$/)) {
                      formIsValid = false;
                      errors["workTelephone"]["telephone"] = "This information is invalid.";
                      errors["workTelephone"]["formIsValid"] = false;
                      
                      
                  }
                  else if (prop[key] && prop[key].match(/^[0-9]+$/)) {
                      formIsValid = true;
                      errors["workTelephone"]["telephone"] = null;
                      errors["workTelephone"]["formIsValid"] = true;
                      
                  }
              }
          }
               if (key == 'workTelephoneExtention') {
                       if (typeof prop[key] !== "undefined") {
                       if (!prop[key].match(/^[0-9]+$/)) {
                           formIsValid = false;
                           errors["workTelephone"]["extention"] = "This information is invalid.";
                           errors["workTelephone"]["formIsValid"] = false;    
                       }
                       else if (prop[key] && prop[key].match(/^[0-9]+$/)) {
                           formIsValid = true;
                           errors["workTelephone"]["extention"] = null;
                           errors["workTelephone"]["formIsValid"] = true;                            
                           
                       }
                   }
               }
               if (key == 'mobileTelephoneTelephone') {
                if (typeof prop[key] !== "undefined") {
                   if (!prop[key].match(/^[0-9]+$/)) {
                       formIsValid = false;
                       errors["mobileTelephone"]["telephone"] = "This information is invalid.";
                       errors["mobileTelephone"]["formIsValid"] = false;
                       
                       
                   }
                   else if (prop[key] && prop[key].match(/^[0-9]+$/)) {
                       formIsValid = true;
                       errors["mobileTelephone"]["telephone"] = null;
                       errors["mobileTelephone"]["formIsValid"] = true;
                       
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
        let errors = this.state.errors;
        var vaildation = false;
        var { listCardsPanel } = this.props;
        switch (type) {
            case "reviseEmail":
                var obj = {
                    email: '',
                };
                obj.email = document.getElementById("reviseAssesseeEmail").value;
                fields['emailAddress']['email'] = obj.email;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("emailAdd", close ? false : !this.state["emailAdd"]));
                   errors["emailAddress"]["email"] = null;
                   this.setState({errors});
                }
                break;
            case "reviseHomeAddress":
                var obj = {
                    homeAddressZip: '',
                    homeAddresAddress:'',
                };
                obj.homeAddressZip = document.getElementById("reviseAssesseeHomeAddressZip").value;
                obj.homeAddresAddress = document.getElementById("reviseAssesseeHomeAddressAddress").value;
                fields['homeAddress']['zip'] = obj.homeAddressZip;
                fields['homeAddress']['address'] = obj.homeAddresAddress;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("homeAdd", close ? false : !this.state["homeAdd"]));
                   errors["homeAddress"]["zip"] = null;
                   errors["homeAddress"]["address"] = null;
                   this.setState({errors});

                }
                break;
            case "reviseHomeTelephone":
                var obj = {
                    homeTelephoneTelephone: '',
                    homeTelephoneExtention: '',
                };
                obj.homeTelephoneTelephone = document.getElementById("reviseAssesseeHomeTelephoneNumber").value;
                obj.homeTelephoneExtention = document.getElementById("reviseAssesseeHomeTelephoneExtention").value;
                fields["homeTelephone"]['telephone'] = obj.homeTelephoneTelephone;
                fields["homeTelephone"]['extention'] = obj.homeTelephoneExtention;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("homephone", close ? false : !this.state["homephone"]));
                   errors["homeTelephone"]["telephone"] = null;
                   errors["homeTelephone"]["extention"] = null;
                   this.setState({errors});

                }
            case "reviseMobileTelephone":
                var obj = {
                    mobileTelephoneTelephone: '',
                };
                obj.mobileTelephoneTelephone = document.getElementById("reviseAssesseeMobileTelephoneNumber").value;
                fields["mobileTelephone"]['telephone'] = obj.mobileTelephoneTelephone;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("mobilephone", close ? false : !this.state["mobilephone"]));
                   errors["mobileTelephone"]["telephone"] = null;
                   this.setState({errors});

                }
            case "reviseWorkAddress":
                var obj = {
                    workAddressZip: '',
                    workAddresAddress:'',
                };
                obj.workAddressZip = document.getElementById("workZip").value;
                obj.workAddresAddress = document.getElementById("reviseAssesseeWorkAddressAddress").value;
                fields['workAddress']['zip'] = obj.workAddressZip;
                fields['workAddress']['address'] = obj.workAddresAddress;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("workAdd", close ? false : !this.state["workAdd"]));
                   errors["workAddress"]["zip"] = null;
                   errors["workAddress"]["address"] = null;
                   this.setState({errors});

                }
                break;
            case "reviseWorkTelephone":
                var obj = {
                    workTelephoneTelephone: '',
                    workTelephoneExtention: '',
                };
                obj.workTelephoneTelephone = document.getElementById("reviseAssesseeWorkTelephoneNumber").value;
                obj.workTelephoneExtention = document.getElementById("reviseAssesseeWorkTelephoneExtention").value;
                fields["workTelephone"]['telephone'] = obj.workTelephoneTelephone;
                fields["workTelephone"]['extention'] = obj.workTelephoneExtention;
                this.setState({ fields });
                vaildation = this.handleValidation(obj, null);
                if (vaildation == true) {
                   this.setState(this.changePop("workphone", close ? false : !this.state["workphone"]));
                   errors["workTelephone"]["telephone"] = null;
                   errors["workTelephone"]["extention"] = null;
                   this.setState({errors});

                }
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

    // handleChange = event => {
    //     this.setState({ email: event.target.value });
    // };

    changePop = (prop, show) => {
        let temp = {};
        let openList = [
            'emailAdd',
            'homeAdd',
            'workAdd',
            'homePhone',
            'mobilePhone',
            'workPhone'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.changePop(prop, close ? false : !this.state[prop]))
    };

    constructor(props) {
        super(props);
        this.handleDetailClose = this.handleDetailClose.bind(this);
    }
    setPhoneNumber (telephoneObj, type, select) {
        const getPrimeSecondaryPostfix = (type, select) => select === 'primary' ?
            type + '-primary': type + '-secondary';

        let notFoundMsg,assign;

        switch (type) {
            case 'Home Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('home-telephone', select);
                if(select == 'primary') assign = 'home1';
                if(select == 'secondary') assign = 'home2';
                break;
            case 'Mobile Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('mobile-telephone', select);
                if(select == 'primary') assign = 'mobile1';
                if(select == 'secondary') assign = 'mobile2';
                break;
            case 'Work Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('work-telephone', select);
                if(select == 'primary') assign = 'work1';
                if(select == 'secondary') assign = 'work2';
                break;
            default: notFoundMsg = 'Not found';
        }

        let numberTypes = [
            'primary',
            'secondary'
        ];

        const getNumberFromType = (list) => {

            let foundNumber = list.find( pNumber => {
                return !pNumber.assign ?
                    false : (pNumber.assign === assign )
            });

            const formatPNumber = pNumber => {

                let numberLiteral = '';

                numberLiteral += pNumber.telephoneCountryRegion ? pNumber.telephoneCountryRegion: '';
                numberLiteral += pNumber.telephoneAreaCity ? ' (' + pNumber.telephoneAreaCity + ') ' : '';
                numberLiteral += pNumber.telephoneNumber ? pNumber.telephoneNumber : '';
                numberLiteral += pNumber.telephoneExtension ? ' extension : ' + pNumber.telephoneExtension : '';

                return numberLiteral
            };

            return foundNumber ? formatPNumber(foundNumber) : notFoundMsg

        };

        const getTelephone = (telephoneObj) => {

            if (!telephoneObj) return notFoundMsg;

            let showNumber = Array.isArray(telephoneObj) ?
                getNumberFromType(telephoneObj) : notFoundMsg;

            return showNumber
        };

        return <IGPhone fullWidth={true} phone={getTelephone(telephoneObj)}/>
    };

    handleDetailOpen = prop => () => {
        this.setState({ [prop] : true});
    };

    handleDetailClose = prop => () => {
        this.setState({ [prop] : false })
    };

    change = (type, prop) => {
        let option = [
            'primary',
            'secondary'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };

    render () {
        let {classes, user,information, isCreate, label} = this.props;

        const stateConfig ={

            emailAddressPrimary:{
                all:true,
                primary:true
            },
            emailAddressSecondary:{
                all:true,
                primary:false
            },

            homeAddressPrimary:{
                all:true,
                primary:false
            },
            homeAddressSecondary:{
                all:true,
                primary:false
            },
            homeTelephonePrimary:{
                all:true,
                primary:false
            },
            homeTelephoneSecondary:{
                all:true,
                primary:false
            },
            mobileTelephonePrimary:{
                all:true,
                primary:true
            },
            mobileTelephoneSecondary:{
                all:true,
                primary:false
            },
            workAddressPrimary:{
                all:true,
                primary:false
            },
            workAddressSecondary:{
                all:true,
                primary:false
            },
            workTelephonePrimary:{
                all:true,
                primary:false
            },
            workTelephoneSecondary:{
                all:true,
                primary:false
            },
        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            emailAddressPrimary: information ?
                handleVisibility(information, 'emailAddressPrimary') : 'none',
            emailAddressSecondary: information ?
                handleVisibility(information, 'emailAddressSecondary'): 'none',
            homeAddressPrimary: information ?
                handleVisibility(information, 'homeAddressPrimary') : 'none',
            homeAddressSecondary: information ?
                handleVisibility(information, 'homeAddressSecondary'): 'none',
            homeTelephonePrimary: information ?
                handleVisibility(information, 'homeTelephonePrimary') : 'none',
            homeTelephoneSecondary: information ?
                handleVisibility(information, 'homeTelephoneSecondary') : 'none',
            mobileTelephonePrimary: information ?
                handleVisibility(information, 'mobileTelephonePrimary') : 'none',
            mobileTelephoneSecondary: information ?
                handleVisibility(information, 'mobileTelephoneSecondary') : 'none',
            workAddressPrimary: information ?
                handleVisibility(information, 'workAddressPrimary') : 'none',
            workAddressSecondary: information ?
                handleVisibility(information, 'workAddressSecondary'): 'none',
            workTelephonePrimary: information ?
                handleVisibility(information, 'workTelephonePrimary') : 'none',
            workTelephoneSecondary: information ?
                handleVisibility(information, 'workTelephoneSecondary') : 'none'
        };

        const getEmailAddress = (emailObj,type,defaultValue) => {
            let emaiId,filterObj;
            if(_.isEmpty(emailObj)) return emaiId = defaultValue;
            filterObj = _.find(emailObj, { 'assign': type });
            if(filterObj){
                emaiId=filterObj.email
            }else{
                emaiId = defaultValue;
            }
            return emaiId;
        }

        const getAddress = (addressObj,type,defaultValue) => {
            let address ='',filterObj;
            if(_.isEmpty(addressObj)) return address = defaultValue;
            filterObj = _.find(addressObj, { 'assign': type });
            if(filterObj){
                address=filterObj.address
            }else{
                address = defaultValue;
            }
            return address;
        }

        const getAddress2 = (addressObj,type, defaultValue) => {
            let address ='',filterObj;
            if(_.isEmpty(addressObj)) return address = defaultValue;
            filterObj = _.find(addressObj, { 'assign': type });
            if(filterObj){
                address += filterObj.addressCity?filterObj.addressCity:'';
                address += filterObj.addressProvinceState?", "+filterObj.addressProvinceState:'';
                address += filterObj.addressPostCodeZip?" "+filterObj.addressPostCodeZip:'';
                address += filterObj.addressCountryRegion?", "+filterObj.addressCountryRegion:'';
            }else{
                address = defaultValue;
            }
            return address;
        }
        const getZip = (addressObj,type, defaultValue) => {
            let address ='',filterObj;
            if(_.isEmpty(addressObj)) return address = defaultValue;
            filterObj = _.find(addressObj, { 'assign': type });
            if(filterObj){                
                address = filterObj.addressPostCodeZip?filterObj.addressPostCodeZip:'';
            }else{
                address = defaultValue;
            }
            return address;
        }
        const getTelephoneNumber = (telephoneObj, type, select) => {
            const getPrimeSecondaryPostfix = (type, select) => select === 'primary' ?
                type + '-primary': type + '-secondary';
    
            let notFoundMsg,assign;
    
            switch (type) {
                case 'Home Telephone':
                    notFoundMsg = getPrimeSecondaryPostfix('home-telephone', select);
                    if(select == 'primary') assign = 'home1';
                    if(select == 'secondary') assign = 'home2';
                    break;
                case 'Mobile Telephone':
                    notFoundMsg = getPrimeSecondaryPostfix('mobile-telephone', select);
                    if(select == 'primary') assign = 'mobile1';
                    if(select == 'secondary') assign = 'mobile2';
                    break;
                case 'Work Telephone':
                    notFoundMsg = getPrimeSecondaryPostfix('work-telephone', select);
                    if(select == 'primary') assign = 'work1';
                    if(select == 'secondary') assign = 'work2';
                    break;
                default: notFoundMsg = 'Not found';
            }
    
            let numberTypes = [
                'primary',
                'secondary'
            ];
    
            const getNumberFromType = (list) => {
    
                let foundNumber = list.find( pNumber => {
                    return !pNumber.assign ?
                        false : (pNumber.assign === assign )
                });
    
                const formatPNumber = pNumber => {
    
                    let numberLiteral = '';
    
                    numberLiteral += pNumber.telephoneNumber ? pNumber.telephoneNumber : '';
                    
                    return numberLiteral
                };
    
                return foundNumber ? formatPNumber(foundNumber) : notFoundMsg
    
            };
            const getTelephone = (telephoneObj) => {
    
                if (!telephoneObj) return notFoundMsg;
    
                let showNumber = Array.isArray(telephoneObj) ?
                    getNumberFromType(telephoneObj) : notFoundMsg;
    
                return showNumber
            };
    
            return getTelephone(telephoneObj);
        };
        const getExtentionNumber = (telephoneObj, type, select) => {
                const getPrimeSecondaryPostfix = (type, select) => select === 'primary' ?
                    type + '-primary': type + '-secondary';
        
                let notFoundMsg,assign;
        
                switch (type) {
                    case 'Home Telephone':
                        notFoundMsg = getPrimeSecondaryPostfix('home-telephone', select);
                        if(select == 'primary') assign = 'home1';
                        if(select == 'secondary') assign = 'home2';
                        break;
                    case 'Mobile Telephone':
                        notFoundMsg = getPrimeSecondaryPostfix('mobile-telephone', select);
                        if(select == 'primary') assign = 'mobile1';
                        if(select == 'secondary') assign = 'mobile2';
                        break;
                    case 'Work Telephone':
                        notFoundMsg = getPrimeSecondaryPostfix('work-telephone', select);
                        if(select == 'primary') assign = 'work1';
                        if(select == 'secondary') assign = 'work2';
                        break;
                    default: notFoundMsg = 'Not found';
                }
        
                let numberTypes = [
                    'primary',
                    'secondary'
                ];
        
                const getNumberFromType = (list) => {
        
                    let foundNumber = list.find( pNumber => {
                        return !pNumber.assign ?
                            false : (pNumber.assign === assign )
                    });
        
                    const formatPNumber = pNumber => {
        
                        let numberLiteral = '';
        
                        numberLiteral += pNumber.telephoneExtension ? pNumber.telephoneExtension : '';
                        
                        return numberLiteral
                    };
        
                    return foundNumber ? formatPNumber(foundNumber) : notFoundMsg
        
                };
    
            const getTelephone = (telephoneObj) => {
    
                if (!telephoneObj) return notFoundMsg;
    
                let showNumber = Array.isArray(telephoneObj) ?
                    getNumberFromType(telephoneObj) : notFoundMsg;
    
                return showNumber
            };
    
            return getTelephone(telephoneObj);
        };
        

      

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.emailAddress.primary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                                <sup onClick={this.toggle('emailAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress, 'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }
                        {this.state.emailAddress.secondary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress, 'primary')} >primary</sup>
                                <sup onClick={this.toggle('emailAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }


                        { this.state.emailAddress.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={(user && user.ContactInformation.email)?getEmailAddress(user.ContactInformation.email,'email1',"email-address-primary") : "email-address-primary"}
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                        { this.state.emailAddress.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={(user && user.ContactInformation.email)?getEmailAddress(user.ContactInformation.email,'email2',"email-address-secondary") : "email-address-secondary"}
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.emailAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton> <Mail/> </IconButton>
                                </div> : null
                            }
                            { this.state.emailAddress.secondary?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><MailOutline/></IconButton>
                                </div>:null
                            }
                        </div>

                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.emailAdd}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('emailAdd')}
                        onSubmitForm={this.formSubmit("reviseEmail")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('emailAdd')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="email" className={classes.textForLabelPopup}>email address <sup>{this.state.emailAddress.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                    {this.state.emailAddress.primary ?
                                        <Input
                                            name="email"
                                            id="reviseAssesseeEmail"
                                            autoComplete="off"
                                            type="text"
                                            defaultValue={(user && user.ContactInformation.email) ? getEmailAddress(user.ContactInformation.email, 'email1', "email-address-primary") : (this.state.fields.emailAddress.email)?this.state.fields.emailAddress.email:"email-address-primary"}
                                            onChange={(e) => this.handleChange("email", e)}
                                        /> :
                                        <Input
                                            name="email"
                                            id="reviseAssesseeEmail"
                                            autoComplete="off"
                                            type="text"
                                            defaultValue={(user && user.ContactInformation.email) ? getEmailAddress(user.ContactInformation.email, 'email2', "email-address-secondary") : (this.state.fields.emailAddress.email)?this.state.fields.emailAddress.email: "email-address-secondary"}
                                            onChange={(e) => this.handleChange("email", e)}
                                        />
                                    }
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.emailAddress["email"]}</FormHelperText>                                
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classNames(classes.FormBox, classes.FormBoxNew)}>
                    <FormControl className={classNames(classes.formControlReviewTextMultiLine, classes.formControlRight)}>
                        {this.state.homeAddress.primary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>home
                                address
                                <sup onClick={this.toggle('homeAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.homeAddress, 'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }
                        {this.state.homeAddress.secondary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>home
                                address
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.homeAddress, 'primary')}>primary</sup>
                                <sup onClick={this.toggle('homeAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }

                        { this.state.homeAddress.primary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'home1','home-address-primary') : 'home-address-primary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'home1','home-address-primary') : 'home-address-primary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                        { this.state.homeAddress.secondary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'home2','home-address-secondary') : 'home-address-secondary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'home2','home-address-secondary') : 'home-address-secondary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.homeAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton> <Mail/> </IconButton>
                                </div> : null
                            }
                            {this.state.homeAddress.secondary ?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><MailOutline/></IconButton>
                                </div>:null
                            }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.homeAdd}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('homeAdd')}
                        onSubmitForm={this.formSubmit("reviseHomeAddress")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('homeAdd')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>home address <sup>{this.state.homeAddress.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Maharashtra', 'Karnataka']}
                                        label="province / state"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        label="post code / zip"
                                        className={classes.textField}
                                        name="zip"
                                        id="reviseAssesseeHomeAddressZip"
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.address) ? getZip(user.ContactInformation.address, (this.state.homeAddress.primary)?'home1':'home2', "") : (this.state.fields.homeAddress.zip)?this.state.fields.homeAddress.zip:""}
                                        onChange={(e) => this.handleChange("zip", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.homeAddress["zip"]}</FormHelperText>                                
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Mumbai', 'Pune']}
                                        label="city"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormBox, classes.heightAuto)}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeHomeAddressAddress"
                                        label="address"
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.address) ? getAddress(user.ContactInformation.address, (this.state.homeAddress.primary)?'home1':'home2', (this.state.homeAddress.primary)?'home-address-primary':'home-address-secondary') : (this.state.fields.homeAddress.address)?this.state.fields.homeAddress.address:""}
                                        onChange={(e) => this.handleChange("address", e)}
                                        className={classes.textField}
                                        multiline
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.homeAddress["address"]}</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.homeTelephone.primary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>home telephone
                                <sup onClick={this.toggle('homePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.homeTelephone, 'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }
                        {this.state.homeTelephone.secondary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>home telephone
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.homeTelephone, 'primary')} >primary</sup>
                                <sup onClick={this.toggle('homePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }

                        { this.state.homeTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Home Telephone', 'primary') : null

                        }
                        { this.state.homeTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Home Telephone', 'secondary') : null

                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.homePhone}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('homePhone')}
                        onSubmitForm={this.formSubmit("reviseHomeTelephone")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('homePhone')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>home telephone <sup>{this.state.homeTelephone.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Mumbai', 'Pune']}
                                        label="area / city"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeHomeTelephoneNumber"
                                        label="telephone number"
                                        type="number"
                                        className={classes.textField}
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.telephone) ? getTelephoneNumber(user.ContactInformation.telephone, 'Home Telephone',(this.state.homeTelephone.primary)?'primary':'secondary') : (this.state.fields.homeTelephone.telephone)?this.state.fields.homeTelephone.telephone:"telephone number"}
                                        onChange={(e) => this.handleChange("telephone", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.homeTelephone["telephone"]}</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeHomeTelephoneExtention"
                                        label="extension number"
                                        type="number"
                                        className={classes.textField}
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.telephone) ? getExtentionNumber(user.ContactInformation.telephone, 'Home Telephone',(this.state.homeTelephone.primary)?'primary':'secondary') : (this.state.fields.homeTelephone.extention)?this.state.fields.homeTelephone.extention:"extension number"}
                                        onChange={(e) => this.handleChange("extention", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.homeTelephone["extention"]}</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.mobileTelephone.primary?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                            <sup onClick={this.toggle('mobilePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'secondary')} >secondary</sup>
                        </InputLabel>:null
                        }
                        { this.state.mobileTelephone.secondary?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'primary')} >primary</sup>
                                <sup onClick={this.toggle('mobilePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }
                        { this.state.mobileTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Mobile Telephone', 'primary') : null

                        }
                        { this.state.mobileTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Mobile Telephone', 'secondary') : null

                        }


                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.mobilePhone}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('mobilePhone')}
                        onSubmitForm={this.formSubmit("reviseMobileTelephone")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('mobilePhone')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>mobile telephone <sup>{this.state.mobileTelephone.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeMobileTelephoneNumber"
                                        label="telephone number"
                                        type="number"
                                        className={classes.textField}
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.telephone) ? getTelephoneNumber(user.ContactInformation.telephone, 'Mobile Telephone',(this.state.mobileTelephone.primary)?'primary':'secondary') : (this.state.fields.mobileTelephone.telephone)?this.state.fields.mobileTelephone.telephone:"telephone number"}
                                        onChange={(e) => this.handleChange("telephone", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.mobileTelephone["telephone"]}</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classNames(classes.FormBox, classes.FormBoxNew)}>
                    <FormControl className={classNames(classes.formControlReviewTextMultiLine, classes.formControlRight)}>
                        { this.state.workAddress.primary?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work address
                            <sup onClick={this.toggle('workAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workAddress,'secondary')}>secondary</sup>
                        </InputLabel>:null
                        }
                        { this.state.workAddress.secondary?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work address
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.workAddress,'primary')}>primary</sup>
                                <sup onClick={this.toggle('workAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }

                        { this.state.workAddress.primary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'work1','work-address-primary') : 'work-address-primary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'work1','work-address-primary') : 'work-address-primary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                        { this.state.workAddress.secondary?
                            <div><Input multiline rows={2} className={classes.inputFormText}
                                        id="name-dn-input"
                                        value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                            getAddress(user.ContactInformation.address,'work2','work-address-secondary') : 'work-address-secondary'
                                        }
                                        disableUnderline={true}
                                        readOnly
                            />
                                <Input multiline rows={1} className={classes.inputFormText}
                                       id="name-dn-input"
                                       value={ (user && user.ContactInformation && user.ContactInformation.address) ?
                                           getAddress2(user.ContactInformation.address,'work2','work-address-secondary') : 'work-address-secondary'
                                       }
                                       disableUnderline={true}
                                       readOnly
                                />
                            </div>:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>
                            {this.state.workAddress.primary ?
                                <div
                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <IconButton><Mail/></IconButton>
                                </div>:null
                            }
                            {this.state.workAddress.secondary ?
                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                    <MailOutline/>
                                </div>:null
                            }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.workAdd}
                        classes={classes}
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('workAdd')}
                        onSubmitForm={this.formSubmit("reviseWorkAddress")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('workAdd')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>work address <sup>{this.state.workAddress.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Maharashtra', 'Karnataka']}
                                        label="province / state"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField                                      
                                        label="post code / zip"
                                        className={classes.textField}
                                        name="zip"
                                        id="workZip"
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.address) ? getZip(user.ContactInformation.address, (this.state.workAddress.primary)?'work1':'work2', "") : (this.state.fields.workAddress.zip)?this.state.fields.workAddress.zip:""}
                                        onChange={(e) => this.handleChange("zip", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.workAddress["zip"]}</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Mumbai', 'Pune']}
                                        label="city"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classNames(classes.PopupFormBox, classes.heightAuto)}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeWorkAddressAddress"
                                        label="address"
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.address) ? getAddress(user.ContactInformation.address, (this.state.workAddress.primary)?'work1':'work2', (this.state.workAddress.primary)?'work-address-primary':'work-address-secondary') : (this.state.fields.workAddress.address)?this.state.fields.workAddress.address:""}
                                        onChange={(e) => this.handleChange("address", e)}
                                        className={classes.textField}
                                        multiline
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.workAddress["address"]}</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.workTelephone.primary?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work telephone
                            <sup onClick={this.toggle('workPhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.workTelephone,'secondary')}>secondary</sup>
                        </InputLabel>:null
                        }
                        { this.state.workTelephone.secondary?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>work telephone
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.workTelephone,'primary')}>primary</sup>
                                <sup onClick={this.toggle('workPhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }

                        { this.state.workTelephone.primary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Work Telephone', 'primary') : null

                        }
                        { this.state.workTelephone.secondary?
                            this.setPhoneNumber(user.ContactInformation.telephone, 'Work Telephone', 'secondary') : null

                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.workPhone}
                        classes={classes}                                               
                        formCheckIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('workPhone')}
                        onSubmitForm={this.formSubmit("reviseWorkTelephone")}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('workPhone')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>work telephone <sup>{this.state.workTelephone.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Mumbai', 'Pune']}
                                        label="area / city"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeWorkTelephoneNumber"
                                        label="telephone number"
                                        type="number"
                                        className={classes.textField}
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.telephone) ? getTelephoneNumber(user.ContactInformation.telephone, 'Work Telephone',(this.state.workTelephone.primary)?'primary':'secondary') : (this.state.fields.workTelephone.telephone)?this.state.fields.workTelephone.telephone:"telephone number"}
                                        onChange={(e) => this.handleChange("telephone", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.workTelephone["telephone"]}</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="reviseAssesseeWorkTelephoneExtention"
                                        label="extension number"
                                        type="number"
                                        className={classes.textField}
                                        autoComplete="off"
                                        type="text"
                                        defaultValue={(user && user.ContactInformation.telephone) ? getExtentionNumber(user.ContactInformation.telephone, 'Work Telephone',(this.state.workTelephone.primary)?'primary':'secondary') : (this.state.fields.workTelephone.extention)?this.state.fields.workTelephone.extention:"extension number"}
                                        onChange={(e) => this.handleChange("extention", e)}
                                    />
                                </FormControl>
                                <FormHelperText className={classes.helperText}>{this.state.errors.workTelephone["extention"]}</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>
            </div>
        )
    }
}

class CredentialInformationRevise extends React.Component {
    state={
        tagRevise:false
    };

    changePop = (prop, show) => {
        let temp = {};
        let openList = [
            'tagRevise',
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.changePop(prop, close ? false : !this.state[prop]))
    };

    render () {
        let {classes,information,isCreate} = this.props;

        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel onClick={this.toggle('tagRevise')} htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>tag
                            <sup>citizen</sup>
                        </InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="tag-citizen"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}>

                        </div>

                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>

                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.tagRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('tagRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('tagRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="phone" className={classes.textForLabelPopup}>tag <sup>citizen</sup></InputLabel>
                                    <Input id="tag" name="text" value="" type="text" />
                                </FormControl>

                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>
            </div>
        )
    }
}

class PersonalInformationRevise extends React.Component {

    state = {
        birthmarksRevise: false,
        genderRevise: false,
        birthdateRevise:false,
        socialGroupRevise:false,
        spiritualGroupRevise:false,
        birthplaceRevise:false,
        community:{
            social:true,
            spiritual:false,
        },
    };

    change = (prop, show) => {
        let temp = {};
        let openList = [
            'birthmarksRevise',
            'genderRevise',
            'birthdateRevise',
            'socialGroupRevise',
            'spiritualGroupRevise',
            'birthplaceRevise'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    changeCommunity = (type, prop) => {
        let option = [
            'social',
            'spiritual',
            'father',
            'mother',
            'brother',
            'sister',
            'husband',
            'wife',
            'unlisted',
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleCommunityChange = (type,prop) => event => {
        this.setState(this.changeCommunity(type, prop));
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }

    setBirthPlace (input) {

        let placeOfBirth = '';

        placeOfBirth += input.birthCity ? input.birthCity : 'city';
        placeOfBirth += input.birthProvinceState ? ', ' + input.birthProvinceState : ' province-state';
        placeOfBirth += input.birthCountryRegion ? ', ' + input.birthCountryRegion : ' country-region';

        return placeOfBirth;

    }
    setSocialGroup (input){
        let socialGroup = '';
        socialGroup += input.groupSocialCountryRegion ?input.groupSocialCountryRegion : 'country-region';
        socialGroup += input.groupSocial ?' '+ input.groupSocial : ' social-community';
        return socialGroup;
    }
    setSpiritualGroup (input){
        let spiritualGroup = '';
        spiritualGroup += input.groupSpiritualCountryRegion ?input.groupSpiritualCountryRegion : 'country-region';
        spiritualGroup += input.groupSpiritual ?' '+ input.groupSpiritual : ' spiritual-community';
        return spiritualGroup;
    }

    setDate = (date, moment, type) => date && moment ?
        moment(date).format('DD/MM/YYYY') : type

    render () {
        let {classes, user,information ,isCreate} = this.props;
        const stateConfig ={

            birthdate:{
                all:true,
                primary:false
            },
            gender:{
                all:true,
                primary:true
            },
            birthplace:{
                all:true,
                primary:false
            },
            spiritualGroup:{
                all:true,
                primary:false
            },
            socialGroup:{
                all:true,
                primary:false
            },


        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            birthdate: information ?
                handleVisibility(information, 'birthdate') : 'none',
            gender: information ?
                handleVisibility(information, 'gender'): 'none',
            birthplace: information ?
                handleVisibility(information, 'birthplace') : 'none',
            spiritualGroup: information ?
                handleVisibility(information, 'spiritualGroup') : 'none',
            socialGroup: information ?
                handleVisibility(information, 'socialGroup') : 'none'

        };
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('birthdateRevise')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>birthdate</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={user.informationPersonal ?
                                   this.setDate(user.informationPersonal.birthDate, moment, 'birth-date') : 'birth-date'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                        <div className={classes.unitFlex}></div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                            <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>
                        </div>
                    </div>
                    <PopUp
                        onOpen={this.state.birthdateRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('birthdateRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('birthdateRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.dateFields}>
                                    <TextField
                                        id="date"
                                        label="birthdate"
                                        type="date"
                                        defaultValue="1996-05-24"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('birthmarksRevise')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>birthmarks</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="birthmark"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                    <PopUp
                        onOpen={this.state.birthmarksRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('birthmarksRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('birthmarksRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                    <TextField
                                        id="birthmarks"
                                        label="birthmarks"
                                        value="birthmark"
                                        className={classNames(classes.textForInput, classes.inputText)}
                                        margin="normal"
                                    />
                                    <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                </FormControl>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('birthplaceRevise')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>birthplace</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={user.informationPersonal ?
                                   this.setBirthPlace(user.informationPersonal) : 'city province-state country-region'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>

                    <PopUp
                        onOpen={this.state.birthplaceRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('birthplaceRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('birthplaceRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>birthplace</InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Maharashtra', 'Karnataka']}
                                        label="province / state"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Mumbai', 'Pune']}
                                        label="city"/>
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('genderRevise')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>gender</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value={( user && user.informationPersonal.gender) ?  user && user.informationPersonal.gender :'gender'}
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                    <PopUp
                        onOpen={this.state.genderRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('genderRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('genderRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'Female', 'Male', 'Unlisted']}
                                        label="gender"/>
                                </FormControl>
                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                            </div>

                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.community.social?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>community
                            <sup onClick={this.toggle('socialGroupRevise')} className={classNames(classes.activeLabelItem, classes.linkText)}>social</sup>
                            <sup onClick={this.handleCommunityChange(this.state.community,'spiritual')} >spiritual</sup>
                         </InputLabel>
                        :null }

                        { this.state.community.spiritual?
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>community
                            <sup onClick={this.handleCommunityChange(this.state.community,'social')} >social</sup>
                            <sup onClick={this.toggle('socialGroupRevise')} className={classNames(classes.activeLabelItem, classes.linkText)}>spiritual</sup>
                        </InputLabel>
                        :null }

                        {this.state.community.social ?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={user.informationPersonal ? this.setSocialGroup(user.informationPersonal) : 'country-region social-community'}
                                   disableUnderline={true}
                                   readOnly
                            /> : null
                        }
                        {this.state.community.spiritual ?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value={user.informationPersonal ? this.setSpiritualGroup(user.informationPersonal) : 'country-region spiritual-community'}
                                   disableUnderline={true}
                                   readOnly
                            /> : null
                        }
                    </FormControl>
                    <div className={classes.emptyIcon}></div>
                    <PopUp
                        onOpen={this.state.socialGroupRevise}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('socialGroupRevise')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('socialGroupRevise')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>community <sup>{ this.state.community.social? 'social' : 'spiritual' } </sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.selectFields}>
                                    <IGSelect
                                        list={['', 'India', 'USA']}
                                        label="country / region"
                                    />
                                </FormControl>
                            </div>
                            {this.state.community.social ?
                                <div className={classes.PopupFormBox}>
                                    <FormControl className={classes.selectFields}>
                                        <IGSelect
                                            list={['', 'Other Backward Class', 'Scheduled Caste', 'Scheduled Tribe', 'Unlisted']}
                                            label="social community"
                                        />
                                    </FormControl>
                                </div> : null
                            }
                            { this.state.community.spiritual?
                                <div className={classes.PopupFormBox}>
                                    <FormControl className={classes.selectFields}>
                                        <IGSelect
                                            list={['', 'Other Backward Class', 'Scheduled Caste', 'Scheduled Tribe', 'Unlisted']}
                                            label="spiritual community"
                                        />
                                    </FormControl>
                                </div>:null
                            }
                        </div>
                    </PopUp>
                </div>


            </div>
        )
    }
}

class AllianceInformationRevise extends React.Component {
    state={
        guardian:false,
        manager:false,
        mentor:false,
        startdate:false,
        enddate:false,

        guaurdianTgl:{
            primary:true,
            secondary:false,
        },
        managerTgl:{
            primary:true,
            secondary:false,
        },
        mentorTgl:{
            primary:true,
            secondary:false,
        },
        familyTgl:{
            descendant:false,
            parent:false,
            sibling:false,
            spouse:false,
        },
        familyInsideTgl:{
            daughter:false,
            son:false,
            father:false,
            mother:false,
            brother:false,
            sister:false,
            husband:false,
            wife:false,
            unlisted:false,
        },
        guardians: 'guardian',
        mentors:'mentors'
    };

    handleChange = event => {
        this.setState({ guardians: event.target.value });
        this.setState({ mentors: event.target.value });
    };

    changeFamily = (type, prop) => {
        let option = [
            'daughter',
            'son',
            'father',
            'mother',
            'brother',
            'sister',
            'husband',
            'wife',
            'unlisted',
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleFamilyInnerChange = (type,prop) => event => {
        this.setState(this.changeFamily(type, prop));
    };

    change = (type, prop) => {
        let option = [
            'primary',
            'secondary',
            'descendant',
            'parent',
            'sibling',
            'spouse'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };

    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };

    changePop = (prop, show) => {
        let temp = {};
        let openList = [
            'guardian',
            'manager',
            'mentor',
            'startdate',
            'enddate'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.changePop(prop, close ? false : !this.state[prop]))
    };

    render () {
        let {classes} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>family
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'descendant')} className={this.state.familyTgl.descendant?classes.activeLabelItem:null}>descendant</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'parent')} className={this.state.familyTgl.parent?classes.activeLabelItem:null}>parent</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'sibling')} className={this.state.familyTgl.sibling?classes.activeLabelItem:null}>sibling</sup>
                            <sup onClick={this.handlePrimarySecondaryChange(this.state.familyTgl,'spouse')} className={this.state.familyTgl.spouse?classes.activeLabelItem:null}>spouse</sup>
                        </InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee / assessee-alliance"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.familyRight}></div>
                    <div className={classes.familyRight}>
                        {
                            this.state.familyTgl.descendant ?
                                <span className={classes.verticalLabels}>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'daughter')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.daughter?classes.activeLabelItem:null)}>daughter</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'son')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.son?classes.activeLabelItem:null)}>son</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                            </span> : null
                        }
                        {
                            this.state.familyTgl.parent ?
                                <span className={classes.verticalLabels}>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'father')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.father?classes.activeLabelItem:null)}>father</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'mother')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.mother?classes.activeLabelItem:null)}>mother</span>
                                <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                            </span> : null
                        }
                        {
                            this.state.familyTgl.sibling ?
                                <span className={classes.verticalLabels}>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'brother')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.brother?classes.activeLabelItem:null)}>brother</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'sister')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.sister?classes.activeLabelItem:null)}>sister</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                                </span> : null
                        }
                        {
                            this.state.familyTgl.spouse ?
                                <span className={classes.verticalLabels}>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'husband')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.husband?classes.activeLabelItem:null)}>husband</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'wife')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.wife?classes.activeLabelItem:null)}>wife</span>
                                    <span onClick={this.handleFamilyInnerChange(this.state.familyInsideTgl,'unlisted')} className={classNames(classes.badgeSmall, this.state.familyInsideTgl.unlisted?classes.activeLabelItem:null)}>unlisted</span>
                                </span> : null
                        }
                    </div>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        { this.state.guaurdianTgl.primary?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>guardians
                                <sup onClick={this.toggle('guardian')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.guaurdianTgl,'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }
                        { this.state.guaurdianTgl.secondary?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>guardians
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.guaurdianTgl,'primary')}>primary</sup>
                                <sup onClick={this.toggle('guardian')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }


                        { this.state.guaurdianTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-guardian-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.guaurdianTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-guardian-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                    <PopUp
                        onOpen={this.state.guardian}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('guardian')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('guardian')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="guardians" className={classes.textForLabelPopup}>guardians <sup>{ this.state.guaurdianTgl.primary ? 'primary' : 'secondary' }</sup></InputLabel>
                                    <Input id="guardians" name="guardians" value={this.state.guardians} onChange={this.handleChange} type="text" />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.managerTgl.primary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'secondary')}>secondary</sup>
                            </InputLabel> : null
                        }
                        {this.state.managerTgl.secondary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'primary')}>primary</sup>
                                <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel> : null
                        }

                        { this.state.managerTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-manager-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.managerTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-manager-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                    <PopUp
                        onOpen={this.state.manager}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('manager')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('manager')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>manager <sup>{ this.state.managerTgl.primary ? 'primary' : 'secondary' }</sup></InputLabel>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classes.inputFields}>
                                     <IGSelect
                                        id="date"
                                        list={['']}
                                        label="managers"
                                        autoComplete="off"
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            {/* <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="startdate"
                                        type="date"
                                        defaultValue="1996-05-24"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="enddate"
                                        type="date"
                                        defaultValue="1996-05-24"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div> */}
                        </div>
                    </PopUp>

                </div>
                {/* { this.state.managerTgl.primary?
                <div className={classNames(classes.FormBox, classes.startEndDates)}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="2/10/2015"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="2/10/2019"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.emptyIcon}></div>

                </div>
                    :null
                }
                { this.state.managerTgl.secondary?
                    <div className={classNames(classes.FormBox, classes.startEndDates)}>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="2/10/2015"
                                   disableUnderline={true}
                                   readOnly
                            />
                        </FormControl>
                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                            <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="2/10/2019"
                                   disableUnderline={true}
                                   readOnly
                            />
                        </FormControl>
                        <div className={classes.emptyIcon}></div>

                    </div>
                    :null
                } */}

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.mentorTgl.primary ?
                            <InputLabel htmlFor="name-input"  className={classNames(classes.textForLabel, classes.textForLabelRight)}>mentors
                                <sup onClick={this.toggle('mentor')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.mentorTgl, 'secondary')}                             >secondary</sup>
                            </InputLabel> : null
                        }
                        {this.state.mentorTgl.secondary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mentors
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.mentorTgl, 'primary')}>primary</sup>
                                <sup onClick={this.toggle('mentor')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel> : null
                        }

                        { this.state.mentorTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-mentor-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.mentorTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-mentor-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }

                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                    <PopUp
                        onOpen={this.state.mentor}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('mentor')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('mentor')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="mentors" className={classes.textForLabelPopup}>mentors <sup>{ this.state.mentorTgl.primary ? "primary" : "secondary" }</sup></InputLabel>
                                    <Input id="mentors" name="text" value={this.state.mentors} onChange={this.handleChange} type="text" />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

            </div>
        )
    }
}

class EngagementInformationRevise extends React.Component {
    state={
        groups:false,
        nodes:false,
        roles:false,
        signn:false,
        status:false,
        tag:false,
        tenure:false,
        todayDate:moment(new Date()).format('YYYY-MM-DD'),

        rolesTgl:{
            primary:true,
            secondary:false,
        },
        tagsTgl:{
            primary:true,
            secondary:false,
        },
        tenureTgl:{
            startDate:true,
            endDate:false
        }
    };
    change = (type, prop) => {
        let option = [
            'primary',
            'secondary',
            'startDate',
            'endDate'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.change(type, prop));
    };


    changePop = (prop, show) => {
        let temp = {};
        let openList = [
            'groups' ,
            'nodes',
            'roles',
            'signn',
            'status',
            'tag',
            'tenure'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.changePop(prop, close ? false : !this.state[prop]))
    };

    render () {
        let {classes} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('groups')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.groups}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('groups')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('groups')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="groups"
                                        type="text"
                                        defaultValue="groups"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('nodes')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>nodes</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-node"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.nodes}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('nodes')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('nodes')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="nodes"
                                        type="text"
                                        defaultValue="nodes"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.rolesTgl.primary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }
                        {this.state.rolesTgl.secondary ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'primary')}>primary</sup>
                                <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>

                            </InputLabel>:null
                        }

                        { this.state.rolesTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-role-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.rolesTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-role-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.roles}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('roles')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('roles')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="roles" className={classes.textForLabelPopup}>roles <sup>{this.state.rolesTgl.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                    <Input id="roles" name="text" value="" type="text" />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('signn')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>sign-in</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-sign-in"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.signn}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('signn')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('signn')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="signn"
                                        type="text"
                                        defaultValue="signn"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" onClick={this.toggle('status')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>status</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-status"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.status}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('status')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('status')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                    <TextField
                                        id="date"
                                        label="status"
                                        type="text"
                                        defaultValue="status"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>

                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.tagsTgl.primary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                <sup onClick={this.toggle('tag')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'secondary')}>secondary</sup>
                            </InputLabel>:null
                        }

                        {this.state.tagsTgl.secondary ?
                            <InputLabel htmlFor="name-input"
                                        className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'primary')}>primary</sup>
                                <sup onClick={this.toggle('tag')}  className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                            </InputLabel>:null
                        }

                        { this.state.tagsTgl.primary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tag-primary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.tagsTgl.secondary?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tag-secondary"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                        {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                    </div>
                    <PopUp
                        onOpen={this.state.tag}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('tag')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('tag')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.inputFields, classes.tagInputs)} style={{flexDirection:'row'}}>
                                    <TextField
                                        id="date"
                                        label="tag"
                                        type="text"
                                        defaultValue="xxxxxx"
                                        className={classes.textField}
                                        disabled={"disabled"}
                                    />
                                    <span>-</span>
                                    <TextField
                                        id="date1"
                                        label=" "
                                        type="text"
                                        defaultValue="yyyyyy"
                                        className={classes.textField}
                                    />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                </div>
                            </div>
                    </PopUp>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        {this.state.tenureTgl.startDate ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                                <sup onClick={this.toggle('tenure')} className={classNames(classes.activeLabelItem, classes.linkText)}>start date</sup>
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.tenureTgl, 'endDate')}>end date</sup>
                            </InputLabel>:null
                        }
                        {this.state.tenureTgl.endDate ?
                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                                <sup onClick={this.handlePrimarySecondaryChange(this.state.tenureTgl, 'startDate')}>start date</sup>
                                <sup onClick={this.toggle('tenure')} className={classNames(classes.activeLabelItem, classes.linkText)}>end date</sup>

                            </InputLabel>:null
                        }

                        { this.state.tenureTgl.startDate?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tenure-start-date"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                        { this.state.tenureTgl.endDate?
                            <Input className={classes.inputFormLabel}
                                   id="name-dn-input"
                                   value="assessee-tenure-end-date"
                                   disableUnderline={true}
                                   readOnly
                            />:null
                        }
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                    <PopUp
                        onOpen={this.state.tenure}
                        classes={classes}
                        checkIcon={classes.backArrow}
                        iconOptions={true}
                        actionType={this.toggle('tenure')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'information'}
                        close={this.toggle('tenure')}>
                        <div className={classes.revisePopupContent}>
                            <div className={classes.PopupFormBox}>
                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                    <InputLabel htmlFor="tenure" shrink={true} className={classes.textForLabelPopup}>tenure <sup>{this.state.tenureTgl.startDate ? 'start date' : 'end date'}</sup></InputLabel>
                                    <Input
                                        id="tenure"
                                        name="text"
                                        defaultValue={this.state.todayDate}
                                        type="date"
                                     />
                                </FormControl>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </div>
                        </div>
                    </PopUp>
                </div>
            </div>
        )
    }
}

class ManagementInformation extends React.Component {
    render () {
        let {classes} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assessees</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assessees groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessee-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assessments</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessment"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assessments groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessment-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assignments</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assignment"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Assignments groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="assessment-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Associates</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="associate"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>
                <div className={classes.FormBox}>
                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                        <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>Associates groups</InputLabel>
                        <Input className={classes.inputFormLabel}
                               id="name-dn-input"
                               value="associate-group"
                               disableUnderline={true}
                               readOnly
                        />
                    </FormControl>
                    <div className={classes.validationIcon}>
                    </div>
                </div>

            </div>
        )
    }
}

class KeyInformation extends React.Component{
    constructor(props) {
        super(props);
        this.handleDetailClose = this.handleDetailClose.bind(this);
    }
    state={
        openEmailP:false,
        openEmailS:false,
        genderRevise: false,
        emailAddress:{
            primary:true,
            secondary:false,
        },
        homeAddress:{
            primary:true,
            secondary:false,
        },
        homeTelephone:{
            primary:true,
            secondary:false,
        },
        mobileTelephone:{
            primary:true,
            secondary:false,
        },
        workAddress:{
            primary:true,
            secondary:false,
        },
        workTelephone:{
            primary:true,
            secondary:false,
        },
        managerTgl:{
            primary:true,
            secondary:false,
        },
        rolesTgl:{
            primary:true,
            secondary:false,
        },
        tagsTgl:{
            primary:true,
            secondary:false,
        }
    };

    change = (prop, show) => {
        let temp = {};
        let openList = [
            'birthmarksRevise',
            'genderRevise',
            'birthdateRevise',
            'socialGroupRevise',
            'spiritualGroupRevise'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }



    setPhoneNumber (user, type, select) {
        const getPrimeSecondaryPostfix = (type, select) => select === 'primary' ?
            type + '-primary': type + '-secondary';

        let notFoundMsg;

        switch (type) {
            case 'Home Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('home-telephone', select);
                break;
            case 'Mobile Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('mobile-telephone', select);
                break;
            case 'Work Telephone':
                notFoundMsg = getPrimeSecondaryPostfix('work-telephone', select);
                break;
            default: notFoundMsg = 'Not found';
        }

        let numberTypes = [
            'primary',
            'secondary'
        ];

        const getNumberFromType = (list) => {

            let foundNumber = list.find( pNumber => {
                return !pNumber.title ?
                    false : (pNumber.title === type && pNumber.type === numberTypes[select - 1] )
            });

            const formatPNumber = pNumber => {

                let numberLiteral = '';

                numberLiteral += pNumber.countryCode ? pNumber.countryCode: '';
                numberLiteral += pNumber.cityCode ? ' (' + pNumber.cityCode + ')' : '';
                numberLiteral += pNumber.number ? ' ' + pNumber.number : '';
                numberLiteral += pNumber.extension ? ' ' + pNumber.extension : '';

                return numberLiteral
            };

            return foundNumber ? formatPNumber(foundNumber) : notFoundMsg

        };

        const getTelephone = (user) => {

            if (!user || !user.contactData || !user.contactData.contactNumber) return notFoundMsg;

            let showNumber = Array.isArray(user.contactData.contactNumber) ?
                getNumberFromType(user.contactData.contactNumber) : notFoundMsg;

            return showNumber
        };

        return <IGPhone fullWidth={true} phone={getTelephone(user)}/>
    };

    handleDetailOpen = prop => () => {
        this.setState({ [prop] : true});
    };

    handleDetailClose = prop => () => {
        this.setState({ [prop] : false })
    };

    changeP = (type, prop) => {
        let option = [
            'primary',
            'secondary'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.changeP(type, prop));
    };

    render(){
        const { classes, user, information, userDetail } = this.props;
        const stateConfig ={

            emailAddressPrimary:{
                all:true,
                primary:true
            },
            birthdate:{
                all:true,
                primary:false
            },
            emailAddressSecondary:{
                all:true,
                primary:false
            },
            mobileTelephonePrimary:{
                all:true,
                primary:true
            },
            mobileTelephoneSecondary:{
                all:true,
                primary:false
            },

        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            emailAddressPrimary: information ?
                handleVisibility(information, 'emailAddressPrimary') : 'none',
            gender: information ?
                handleVisibility(information, 'gender'): 'none',
            emailAddressSecondary: information ?
                handleVisibility(information, 'emailAddressSecondary'): 'none',
            mobileTelephonePrimary: information ?
                handleVisibility(information, 'mobileTelephonePrimary') : 'none',
            mobileTelephoneSecondary: information ?
                handleVisibility(information, 'mobileTelephoneSecondary') : 'none',

        };



        return(
            <div>
            {userDetail.mode === 'review' ?
            <div>

                <Paper>
                    <div className={classes.keyCard}>
                        <div className={classes.FormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress,'primary')} className={this.state.emailAddress.primary?classes.activeLabelItem:null}>primary</sup>
                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress,'secondary')} className={this.state.emailAddress.secondary?classes.activeLabelItem:null}>secondary</sup>
                                </InputLabel>

                                { this.state.emailAddress.primary?
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value={user ?
                                               user.email : "email-address-primary"}
                                           disableUnderline={true}
                                           readOnly
                                    />:null
                                }

                                { this.state.emailAddress.secondary?
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value={user && user.otherEmails[0] ?
                                               (user.otherEmails[0].email?user.otherEmails[0].email:"email-address-secondary") :"email-address-secondary"}
                                           disableUnderline={true}
                                           readOnly
                                    />:null
                                }

                            </FormControl>
                            <div className={classes.validationIcon}>
                                <div className={classes.unitFlex}>
                                    {this.state.emailAddress.primary ?
                                        <div
                                            className={classNames(classes.unitFlex, classes.selectedMail)}>
                                            <IconButton> <Mail/> </IconButton>
                                        </div> : null
                                    }
                                    { this.state.emailAddress.secondary?
                                        <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                            <IconButton><MailOutline/></IconButton>
                                        </div>:null
                                    }
                                </div>

                                <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                                    <IconButton>
                                        <img
                                            alt="Anonymous"
                                            src="/resources/images/unverified.svg"
                                            className={classes.verifiedImage}
                                        /> </IconButton>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'primary')} className={this.state.mobileTelephone.primary?classes.activeLabelItem:null}>primary</sup>
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'secondary')} className={this.state.mobileTelephone.secondary?classes.activeLabelItem:null}>secondary</sup>
                                    </InputLabel>
                                    { this.state.mobileTelephone.primary?
                                        this.setPhoneNumber(user, 'Mobile Telephone', 'primary') : null
                                    }
                                    { this.state.mobileTelephone.secondary?
                                        this.setPhoneNumber(user, 'Mobile Telephone', 'secondary') : null
                                    }

                                </FormControl>
                                <div className={classes.validationIcon}>
                                    <div className={classes.unitFlex}></div>
                                    <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                                        <IconButton>
                                            <img
                                                alt="Anonymous"
                                                src="/resources/images/verified.svg"
                                                className={classes.verifiedImage}
                                            /> </IconButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
                <Paper>
                    <div className={classes.keyCard}>
                        <div>
                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input"  className={classNames(classes.textForLabel, classes.textForLabelRight)}>gender</InputLabel>
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value={user.personalData ?
                                               user.personalData.gender : 'gender'}
                                           disableUnderline={true}
                                           readOnly
                                    />
                                </FormControl>
                                <div className={classes.emptyIcon}></div>
                            </div>
                        </div>
                    </div>
                </Paper>

            </div>
                :userDetail.mode ==='revise' ?
                    <div>
                        <Paper>
                            <div className={classes.keyCard}>
                                <div className={classes.FormBox}>
                                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                        {this.state.emailAddress.primary ?
                                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                                                <sup onClick={this.toggle('emailAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress, 'secondary')}>secondary</sup>
                                            </InputLabel>:null
                                        }
                                        {this.state.emailAddress.secondary ?
                                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>email address
                                                <sup onClick={this.handlePrimarySecondaryChange(this.state.emailAddress, 'primary')} >primary</sup>
                                                <sup onClick={this.toggle('emailAdd')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                            </InputLabel>:null
                                        }


                                        { this.state.emailAddress.primary?
                                            <Input className={classes.inputFormLabel}
                                                   id="name-dn-input"
                                                   value={user ?
                                                       user.email : "email-address-primary"}
                                                   disableUnderline={true}
                                                   readOnly
                                            />:null
                                        }

                                        { this.state.emailAddress.secondary?
                                            <Input className={classes.inputFormLabel}
                                                   id="name-dn-input"
                                                   value={user && user.otherEmails[0] ?
                                                       (user.otherEmails[0].email?user.otherEmails[0].email:"email-address-secondary") :"email-address-secondary"}
                                                   disableUnderline={true}
                                                   readOnly
                                            />:null
                                        }

                                    </FormControl>
                                    <div className={classes.validationIcon}>
                                        <div className={classes.unitFlex}>
                                            {this.state.emailAddress.primary ?
                                                <div
                                                    className={classNames(classes.unitFlex, classes.selectedMail)}>
                                                    <IconButton> <Mail/> </IconButton>
                                                </div> : null
                                            }
                                            { this.state.emailAddress.secondary?
                                                <div className={classNames(classes.unitFlex, classes.selectedMail)}>
                                                    <IconButton><MailOutline/></IconButton>
                                                </div>:null
                                            }
                                        </div>

                                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                                            <IconButton>
                                                <img
                                                    alt="Anonymous"
                                                    src="/resources/images/unverified.svg"
                                                    className={classes.verifiedImage}
                                                /> </IconButton>
                                        </div>
                                    </div>
                                    <PopUp
                                        onOpen={this.state.emailAdd}
                                        classes={classes}
                                        checkIcon={classes.backArrow}
                                        iconOptions={true}
                                        actionType={this.toggle('emailAdd')}
                                        titleStyle={classes.titleSolidBlue}
                                        title={'assignment'}
                                        badge={true}
                                        badgeStyle={classes.font1_0}
                                        badgeText={'information'}
                                        close={this.toggle('emailAdd')}>
                                        <div className={classes.revisePopupContent}>
                                            <div className={classes.PopupFormBox}>
                                                <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                                    <InputLabel htmlFor="email" className={classes.textForLabelPopup}>email address <sup>{this.state.emailAddress.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                                    <Input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                                </FormControl>
                                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>This information is required.</FormHelperText>
                                                {/*<FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>*/}
                                            </div>
                                        </div>
                                    </PopUp>
                                </div>
                                <div className={classes.FormBox}>
                                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                        { this.state.mobileTelephone.primary?
                                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                                                <sup onClick={this.toggle('mobilePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'secondary')} >secondary</sup>
                                            </InputLabel>:null
                                        }
                                        { this.state.mobileTelephone.secondary?
                                            <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>mobile telephone
                                                <sup onClick={this.handlePrimarySecondaryChange(this.state.mobileTelephone,'primary')} >primary</sup>
                                                <sup onClick={this.toggle('mobilePhone')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                            </InputLabel>:null
                                        }
                                        { this.state.mobileTelephone.primary?
                                            this.setPhoneNumber(user, 'Mobile Telephone', 'primary') : null
                                        }
                                        { this.state.mobileTelephone.secondary?
                                            this.setPhoneNumber(user, 'Mobile Telephone', 'secondary') : null
                                        }


                                    </FormControl>
                                    <div className={classes.validationIcon}>
                                        <div className={classes.unitFlex}></div>
                                        <div className={classNames(classes.unitFlex, classes.verifiedUser)}>
                                            <IconButton>
                                                <img
                                                    alt="Anonymous"
                                                    src="/resources/images/verified.svg"
                                                    className={classes.verifiedImage}
                                                /> </IconButton>
                                            {/*<IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    className={classes.verifiedImage}
                                /> </IconButton>*/}
                                        </div>
                                    </div>
                                    <PopUp
                                        onOpen={this.state.mobilePhone}
                                        classes={classes}
                                        checkIcon={classes.backArrow}
                                        iconOptions={true}
                                        actionType={this.toggle('mobilePhone')}
                                        titleStyle={classes.titleSolidBlue}
                                        title={'assessee'}
                                        close={this.toggle('mobilePhone')}>
                                        <div className={classes.revisePopupContent}>
                                            <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                                <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>mobile telephone <sup>{this.state.mobileTelephone.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                            </div>
                                            <div className={classes.PopupFormBox}>
                                                <FormControl className={classes.selectFields}>
                                                    <IGSelect
                                                        list={['', 'India', 'USA']}
                                                        label="country / region"/>
                                                </FormControl>
                                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                            </div>
                                            <div className={classes.PopupFormBox}>
                                                <FormControl className={classes.inputFields}>
                                                    <TextField
                                                        id="homephone"
                                                        label="telephone number"
                                                        type="number"
                                                        defaultValue="telephone number"
                                                        className={classes.textField}
                                                    />
                                                </FormControl>
                                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                            </div>
                                        </div>
                                    </PopUp>
                                </div>


                            </div>
                        </Paper>
                        <Paper>
                            <div className={classes.keyCard}>
                                <div className={classes.FormBox}>
                                    <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                        <InputLabel htmlFor="name-input" onClick={this.toggle('genderRevise')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>gender</InputLabel>
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value={user.personalData ?
                                                   user.personalData.gender : 'gender'}
                                               disableUnderline={true}
                                               readOnly
                                        />
                                    </FormControl>
                                    <div className={classes.emptyIcon}></div>
                                    <PopUp
                                        onOpen={this.state.genderRevise}
                                        classes={classes}
                                        checkIcon={classes.backArrow}
                                        iconOptions={true}
                                        actionType={this.toggle('genderRevise')}
                                        titleStyle={classes.titleSolidBlue}
                                        title={'assessee'}
                                        close={this.toggle('genderRevise')}>
                                        <div className={classes.revisePopupContent}>
                                            <div className={classes.PopupFormBox}>
                                                <FormControl className={classes.selectFields}>
                                                    <IGSelect
                                                        list={['', 'Female', 'Male', 'Unlisted']}
                                                        label="gender"/>
                                                </FormControl>
                                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                                            </div>

                                        </div>
                                    </PopUp>
                                </div>
                            </div>
                        </Paper>

                    </div>
                    :null
            }</div>
        );
    }
}

class KeyInformationSecondary extends React.Component{
    constructor(props) {
        super(props);
        this.handleDetailClose = this.handleDetailClose.bind(this);
    }
    state={
        tenure:false,
        todayDate:moment(new Date()).format('YYYY-MM-DD'),
        managerTgl:{
            primary:true,
            secondary:false,
        },
        rolesTgl:{
            primary:true,
            secondary:false,
        },
        tagsTgl:{
            primary:true,
            secondary:false,
        },
        tenureTgl:{
            startDate:true,
            endDate:false
        }
    };

    change = (prop, show) => {
        let temp = {};
        let openList = [
            'birthmarksRevise',
            'genderRevise',
            'birthdateRevise',
            'socialGroupRevise',
            'spiritualGroupRevise',
            'startDate',
            'endDate'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = show;
        return temp
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }




    handleDetailOpen = prop => () => {
        this.setState({ [prop] : true});
    };

    handleDetailClose = prop => () => {
        this.setState({ [prop] : false })
    };

    changeP = (type, prop) => {
        let option = [
            'primary',
            'secondary',
            'startDate',
            'endDate'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handlePrimarySecondaryChange = (type,prop) => event => {
        this.setState(this.changeP(type, prop));
    };
    changeTenure = (type, prop) => {
        let option = [
            'startDate',
            'endDate'
        ];
        option.forEach(val => type[val] = false);
        type[prop] = true;
        return type
    };
    handleTenureChange = (type,prop) => event => {
        this.setState(this.changeTenure(type, prop));
    };

    render(){
        const { classes, user, information, isCreate, userDetail } = this.props;
        const stateConfig ={

            emailAddressPrimary:{
                all:true,
                primary:true
            },
            birthdate:{
                all:true,
                primary:false
            },
            emailAddressSecondary:{
                all:true,
                primary:false
            },
            mobileTelephonePrimary:{
                all:true,
                primary:true
            },
            mobileTelephoneSecondary:{
                all:true,
                primary:false
            },

        }
        const handleVisibility = (info, subSection) => !stateConfig[subSection] ?
            false : stateConfig[subSection][info];
        const visibility = {
            emailAddressPrimary: information ?
                handleVisibility(information, 'emailAddressPrimary') : 'none',
            gender: information ?
                handleVisibility(information, 'gender'): 'none',
            emailAddressSecondary: information ?
                handleVisibility(information, 'emailAddressSecondary'): 'none',
            mobileTelephonePrimary: information ?
                handleVisibility(information, 'mobileTelephonePrimary') : 'none',
            mobileTelephoneSecondary: information ?
                handleVisibility(information, 'mobileTelephoneSecondary') : 'none',

        };



        return(

            <div>
                {userDetail.mode === 'review' ?
            <div>
                <Paper>
                    <div className={classes.keyCard}>
                        <div className={classes.FormBox}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl,'primary')} className={this.state.managerTgl.primary?classes.activeLabelItem:null}>primary</sup>
                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl,'secondary')} className={this.state.managerTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                                </InputLabel>

                                { this.state.managerTgl.primary?
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-manager-primary"
                                           disableUnderline={true}
                                           readOnly
                                    />:null
                                }
                                { this.state.managerTgl.secondary?
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-manager-secondary"
                                           disableUnderline={true}
                                           readOnly
                                    />:null
                                }
                            </FormControl>
                            <div className={classes.validationIcon}>
                                {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                            </div>

                        </div>
                        {/* <div className={classNames(classes.FormBox, classes.startEndDates)}>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>start date</InputLabel>
                                <Input className={classes.inputFormLabel}
                                       id="name-dn-input"
                                       value="2/10/2015"
                                       disableUnderline={true}
                                       readOnly
                                />
                            </FormControl>
                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}> end date</InputLabel>
                                <Input className={classes.inputFormLabel}
                                       id="name-dn-input"
                                       value="2/10/2019"
                                       disableUnderline={true}
                                       readOnly
                                />
                            </FormControl>
                            <div className={classes.emptyIcon}></div>
                        </div> */}
                    </div>

                </Paper>
                <Paper>
                    <div className={classes.keyCard}>

                        <div>
                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>groups</InputLabel>
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-group"
                                           disableUnderline={true}
                                           readOnly
                                    />
                                </FormControl>
                                <div className={classes.validationIcon}>
                                </div>
                            </div>

                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>nodes</InputLabel>
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-node"
                                           disableUnderline={true}
                                           readOnly
                                    />
                                </FormControl>
                                <div className={classes.validationIcon}>
                                </div>
                            </div>

                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl,'primary')} className={this.state.rolesTgl.primary?classes.activeLabelItem:null}>primary</sup>
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl,'secondary')} className={this.state.rolesTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                                    </InputLabel>

                                    { this.state.rolesTgl.primary?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-role-primary"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }
                                    { this.state.rolesTgl.secondary?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-role-secondary"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }

                                </FormControl>
                                <div className={classes.validationIcon}>
                                </div>
                            </div>

                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>sign-in</InputLabel>
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-sign-in"
                                           disableUnderline={true}
                                           readOnly
                                    />
                                </FormControl>
                                <div className={classes.validationIcon}>
                                </div>
                            </div>

                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>status</InputLabel>
                                    <Input className={classes.inputFormLabel}
                                           id="name-dn-input"
                                           value="assessee-status"
                                           disableUnderline={true}
                                           readOnly
                                    />
                                </FormControl>
                                <div className={classes.validationIcon}>
                                </div>
                            </div>

                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl,'primary')} className={this.state.tagsTgl.primary?classes.activeLabelItem:null}>primary</sup>
                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl,'secondary')} className={this.state.tagsTgl.secondary?classes.activeLabelItem:null}>secondary</sup>
                                    </InputLabel>

                                    { this.state.tagsTgl.primary?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-tag-primary"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }
                                    { this.state.tagsTgl.secondary?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-tag-secondary"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }

                                </FormControl>
                                <div className={classes.validationIcon}>
                                    {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                </div>
                            </div>
                            <div className={classes.FormBox}>
                                <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                                        <sup onClick={this.handleTenureChange(this.state.tenureTgl,'startDate')} className={this.state.tenureTgl.startDate?classes.activeLabelItem:null}>start date</sup>
                                        <sup onClick={this.handleTenureChange(this.state.tenureTgl,'endDate')} className={this.state.tenureTgl.endDate?classes.activeLabelItem:null}>end date</sup>
                                    </InputLabel>

                                    { this.state.tenureTgl.startDate?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-tenure-start-date"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }
                                    { this.state.tenureTgl.endDate?
                                        <Input className={classes.inputFormLabel}
                                               id="name-dn-input"
                                               value="assessee-tenure-end-date"
                                               disableUnderline={true}
                                               readOnly
                                        />:null
                                    }

                                </FormControl>
                                <div className={classes.validationIcon}>
                                    {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div> : userDetail.mode ==='revise' ?
                        <div>
                            <Paper>
                                <div className={classes.keyCard}>
                                    <div className={classes.FormBox}>
                                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                            {this.state.managerTgl.primary ?
                                                <InputLabel htmlFor="name-input"
                                                            className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                                    <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'secondary')}>secondary</sup>
                                                </InputLabel> : null
                                            }
                                            {this.state.managerTgl.secondary ?
                                                <InputLabel htmlFor="name-input"
                                                            className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'primary')}>primary</sup>
                                                    <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                                </InputLabel> : null
                                            }

                                            { this.state.managerTgl.primary?
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-manager-primary"
                                                       disableUnderline={true}
                                                       readOnly
                                                />:null
                                            }
                                            { this.state.managerTgl.secondary?
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-manager-secondary"
                                                       disableUnderline={true}
                                                       readOnly
                                                />:null
                                            }

                                        </FormControl>
                                        <div className={classes.validationIcon}>
                                            {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                        </div>
                                        <PopUp
                                            onOpen={this.state.manager}
                                            classes={classes}
                                            checkIcon={classes.backArrow}
                                            iconOptions={true}
                                            actionType={this.toggle('manager')}
                                            titleStyle={classes.titleSolidBlue}
                                            title={'assessee'}
                                            close={this.toggle('manager')}>
                                            <div className={classes.revisePopupContent}>
                                                {/* <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                                    <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>manager <sup>{ this.state.managerTgl.primary ? 'primary' : 'secondary' }</sup></InputLabel>
                                                </div> */}
                                                <div className={classes.PopupFormBox}>
                                                    <FormControl className={classes.inputFields}>
                                                        {/* <TextField
                                                            id="date"
                                                            label="managers"
                                                            type="text"
                                                            defaultValue="managers"
                                                            className={classes.textField}
                                                        /> */}
                                                        <IGSelect
                                                            id="reviseAssesseeManager"
                                                            list={['']}
                                                            label="managers"
                                                            autoComplete="off"
                                                           // defaultValue={this.state.fields.manager}
                                                            onChange={(e) => this.handleChange("manager", e)}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                </div>
                                                {/* <div className={classes.PopupFormBox}>
                                                    <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                        <TextField
                                                            id="date"
                                                            label="startdate"
                                                            type="date"
                                                            defaultValue="1996-05-24"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                </div> */}
                                                {/* <div className={classes.PopupFormBox}>
                                                    <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                        <TextField
                                                            id="date"
                                                            label="enddate"
                                                            type="date"
                                                            defaultValue="1996-05-24"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                </div> */}
                                            </div>
                                        </PopUp>

                                    </div>
                                    {/* { this.state.managerTgl.primary?
                                        <div className={classNames(classes.FormBox, classes.startEndDates)}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2015"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2019"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.emptyIcon}></div>

                                        </div>
                                        :null
                                    } */}
                                    {/* { this.state.managerTgl.secondary?
                                        <div className={classNames(classes.FormBox, classes.startEndDates)}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2015"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2019"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.emptyIcon}></div>

                                        </div>
                                        :null
                                    } */}



                                </div>
                            </Paper>
                            <Paper>
                                <div className={classes.keyCard}>
                                    <div className={classes.detailsContactContainer}>
                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('groups')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>groups</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-group"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.groups}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('groups')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('groups')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="groups"
                                                                type="text"
                                                                defaultValue="groups"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('nodes')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>nodes</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-node"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.nodes}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('nodes')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('nodes')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="nodes"
                                                                type="text"
                                                                defaultValue="nodes"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                {this.state.rolesTgl.primary ?
                                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                                        <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'secondary')}>secondary</sup>
                                                    </InputLabel>:null
                                                }
                                                {this.state.rolesTgl.secondary ?
                                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'primary')}>primary</sup>
                                                        <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>

                                                    </InputLabel>:null
                                                }

                                                { this.state.rolesTgl.primary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-role-primary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                                { this.state.rolesTgl.secondary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-role-secondary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.roles}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('roles')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('roles')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                                            <InputLabel htmlFor="roles" className={classes.textForLabelPopup}>roles <sup>{this.state.rolesTgl.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                                            <Input id="roles" name="text" value="" type="text" />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('signn')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>sign-in</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-sign-in"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.signn}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('signn')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('signn')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="signn"
                                                                type="text"
                                                                defaultValue="signn"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('status')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>status</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-status"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.status}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('status')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('status')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="status"
                                                                type="text"
                                                                defaultValue="status"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                {this.state.tagsTgl.primary ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                                        <sup className={classes.activeLabelItem}>primary</sup>
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'secondary')}
                                                        >secondary</sup>
                                                    </InputLabel>:null
                                                }

                                                {this.state.tagsTgl.secondary ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'primary')}>primary</sup>
                                                        <sup onClick={this.toggle('tag')}  className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                                    </InputLabel>:null
                                                }

                                                { this.state.tagsTgl.primary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tag-primary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                                { this.state.tagsTgl.secondary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tag-secondary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                                {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                </div>
                            </div>

                             <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                {this.state.tenureTgl.startDate ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                                                        <sup onClick={this.toggle('tenure')}  className={classNames(classes.activeLabelItem, classes.linkText)}>start date</sup>
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tenureTgl, 'endDate')}
                                                        >end date</sup>
                                                    </InputLabel>:null
                                                }

                                                {this.state.tenureTgl.endDate ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tenure
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tenureTgl, 'startDate')}>start date</sup>
                                                        <sup onClick={this.toggle('tenure')}  className={classNames(classes.activeLabelItem, classes.linkText)}>end date</sup>
                                                    </InputLabel>:null
                                                }

                                                { this.state.tenureTgl.startDate?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tenure-start-date"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                                { this.state.tenureTgl.endDate?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tenure-end-date"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                            </FormControl>
                                            <PopUp
                                                onOpen={this.state.tenure}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('tenure')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('tenure')}>
                                               <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                                            <InputLabel htmlFor="tenure" shrink={true} className={classes.textForLabelPopup}>tenure <sup>{this.state.tenureTgl.startDate ? 'start date' : 'end date'}</sup></InputLabel>
                                                            <Input
                                                                id="tenure"
                                                                name="text"
                                                                defaultValue={this.state.todayDate}
                                                                type="date"
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>



                        </div>
                    </div>
                </Paper>
            </div> : userDetail.mode ==='revise' ?
                        <div>
                            <Paper>
                                <div className={classes.keyCard}>
                                    <div className={classes.FormBox}>
                                        <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                            {this.state.managerTgl.primary ?
                                                <InputLabel htmlFor="name-input"
                                                            className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                                    <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'secondary')}>secondary</sup>
                                                </InputLabel> : null
                                            }
                                            {this.state.managerTgl.secondary ?
                                                <InputLabel htmlFor="name-input"
                                                            className={classNames(classes.textForLabel, classes.textForLabelRight)}>managers
                                                    <sup onClick={this.handlePrimarySecondaryChange(this.state.managerTgl, 'primary')}>primary</sup>
                                                    <sup onClick={this.toggle('manager')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                                </InputLabel> : null
                                            }

                                            { this.state.managerTgl.primary?
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-manager-primary"
                                                       disableUnderline={true}
                                                       readOnly
                                                />:null
                                            }
                                            { this.state.managerTgl.secondary?
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-manager-secondary"
                                                       disableUnderline={true}
                                                       readOnly
                                                />:null
                                            }

                                        </FormControl>
                                        <div className={classes.validationIcon}>
                                            {/*<IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                        </div>
                                        <PopUp
                                            onOpen={this.state.manager}
                                            classes={classes}
                                            checkIcon={classes.backArrow}
                                            iconOptions={true}
                                            actionType={this.toggle('manager')}
                                            titleStyle={classes.titleSolidBlue}
                                            title={'assessee'}
                                            close={this.toggle('manager')}>
                                            <div className={classes.revisePopupContent}>
                                                <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                                                    <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>manager <sup>{ this.state.managerTgl.primary ? 'primary' : 'secondary' }</sup></InputLabel>
                                                </div>
                                                <div className={classes.PopupFormBox}>
                                                    <FormControl className={classes.inputFields}>
                                                        <TextField
                                                            id="date"
                                                            label="managers"
                                                            type="text"
                                                            defaultValue="managers"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                </div>
                                                <div className={classes.PopupFormBox}>
                                                    <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                        <TextField
                                                            id="date"
                                                            label="startdate"
                                                            type="date"
                                                            defaultValue="1996-05-24"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                </div>
                                                <div className={classes.PopupFormBox}>
                                                    <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                        <TextField
                                                            id="date"
                                                            label="enddate"
                                                            type="date"
                                                            defaultValue="1996-05-24"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                </div>
                                            </div>
                                        </PopUp>

                                    </div>
                                    { this.state.managerTgl.primary?
                                        <div className={classNames(classes.FormBox, classes.startEndDates)}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2015"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2019"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.emptyIcon}></div>

                                        </div>
                                        :null
                                    }
                                    { this.state.managerTgl.secondary?
                                        <div className={classNames(classes.FormBox, classes.startEndDates)}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>start date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2015"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('manager')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}> end date</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="2/10/2019"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.emptyIcon}></div>

                                        </div>
                                        :null
                                    }
                                </div>
                            </Paper>
                            <Paper>
                                <div className={classes.keyCard}>
                                    <div className={classes.detailsContactContainer}>
                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('groups')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>groups</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-group"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.groups}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('groups')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('groups')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="groups"
                                                                type="text"
                                                                defaultValue="groups"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('nodes')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>nodes</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-node"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.nodes}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('nodes')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('nodes')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="nodes"
                                                                type="text"
                                                                defaultValue="nodes"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                {this.state.rolesTgl.primary ?
                                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                                        <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>primary</sup>
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'secondary')}>secondary</sup>
                                                    </InputLabel>:null
                                                }
                                                {this.state.rolesTgl.secondary ?
                                                    <InputLabel htmlFor="name-input" className={classNames(classes.textForLabel, classes.textForLabelRight)}>roles
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.rolesTgl, 'primary')}>primary</sup>
                                                        <sup onClick={this.toggle('roles')} className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>

                                                    </InputLabel>:null
                                                }

                                                { this.state.rolesTgl.primary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-role-primary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                                { this.state.rolesTgl.secondary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-role-secondary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.roles}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('roles')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('roles')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControl, classes.inputLabelPop)}>
                                                            <InputLabel htmlFor="roles" className={classes.textForLabelPopup}>roles <sup>{this.state.rolesTgl.primary ? 'primary' : 'secondary'}</sup></InputLabel>
                                                            <Input id="roles" name="text" value="" type="text" />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('signn')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>sign-in</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-sign-in"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.signn}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('signn')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('signn')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="signn"
                                                                type="text"
                                                                defaultValue="signn"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                <InputLabel htmlFor="name-input" onClick={this.toggle('status')} className={classNames(classes.textForLabel, classes.textForLabelRight, classes.linkText)}>status</InputLabel>
                                                <Input className={classes.inputFormLabel}
                                                       id="name-dn-input"
                                                       value="assessee-status"
                                                       disableUnderline={true}
                                                       readOnly
                                                />
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                            </div>
                                            <PopUp
                                                onOpen={this.state.status}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('status')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('status')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.formControlReviewAlias, classes.dateFields)}>
                                                            <TextField
                                                                id="date"
                                                                label="status"
                                                                type="text"
                                                                defaultValue="status"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>

                                        <div className={classes.FormBox}>
                                            <FormControl className={classNames(classes.formControlReviewName, classes.formControlRight)}>
                                                {this.state.tagsTgl.primary ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                                        <sup className={classes.activeLabelItem}>primary</sup>
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'secondary')}
                                                        >secondary</sup>
                                                    </InputLabel>:null
                                                }

                                                {this.state.tagsTgl.secondary ?
                                                    <InputLabel htmlFor="name-input"
                                                                className={classNames(classes.textForLabel, classes.textForLabelRight)}>tag
                                                        <sup onClick={this.handlePrimarySecondaryChange(this.state.tagsTgl, 'primary')}>primary</sup>
                                                        <sup onClick={this.toggle('tag')}  className={classNames(classes.activeLabelItem, classes.linkText)}>secondary</sup>
                                                    </InputLabel>:null
                                                }

                                                { this.state.tagsTgl.primary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tag-primary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                                { this.state.tagsTgl.secondary?
                                                    <Input className={classes.inputFormLabel}
                                                           id="name-dn-input"
                                                           value="assessee-tag-secondary"
                                                           disableUnderline={true}
                                                           readOnly
                                                    />:null
                                                }
                                            </FormControl>
                                            <div className={classes.validationIcon}>
                                                {/* <IconButton disableRipple={true} color="primary" className={classes.button} aria-label="Add to shopping cart">
                            <AddAll className={classes.iconsDefault}/>
                        </IconButton>*/}
                                            </div>
                                            <PopUp
                                                onOpen={this.state.tag}
                                                classes={classes}
                                                checkIcon={classes.backArrow}
                                                iconOptions={true}
                                                actionType={this.toggle('tag')}
                                                titleStyle={classes.titleSolidBlue}
                                                title={'assessee'}
                                                close={this.toggle('tag')}>
                                                <div className={classes.revisePopupContent}>
                                                    <div className={classes.PopupFormBox}>
                                                        <FormControl className={classNames(classes.inputFields, classes.tagInputs)} style={{flexDirection:'row'}}>
                                                            <TextField
                                                                id="date"
                                                                label="tag"
                                                                type="text"
                                                                defaultValue="xxxxxx"
                                                                className={classes.textField}
                                                                disabled={"disabled"}
                                                            />
                                                            <span>-</span>
                                                            <TextField
                                                                id="date1"
                                                                label=" "
                                                                type="text"
                                                                defaultValue="yyyyyy"
                                                                className={classes.textField}
                                                            />
                                                        </FormControl>
                                                        <FormHelperText className={classes.helperText}>hint/error-message</FormHelperText>
                                                    </div>
                                                </div>
                                            </PopUp>
                                        </div>
                                        <PopUp
                                            onOpen={this.state.tag}
                                            classes={classes}
                                            checkIcon={classes.backArrow}
                                            iconOptions={true}
                                            actionType={this.toggle('tag')}
                                            titleStyle={classes.titleSolidBlue}
                                            title={'assessee'}
                                            close={this.toggle('tag')}>
                                            <div className={classes.revisePopupContent}>
                                                <div className={classes.PopupFormBox}>
                                                    <FormControl className={classNames(classes.inputFields, classes.tagInputs)} style={{flexDirection:'row'}}>
                                                        <TextField
                                                            id="date"
                                                            label="tag"
                                                            type="text"
                                                            defaultValue="xxxxxx"
                                                            className={classes.textField}
                                                            disabled={"disabled"}
                                                        />
                                                        <span>-</span>
                                                        <TextField
                                                            id="date1"
                                                            label=" "
                                                            type="text"
                                                            defaultValue="yyyyyy"
                                                            className={classes.textField}
                                                        />
                                                    </FormControl>
                                                    <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                                                </div>
                                            </div>
                                        </PopUp>
                                    </div>
                                </div>

                            </Paper>
                        </div>
                        :null}
                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                            {/*</Paper>*/}
                        </div>


        );
    }
}

class SectionB extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ?
                panel : false,
        });
    };

    render() {
        const { classes, user, information, isCreate, userDetail } = this.props;
        const { expanded } = this.state;



        return (
            <div className={classes.sectionContainer}>
                { userDetail.mode === 'review' ?
                <div className={classes}>
                    <ExpansionPanel expanded={expanded === 'career'} onChange={this.handleChange('career')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'career'?classes.expandedPanel:null))}>
                            <div className={classes}>career</div>
                        </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.accordionDetails}>
                                <CareerInformation isCreate={isCreate} classes={classes} user={user} information={information}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'contact'} onChange={this.handleChange('contact')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'contact'?classes.expandedPanel:null))}>
                            <div className={classes}>contact</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.accordionDetails}>
                            <ContactInformation isCreate={isCreate} classes={classes} user={user} information={information}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>


                    <ExpansionPanel expanded={expanded === 'credential'} onChange={this.handleChange('credential')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'credential'?classes.expandedPanel:null))}>
                            <div className={classes}>credential</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.accordionDetails}>
                            <CredentialInformation isCreate={isCreate} classes={classes} user={user} information={information}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'personal'} onChange={this.handleChange('personal')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'personal'?classes.expandedPanel:null))}>
                            <div className={classes}>personal</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.accordionDetails}>
                            <PersonalInformation isCreate={isCreate} classes={classes} user={user} information={information}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>: userDetail.mode === 'revise' ?

                            <div className={classes}>

                                    <ExpansionPanel expanded={expanded === 'career'} onChange={this.handleChange('career')} className={classes.expansionPanel}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'career'?classes.expandedPanel:null))}>
                                            <div className={classes}>career</div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails className={classes.accordionDetails}>
                                            <CareerInformationRevise isCreate={isCreate} classes={classes} user={user} information={information}/>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>


                                <ExpansionPanel expanded={expanded === 'contact'} onChange={this.handleChange('contact')} className={classes.expansionPanel}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'contact'?classes.expandedPanel:null))}>
                                        <div className={classes}>contact</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.accordionDetails}>
                                        <ContactInformationRevise isCreate={isCreate} classes={classes} user={user} information={information}/>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>


                                    <ExpansionPanel expanded={expanded === 'credential'} onChange={this.handleChange('credential')} className={classes.expansionPanel}>
                                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'credential'?classes.expandedPanel:null))}>
                                            <div className={classes}>credential</div>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails className={classes.accordionDetails}>
                                            <CredentialInformationRevise isCreate={isCreate} classes={classes} user={user} information={information}/>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                <ExpansionPanel expanded={expanded === 'personal'} onChange={this.handleChange('personal')} className={classes.expansionPanel}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'personal'?classes.expandedPanel:null))}>
                                        <div className={classes}>personal</div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className={classes.accordionDetails}>
                                                <PersonalInformationRevise isCreate={isCreate} classes={classes} user={user} information={information}/>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div> :null}

            </div>
        );
    }
}

class SectionC extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, user, userDetail,information } = this.props;
        const { expanded } = this.state;

        return (
            <div>
                {userDetail.mode === 'review'?
                <div className={classes}>
                    <ExpansionPanel expanded={expanded === 'alliance'} onChange={this.handleChange('alliance')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'alliance'?classes.expandedPanel:null))}>
                                <div className={classes}>alliance</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.accordionDetails}>
                            <AllianceInformation classes={classes} user={user} information={information} userDetail={userDetail}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'engagement'} onChange={this.handleChange('engagement')} className={classes.expansionPanel}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'engagement'?classes.expandedPanel:null))}>
                            <div className={classes}>engagement</div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.accordionDetails}>
                            <EngagementInformation classes={classes} user={user} information={information} userDetail={userDetail}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                    : userDetail.mode ==='revise'?
                    <div className={classes}>
                        <ExpansionPanel expanded={expanded === 'alliance'} onChange={this.handleChange('alliance')} className={classes.expansionPanel}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'alliance'?classes.expandedPanel:null))}>
                                <div className={classes}>alliance</div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.accordionDetails}>
                                <AllianceInformationRevise classes={classes} user={user} information={information} userDetail={userDetail}/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'engagement'} onChange={this.handleChange('engagement')} className={classes.expansionPanel}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.inputText}/>} className={classNames(classes.dossierBg, classes.expansionHeader, (expanded === 'engagement'?classes.expandedPanel:null))}>
                                <div className={classes}>engagement</div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.accordionDetails}>
                                <EngagementInformationRevise classes={classes} user={user} information={information} userDetail={userDetail}/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
               :null }
            </div>
        );
    }
}


class DetailsSection extends React.Component {

    state = {
        value: 2,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const {classes, view, userDetail, authenticate, selectedUserAccount} = this.props;
        let user = !view || !view.self ?
            this.props.user : !authenticate || !authenticate.currentUser ?
                this.props.user : authenticate.currentUser;



        return (
            <div>

                <ProfileTabs classes={classes} user={user} authenticate={authenticate} userDetail={userDetail}/>

            </div>
        )
    }
};

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding:'0'}}>
            {props.children}
        </Typography>
    );
}

class ProfileTabs extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        tab: false
    };

    handleChange = (tab) => {
        this.setState({ tab });
    };

    render() {
        const { classes, view, userDetail,authenticate, selectedUserAccount } = this.props;
        const { tab } = this.state;

        let information = userDetail.detailType;
        let user = !view || !view.self ?
            this.props.user : !authenticate || !authenticate.currentUser ?
                this.props.user : authenticate.currentUser;

        return (
            <div className={classes.tabsContainer}>
                {userDetail.detailType ? <div className={classNames(classes.middleTabLabel, classes.middleTabLabelRight)}>
                    <div className={classes.middleTabInner}>
                        <div className={classes.middleTabItem}>
                            <div> </div>
                        </div>
                        <div className={classNames(classes.middleTabItem,(!tab ? classes.activeTabItem : null))} onClick={()=>this.handleChange(false)} >
                            <Button> </Button>
                        </div>
                        <div className={classes.middleTabItem} >
                            <div> </div>
                        </div>
                        <div className={classNames(classes.middleTabItem,(tab ? classes.activeTabItem : null))} onClick={()=>this.handleChange(true)} >
                            <Button> </Button>
                        </div>
                        <div className={classes.middleTabItem} >
                            <div> </div>
                        </div>
                    </div>
                </div> : null }
                {tab === false && <TabContainer>
                    {(userDetail.detailType === 'all') ?
                            <SectionB userDetail={userDetail} classes={classes} user={user} information={information}/> :
                        (  userDetail.detailType === 'basic') ?
                        <KeyInformation classes={classes} userDetail={userDetail}  user={user} information={information}/>:null
                    }
                    </TabContainer>}

                {tab === true &&
                    <TabContainer>
                        {( userDetail.detailType === 'all') ?
                    <SectionC userDetail={userDetail} classes={classes} user={user} information={information}/>:
                            (userDetail.detailType === 'basic') ?
                                <KeyInformationSecondary classes={classes} userDetail={userDetail}  user={user} information={information}/>:null}
                    </TabContainer> }
            </div>
        );
    }
}

export default DetailsSection;