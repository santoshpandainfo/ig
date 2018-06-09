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
import {FormControl, FormHelperText} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
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
import Notifications from 'material-ui-icons/NotificationsActive';
import Badge from 'material-ui/Badge';

import Select from 'material-ui/Select';
import Check from 'material-ui-icons/Check';
import moment from 'moment';
import CreateAssessee from './createAssessee';

import {
    solidGrey,
    solidGreen,
    lightGreen
} from "../containers/globalStyles"
import MarketSpace from "../containers/marketspace";
import StoreSpace from "../containers/storespace";
import CryptoSpace from '../containers/cryptospace';
import WorkSpace from '../containers/workspace';
import ProgressWork from '../containers/progress';
import Person from 'material-ui-icons/Person';
import {viewCurrentUser} from "../igactions/actions";
import Devices from 'material-ui-icons/Devices';
import Upload from 'material-ui-icons/FileUpload';
import Download from 'material-ui-icons/FileDownload';
import  { InputAdornment } from 'material-ui/Input';



class MeasureUserCard extends React.Component {

    isSm = width => width === 'xs';

    render() {
        const {classes, width, view} = this.props;

        let count = view && view.measure ? view.measure : 6,
            list = Array.from(Array(count).keys(), x => x + 1);

        return (
            <div className={classNames(classes.measureCardSelectContainer, classes.borderBox)}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.cardContentContainer}>
                    <div className={this.isSm(width) ?
                        classes.smMeasureBoxCenter : classes.measureBoxCenter}>
                        {list.map( label => {
                            return (
                                <div key={label} className={label%2 === 0 ? classes.mb1g : classes.mb1b}>
                                    <p className={classes.measureCardText}>{label}</p>
                                </div>)
                            })
                        }
                    </div>
                </Grid>
            </div>
        )
    }
}

class MinMeasureCard extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classNames(classes.measureBoxDash, classes.borderBox)}>
                    <div className={classes.mb1b}><p className={classes.measureCardText}>1</p></div>
                </div>
            </Grid>
        )
    }
}

class MeasureCard extends React.Component {
    render() {
        const {classes, view} = this.props;

        let count = view && view.measure ? view.measure : 6,
            list = Array.from(Array(count).keys(), x => x + 1)

        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classNames(classes.measureBoxDash, classes.borderBox)}>
                    {list.map( label => {
                        return (
                            <div key={label} className={label%2 === 0 ? classes.mb1g : classes.mb1b}>
                                <p className={classes.measureCardText}>{label}</p>
                            </div>)
                    })
                    }
                </div>
            </Grid>
        )
    }
}

class MeasureDetailsCard extends React.Component {
    render() {
        const {classes, view} = this.props;

        let count = view && view.measure ? view.measure : 6,
            list = Array.from(Array(count).keys(), x => x + 1);

        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classNames(classes.measureBoxRight, classes.borderBox)}>
                    {list.map( label => {
                        return (
                            <div key={label} className={label%2 === 0 ? classes.mb1g : classes.mb1b}>
                                <p className={classes.measureCardText}>{label}</p>
                            </div>)
                    })
                    }
                </div>
            </Grid>
        )
    }
}

class AssesseesIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        openSelectAssociates:false,
        openFlagAssociates:false,
        openCreateAssociates:false,
        openMoveAssociates:false,
        openDeleteAssociates:false,
        openGen: false,
        openAssessees: false,
        openAssessment: false,
        openAssignment: false,
        openAssociate: false,
        openGenAssessment: false,
        openGenAssignment: false,
        openGenAssociate: false,
        openDelete: false,
        openFlag: false,
        openMove: false,
        openSelect: false,
        openRevise:false,
        openSuites:false,
        anchorEl: null,
        ReviewPopUp:false,
        openGenNode:false,
        openCreate:false,
        openExchange:false,
        createName:false,
        createEmail:false,
        createMobile:false,
        createGender:false,
        createManager:false,
        createexpanded:false,
        confirmCancel:false,
        createMode:'all',
        deviceexpanded:false,
        templateTick:true,
        worksheetTick:false,
        assesseeOptions: [
            {
                show:'distinct',
                divider:'light',
                selected: false
            },
            {
                show:'groups',
                selected: false
            } ,
            {
                show:'managers',
                selected: false
            } ,
            {
                show:'nodes',
                selected: false
            } ,
            {
                show:'roles',
                divider: 'dark',
                selected: false
            } ,
            {
                show:'all',
                divider: 'light',
                selected: true
            },
            {
                show:'active',
                selected: false
            },
            {
                show:'inactive',
                divider: 'light',
                selected: false
            },
            {
                show:'archived',
                selected: false,
                divider:'light'
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                divider: 'dark',
                selected: false
            },
            {
                show:'unverified',
                selected: false
            },
            {
                show:'verified',
                divider: 'dark',
                selected: false
            },
            {
                show:'first-name other-names last-name',
                selected:true
            },
            {
                show:'last-name first-name other-names',
                divider: 'light',
                selected: false
            }
        ],
        assessmentOptions:[
            {
                show:'distinct',
                divider:'light',
                selected: false
            },
            {
                show:'groups',
                selected: false
            },
            {
                show:'managers',
                selected: false
            },
            {
                show:'nodes',
                selected: false
            },
            {
                show:'roles',
                divider: 'dark',
                selected: false
            },
            {
                show:'all',
                divider: 'light',
                selected: true
            },
            {
                show:'active',
                selected: false
            },
            {
                show:'inactive',
                divider: 'light',
                selected: false
            },
            {
                show:'archived',
                selected: false,
                divider:'light'
            },
            {
                show:'finished',
                selected: false
            },
            {
                show:'unfinished',
                divider: 'light',
                selected: false
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                divider: 'dark',
                selected: false
            }

        ],
        assignmentOptions: [
            {
                show:'distinct',
                divider:'light',
                selected: false
            },
            {
                show:'groups',
                selected: false
            } ,
            {
                show:'managers',
                selected: false
            } ,
            {
                show:'nodes',
                selected: false
            } ,
            {
                show:'roles',
                divider: 'dark',
                selected: false
            } ,
            {
                show:'all',
                divider: 'light',
                selected: true
            },
            {
                show:'active',
                selected: false
            },
            {
                show:'inactive',
                divider: 'light',
                selected: false
            },
            {
                show:'finished',
                selected: false
            },
            {
                show:'unfinished',
                divider: 'light',
                selected: false
            },
            {
                show:'progress',
                divider: 'light',
                selected: false
            },
            {
                show:'started',
                divider: 'light',
                selected: false
            },
            {
                show:'unstarted',
                divider: 'light',
                selected: false
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                divider: 'dark',
                selected: false
            }

        ],
        associateOptions:[
            {
                show:'distinct',
                divider:'light',
                selected: false
            },
            {
                show:'groups',
                selected: false
            } ,
            {
                show:'managers',
                selected: false
            } ,
            {
                show:'nodes',
                selected: false
            } ,
            {
                show:'roles',
                divider: 'dark',
                selected: false
            } ,
            {
                show:'all',
                divider: 'light',
                selected: true
            },
            {
                show:'active',
                selected: false
            },
            {
                show:'inactive',
                divider: 'light',
                selected: false
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                divider: 'dark',
                selected: false
            },
            {
                show:'unverified',
                selected: false
            },
            {
                show:'verified',
                selected: false
            }
        ],
        createOptions:[
            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: true
            } ,
            {
                show:'key',
                selected: false
            } ,
        ],
        exchangeOptions:[
            {
                show:'download',
                selected: false
            },
            {
                show:'upload',
                divider: 'dark',
                selected: false
            } ,
            {
                show:'information',
                divider: 'dark',
                selected: false
            } ,
            {
                show:'all',
                selected: false
            } ,
            {
                show:'key',
                divider: 'light',
                selected: false
            } ,
            {
                show:'template',
                selected: true
            },
            {
                show:'worksheet',
                divider: 'dark',
                selected: false
            },
            {
                show:'document box',
                selected: false
            },
        ],
        createAssociates:[
            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: true
            } ,
            {
                show:'key',
                selected: false
            } ,
        ],
    };
    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openGen',
            'openDelete',
            'openFlag',
            'openMove',
            'openSelect',
            'ReviewPopUp',
            'openAssessees',
            'openAssessment',
            'openAssignment',
            'openAssociate',
            'openGenAssessment',
            'openGenAssignment',
            'openGenAssociate',
            'openRevise',
            'openSuites',
            'openGenNode',
            'createName',
            'confirmCancel',
            'createEmail',
            'createMobile',
            'createGender',
            'createManager',
            'openGenNode',
            'openCreate',
            'createexpanded',
            'openExchange',
            'deviceexpanded',
            'openCreateAssociates',
            'openMoveAssociates',
            'openDeleteAssociates',
            'openFlagAssociates',
            'openSelectAssociates'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        temp.anchorEl = panel;
        return temp
    };

    handleClick =prop=> event => {
        let {listCardsPanel} = this.props;
        this.setState(this.change(prop, listCardsPanel));
    };
    changeTick = (prop ,panel)=> {
        let temp = {};
        let openList = [
            'templateTick',
            'worksheetTick'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        temp.anchorEl = panel;
        return temp
    };

    handleTick = prop => event => {
        this.setState(this.changeTick(prop));

    };


    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };
    toggleCheckbox = (prop,value) => event =>{
        let temp = {};
        temp[prop] = !value;
        this.setState(temp);
        return false;
    };

    listFilter = (list) => {
        if (!Array.isArray(list) || list.length === 0) return [];
        return list
            .filter(account => {
                return account._id ?
                    account._id.length > 0 : false;
            })
            .map( account => {
            return account._id ?
                account._id : ''
        });
    };

    handleCreate = (f, close, setTo) => () => {
        close();
        setTo('right');
        f(true);
    }

    handleActions = (...actions) => () => {
        actions.forEach(action => action())
    };

    handleFlag = (close,f, scrolledList, show,f1,mode) => () => {
        f(this.listFilter(scrolledList), show);
        f1(mode);
        close();
    };

    handelCurrentFlag = (close,f,mode) => () => {
        f(mode);
        close();
    }
    handleDiagOpen = prop => event => {
        this.setState(this.afterChange(prop));
    }
    handleExpandClick = (val) => {
        if(val == 'createexpanded') {
            this.setState({ createexpanded: !this.state.createexpanded });
        }}


    handleSelect = (group, show, actions) => () => {

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
    }

    actionAssessee = (type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile) => {
        if (type === 'all') endSearch();
        if (type === 'roles') setEntityRoles(currentEntity);
        if (type === 'groups') setEntityGroups(currentEntity);
        if (typeof toggleMobile === 'function') toggleMobile('middle');
        this.setState({
            showSift: false
        })
    }

    handleNavAction = (close, togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile) => () => {
        close();
        if (typeof togglePane === 'function') togglePane(pane, type);
        if (pane === 'assessee') this.actionAssessee(type, endSearch, setEntityRoles, setEntityGroups, currentEntity,toggleMobile);
        if (typeof toggleMobile === 'function') toggleMobile('middle');
    }

    handleSelectFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
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

    handleSelectReviewFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions) => actionList => {
        let type = Array.isArray(actionList) && actionList.length > 0 ?
            actionList.find(action => action.selected).show : null
        if (typeof f === 'function') this.handleUserSelect(f, user, (!type ? infoType : type === 'key' ?
            'basic' : type),
            mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
    }


    handleExpandClick = (val) => {

        if(val == 'deviceexpanded'){
            this.setState({ deviceexpanded: !this.state.deviceexpanded });
        }
    }

    handleUserSelect = (selectUser, user, type, mode) =>  selectUser(user, type, mode);

    handleOpenCreateAssesseeAction = (close, setCreateAssesseeMode) => () => {
        close();
        if(typeof setCreateAssesseeMode === 'function') setCreateAssesseeMode();
        if( typeof this.props.setCreateAssesseeLeftPanel == 'function'){
            this.handelcreateAssesseePanel(this.props.setCreateAssesseeLeftPanel,'middle',this.state.createMode);
        }
    }
    handelcreateAssesseePanel =  (setCreateAssesseeLeftPanel,panel,type) => setCreateAssesseeLeftPanel(panel,type);

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

        let {classes, scrolledList,toggleMiddlePane, width,handleActions, endSearch, setEntityRoles, setEntityGroups, currentEntity, view, card,toggleAssesseeMobile} = this.props;

        const filterOptions = [
            'all','active', 'inactive','archived','suspended' ,'terminated','unverified','verified'
            ],
            filterAssessment = [
                'all','active', 'inactive','archived', 'finished', 'unfinished', 'suspended' ,'terminated',
            ],
            filterAssignment = [
                'all','active', 'inactive', 'finished', 'unfinished','progress','started','unstarted', 'suspended' ,'terminated',
            ],
            filterAssociate = [
                'all','active', 'inactive', 'suspended' ,'terminated','unverified','verified'
            ],
            createInfo = ['all','key'],
            sortOptions = [
            'first-name other-names last-name',
            'last-name first-name other-names'
            ],
            exchangeOptions = [
                'information','all','key','template','worksheet','document box'
            ];

        let assesseeActionsMap = [
            {
                show:'distinct',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','all', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                style: classes.optionPrimaryBlue
            },
            {
                show:'groups',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane  , 'assessee','groups', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                style: classes.optionPrimaryBlue
            } ,
            {
                show:'managers',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','managers', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                style: classes.optionPrimaryBlue
            } ,
            {
                show:'nodes',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane , 'assessee','nodes', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                style: classes.optionPrimaryBlue
            } ,
            {
                show:'roles',
                action:this.handleNavAction(this.handleRequestClose('openAssessees'), toggleMiddlePane, 'assessee', 'roles', endSearch, setEntityRoles, null, null, this.props.toggleAssesseeMobile),
                style: classes.optionPrimaryBlue
            } ,
            {
                show:'all',
                action: this.handleSelect(filterOptions, 'all', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue
            },
            {
                show:'active',
                action: this.handleSelect(filterOptions,'active', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue
            },
            {
                show:'inactive',
                action: this.handleSelect(filterOptions,'inactive', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue
            },
                {
                    show:'archived',
                    action: this.handleSelect(filterOptions,'archived', this.state.assesseeOptions),
                    style: classes.optionSecondary
                },

            {
                show:'suspended',
                action: this.handleSelect(filterOptions,'suspended', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue
            },
            {
                show:'terminated',
                action: this.handleSelect(filterOptions,'terminated', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue
            },
            {
                    show:'unverified',
                    action: this.handleSelect(filterOptions,'unverified', this.state.assesseeOptions),
                    style: classes.optionSecondaryBlue
            },
            {
                    show:'verified',
                    action: this.handleSelect(filterOptions,'verified', this.state.assesseeOptions),
                    style: classes.optionSecondaryBlue
            },
            {
                show:'first-name other-names last-name',
                action: this.handleSelect(sortOptions,'first-name other-names last-name', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue,

            },
            {
                show:'last-name first-name other-names',
                action: this.handleSelect(sortOptions,'last-name first-name other-names', this.state.assesseeOptions),
                style: classes.optionSecondaryBlue,

            },
        ],
            exchangeActionsMap = [
                {
                    show:'download',
                    action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','all', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                    style: classes.optionPrimaryBlue
                },
                {
                    show:'upload',
                    action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane  , 'assessee','groups', endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleAssesseeMobile),
                    style: classes.optionPrimaryBlue
                } ,
                {
                    show:'information',
                    action: this.handleSelect(exchangeOptions, 'information', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue
                } ,

                {
                    show:'all',
                    action: this.handleSelect(exchangeOptions, 'all', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue
                },

                {
                    show:'key',
                    action: this.handleSelect(exchangeOptions, 'key', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue
                },
                {
                    show:'template',
                    action: this.handleSelect(exchangeOptions, 'template', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue
                },
                {
                    show:'worksheet',
                    action: this.handleSelect(exchangeOptions,'worksheet', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue
                },
                {
                    show:'document box',
                    action: this.handleSelect(exchangeOptions,'document box', this.state.exchangeOptions),
                    style: classes.optionSecondaryBlue

                },
            ],
            assessmentActionsMap=  [

                {
                    show:'distinct',
                    action:this.handleNavAction(this.handleRequestClose('openAssessment') ,toggleMiddlePane, 'assessment','all', endSearch, setEntityRoles, setEntityGroups, this.props.currentEntity, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                },
                {
                    show:'groups',
                    action:this.handleNavAction(this.handleRequestClose('openAssessment') ,toggleMiddlePane, 'assessment','groups', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'managers',
                    action:this.handleNavAction(this.handleRequestClose('openAssessment') ,toggleMiddlePane, 'assessment','managers', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'nodes',
                    action:this.handleNavAction(this.handleRequestClose('openAssessment') ,toggleMiddlePane, 'assessment','nodes', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'roles',
                    action:this.handleNavAction(this.handleRequestClose('openAssessment'), toggleMiddlePane, 'assessment', 'roles', endSearch, setEntityRoles, null, null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'all',
                    action: this.handleSelect(filterAssessment, 'all', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'active',
                    action: this.handleSelect(filterAssessment,'active', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'inactive',
                    action: this.handleSelect(filterAssessment,'inactive', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(filterAssessment,'archived', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'finished',
                    action: this.handleSelect(filterAssessment,'finished', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unfinished',
                    action: this.handleSelect(filterAssessment,'unfinished', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'suspended',
                    action: this.handleSelect(filterAssessment,'suspended', this.state.assessmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'terminated',
                    action: this.handleSelect(filterAssessment,'terminated', this.state.assessmentOptions),
                    style: classes.optionSecondary
                }

            ],
            assignmentActionsMap=  [

                {
                    show:'distinct',
                    action:this.handleNavAction(this.handleRequestClose('openAssignment') ,toggleMiddlePane, 'assignment','all', endSearch, setEntityRoles, setEntityGroups, this.props.currentEntity, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                },
                {
                    show:'groups',
                    action:this.handleNavAction(this.handleRequestClose('openAssignment') ,toggleMiddlePane, 'assignment','groups', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'managers',
                    action:this.handleNavAction(this.handleRequestClose('openAssignment') ,toggleMiddlePane, 'assignment','managers', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'nodes',
                    action:this.handleNavAction(this.handleRequestClose('openAssignment') ,toggleMiddlePane, 'assignment','nodes', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'roles',
                    action:this.handleNavAction(this.handleRequestClose('openAssignment'), toggleMiddlePane, 'assignment', 'roles', endSearch, setEntityRoles, null, null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'all',
                    action: this.handleSelect(filterAssignment, 'all', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'active',
                    action: this.handleSelect(filterAssignment,'active', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'inactive',
                    action: this.handleSelect(filterAssignment,'inactive', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'finished',
                    action: this.handleSelect(filterAssignment,'finished', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unfinished',
                    action: this.handleSelect(filterAssignment,'unfinished', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'progress',
                    action: this.handleSelect(filterAssignment,'progress', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'started',
                    action: this.handleSelect(filterAssignment,'started', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unstarted',
                    action: this.handleSelect(filterAssignment,'unstarted', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'suspended',
                    action: this.handleSelect(filterAssignment,'suspended', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'terminated',
                    action: this.handleSelect(filterAssignment,'terminated', this.state.assignmentOptions),
                    style: classes.optionSecondary
                }

            ],
            associateActionsMap=  [

                {
                    show:'distinct',
                    action:this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'associate','all', endSearch, setEntityRoles, setEntityGroups, this.props.currentEntity, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                },
                {
                    show:'groups',
                    action:this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'associate','groups', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'managers',
                    action:this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'associate','managers', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'nodes',
                    action:this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'associate','nodes', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'roles',
                    action:this.handleNavAction(this.handleRequestClose('openAssociate'), toggleMiddlePane, 'associate', 'roles', endSearch, setEntityRoles, null, null, this.props.toggleAssesseeMobile),
                    style: classes.optionPrimary
                } ,
                {
                    show:'all',
                    action: this.handleSelect(filterAssociate, 'all', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'active',
                    action: this.handleSelect(filterAssociate,'active', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'inactive',
                    action: this.handleSelect(filterAssociate,'inactive', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'suspended',
                    action: this.handleSelect(filterAssociate,'suspended', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'terminated',
                    action: this.handleSelect(filterAssociate,'terminated', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unverified',
                    action: this.handleSelect(filterAssociate,'unverified', this.state.associateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'verified',
                    action: this.handleSelect(filterAssociate,'verified', this.state.associateOptions),
                    style: classes.optionSecondary
                }

            ],
            createMap=  [
                {
                    show:'information',
                    action: this.handleOpenCreateAssesseeAction(this.handleRequestClose('openCreate'),this.props.setCreateAssesseeMode),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(createInfo, 'all', this.state.createOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'key',
                    action:this.handleSelect(createInfo, 'key', this.state.createOptions),
                    style: classes.optionSecondary
                }

            ],
            createMapAssociates=  [

            {
                show:'information',
                action: null,
                style: classes.optionPrimary
            },
            {
                show:'all',
                action:this.handleSelect(createInfo, 'all', this.state.createAssociates),
                style: classes.optionSecondary
            },
            {
                show:'key',
                action:this.handleSelect(createInfo, 'key', this.state.createAssociates),
                style: classes.optionSecondary
            }

        ];

        let isEntitySelected = this.props.isEntitySelected;

        return (
            <div className={classes.iconBarNavMiddleLess}>

                <div className={classes.iconBox}>
                    <IconButton
                        onClick={this.props.action('showSearch')}
                    >
                        <SearchIcon
                            className={classes.iconsBarDefault}/>
                    </IconButton>
                </div>
                <div className={classes.iconBox}>
                    { this.isSelected(view, 'assessee')  ?
                    <IconButton onClick={this.handleClick('openGen')}><MoreVert
                        className={classes.iconsBarDefault}/></IconButton>
                        :  this.isSelected(view, 'assessment')  ?
                            <IconButton onClick={this.handleClick('openGenAssessment')}><MoreVert
                                className={classes.iconsBarDefault}/></IconButton>
                            : this.isSelected(view, 'assignment')  ?
                                <IconButton onClick={this.handleClick('openGenAssignment')}><MoreVert
                                    className={classes.iconsBarDefault}/></IconButton>
                                : this.isSelected(view, 'associate') ?
                                    <IconButton disabled={!isEntitySelected} onClick={this.handleClick('openGenAssociate')}><MoreVert
                                        className={classes.iconsBarDefault}/></IconButton>
                                    : this.isSelected(view, 'node')  ?
                                        <IconButton onClick={this.handleClick('openGenNode')}><MoreVert
                                            className={classes.iconsBarDefault}/></IconButton>
                                    : <IconButton onClick={this.handleClick('openGenAssesses')}><MoreVert
                                        className={classes.iconsBarDefault}/></IconButton>
                    }

                </div>
                {(this.props.createAssesseePanel == 'middle')?
                <div >
                    <CreateAssessee
                        countries={this.props.countries}
                        toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                        view={this.props.view}
                        selectUserAccount={this.props.selectUserAccount}
                        setCreateMode={this.props.setCreateMode}
                        setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                        setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                        createAssesseePanel={this.props.createAssesseePanel}
                        closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                        isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                        toggleMiddlePane={toggleMiddlePane}
                        updateFlag={this.props.updateFlag}
                        updateSelect = {this.props.updateSelect}
                        setEntityRoles={setEntityRoles}
                        setEntityGroups={setEntityGroups}
                        currentEntity={currentEntity}
                        width={width}
                        currentFlagMode = {this.props.currentFlagMode}
                        classes={classes}
                        createAssesseesAccount={this.props.createAssesseesAccount}
                    />
                </div>
                :null}
                <div>
                    <PopUp
                        onOpen={this.state.openGen}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openGen')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessees'}
                        optionList={
                            [
                                {
                                    show: 'alliance',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'create',
                                    action: this.handleClick('openCreate'),
                                    // action: this.handleCreate(this.props.setCreateMode,this.handleRequestClose('openGen'), this.props.toggleAssesseeMobile),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'delete',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'flag',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'move',
                                    action: this.handleClick('createName'),
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled,
                                },
                                {
                                    show: 'review',
                                    action:this.handleClick('open' + this.getMiddle(view)),
                                    style:classes.optionPrimary,
                                },
                                {
                                    show: 'select',
                                    action:this.handleClick('openSelect'),
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'exchange',
                                    action:this.handleClick('openExchange'),
                                    style:classes.optionPrimary
                                }
                            ]
                        }
                        close={this.handleRequestClose('openGen')}
                    />
                    <PopUp
                        onOpen={this.state.openCreate}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleClick('openGen')}
                        titleStyle={classes.titleLightBlue}
                        title={'assessees'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'create'}
                        passOptions={true}
                        optionList={this.state.createOptions.map( assessee => {
                            for (let action of createMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleRequestClose('openCreate')}
                    />

                    <PopUp
                        onOpen={this.state.openExchange}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        tickOption={true}
                        iconOptions={true}
                        actionType={this.handleRequestClose('openAssesseesPrimary')}
                        titleStyle={classes.titleLightBlue}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        title={'assessees'}
                        badgeText={'exchange'}
                        passOptions={true}
                        close={this.handleRequestClose('openExchange')}
                    >
                        <div>
                            <div>
                                <Button className={classes.optionPrimary}>information</Button>
                            </div>
                            <Divider/>
                            <div>
                                <Button className={classes.optionSecondary}>all</Button>
                            </div>
                            <div>
                                <Button className={classes.optionSecondary}>key</Button>
                            </div>
                            <Divider light/>
                            <div>
                                <Button className={classes.optionSecondary} onClick={this.handleTick('templateTick')}>
                                        template
                                    {this.state.templateTick ?
                                        <IconButton className={classes.tick}>
                                            <Check className={classes.selectionIcon}/>
                                        </IconButton>:null}
                                    </Button>
                            </div>
                            <div>

                                <Button className={(classes.optionSecondary)} onClick={this.handleTick('worksheetTick')}>worksheet
                                    {this.state.worksheetTick ?
                                    <IconButton className={classes.tick}>
                                        <Check className={classes.selectionIcon}/>
                                    </IconButton>:null}
                                </Button>

                            </div>
                            <Divider/>

                            <div className={classes.selectionDrives}>
                                <FormControl className={classNames(classes.formControlReviewAlias, classes.selectFields)}>
                                    <IGSelect
                                        list={['device drive', 'google drive', 'microsoft drive']}
                                        label="drive"/>
                                    <FormHelperText className={classes.d_none}>This information is required.</FormHelperText>
                                </FormControl>
                            </div>

                            <div className={classes.selectionDrives}>
                                <FormControl classNames={(classes.textField,classes.textChoose)} style={{width:'100%'}}>
                                    <InputLabel className={classes.inputFormLabel} style={{margin:'0 0 10px 0'}}>select document</InputLabel>
                                    <TextField style={{width:'100%'}}
                                        id="firstname"
                                       type='file'
                                       accept="image/*"
                                        className={classNames(classes.textForInput, classes.inputText)}
                                    />
                                    <FormHelperText className={classes.d_none}>This information is required.</FormHelperText>
                                </FormControl>
                            </div>
                            {(this.state.templateTick)?
                            <div className={classes.mbPager} style={{padding:'0 10px 5px 10px'}}>
                            <div className={classes.iconBoxFooter}></div>
                                <div className={classes.iconBoxFooter}></div>

                                <div className={classes.iconBoxFooter}>
                                <LabelIcon classes={classes}  iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='download'>
                                <Download/>
                                </LabelIcon>
                            </div>
                                <div className={classes.iconBoxFooter}></div>
                                <div className={classes.iconBoxFooter}></div>

                            </div>
                                :
                            (this.state.worksheetTick)?
                            <div className={classes.mbPager} style={{padding:'0 10px 5px 10px'}}>
                                <div className={classes.iconBoxFooter}></div>

                                    <div className={classes.iconBoxFooter}>
                                        <LabelIcon classes={classes}  iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='download'>
                                            <Download/>
                                        </LabelIcon>
                                    </div>
                                <div className={classes.iconBoxFooter}></div>

                                    <div className={classes.iconBoxFooter}>
                                        <LabelIcon classes={classes}  iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='upload'>
                                            <Upload/>
                                        </LabelIcon>
                                    </div>
                                <div className={classes.iconBoxFooter}></div>

                            </div>:null}


                        </div>

                    </PopUp>


                    <PopUp
                        onOpen={this.state.openGenAssessment}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openGenAssessment')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assessments'}
                        optionList={
                            [
                                {
                                    show: 'create',
                                    action: this.handleCreate(this.props.setCreateMode,this.handleRequestClose('openGenAssessment'), this.props.toggleAssesseeMobile),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'delete',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'flag',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'move',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'review',
                                    action:this.handleClick('open' + this.getMiddle(view)),
                                    style:classes.optionPrimary,
                                },
                                {
                                    show: 'select',
                                    action:this.handleClick('openSelect'),
                                    style:classes.optionPrimary,
                                    divider:'light'
                                },
                                {
                                    show: 'suites',
                                    action:(this.handleRequestClose('openAssessmentPrimary'),this.handleClick('openSuites')),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleRequestClose('openGenAssessment')}
                    />

                    <PopUp
                        onOpen={this.state.openGenNode}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openGenNode')}
                        titleStyle={classes.titleSolidBlue}
                        title={'nodes'}
                        optionList={
                            [
                                {
                                    show: 'create',
                                    action:null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'delete',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'flag',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'link',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'move',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },

                                {
                                    show: 'revise',
                                    action:(this.handleRequestClose('openGenNode')),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'select',
                                    action:null,
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleRequestClose('openGenNode')}
                    />

                    <PopUp
                        onOpen={this.state.openSuites}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openSuites'),this.handleClick('openGenAssessment'))}
                        titleStyle={classes.titleLightBlue}
                        title={'suites'}
                        badgeStyle={classes.assessmentSuitesBadge}
                        optionList={
                            [
                                {
                                    show: 'igauge',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'igrade',
                                    action: null,
                                    style:classes.optionPrimary,

                                }

                            ]
                        }
                        close={this.handleRequestClose('openSuites')}
                    />

                    <PopUp
                        onOpen={this.state.openGenAssignment}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openGenAssignment')}
                        titleStyle={classes.titleSolidBlue}
                        title={'assignments'}
                        optionList={
                            [
                                {
                                    show: 'create',
                                    action: this.handleCreate(this.props.setCreateMode,this.handleRequestClose('openGenAssignment'), this.props.toggleAssesseeMobile),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'delete',
                                    action: this.handleClick('openDelete'),
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },

                                {
                                    show: 'flag',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'move',
                                    action: null,
                                    disabled:true,
                                    ripple:true,
                                    focus:true,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'review',
                                    action:this.handleClick('open' + this.getMiddle(view)),
                                    style:classes.optionPrimary,
                                },
                                {
                                    show: 'select',
                                    action:this.handleClick('openSelect'),
                                    style:classes.optionPrimary,
                                    divider:'light',
                                },
                                {
                                    show: 'reports',
                                    action:null,
                                    style:classes.optionPrimary,
                                }
                            ]
                        }
                        close={this.handleRequestClose('openGenAssignment')}
                    />

                    <PopUp
                        onOpen={this.state.openGenAssociate}
                        classes={classes}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openGenAssociate')}
                        titleStyle={classes.titleSolidBlue}
                        title={'associates'}
                        optionList={
                            [
                                {
                                    show: 'alliance',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'create',
                                    action: this.handleClick('openCreateAssociates'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'delete',
                                    action: this.handleClick('openDeleteAssociates'),
                                    style:classes.optionPrimary
                                },

                                {
                                    show: 'flag',
                                    action: this.handleClick('openFlagAssociates'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'move',
                                    action: this.handleClick('openMoveAssociates'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'review',
                                    action:this.handleClick('open' + this.getMiddle(view)),
                                    style:classes.optionPrimary,
                                },
                                {
                                    show: 'select',
                                    action:this.handleClick('openSelectAssociates'),
                                    style:classes.optionPrimary,
                                }
                            ]
                        }
                        close={this.handleRequestClose('openGenAssociate')}
                    />

                    <PopUp
                        onOpen={this.state.openSelectAssociates}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openSelectAssociates'),this.handleClick('openGenAssociate'))}
                        classes={classes}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'select'}
                        optionList={
                            [
                                {
                                    show: 'select all',
                                    action: null,
                                    style :classes.optionPrimary
                                },
                                {
                                    show: 'select flagged',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'select multiple',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unselect all',
                                    action: null,
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'hide',
                                    action:null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unhide',
                                    action:null,
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'review selected',
                                    action:null,
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openSelectAssociates')}
                    />
                    <PopUp
                        onOpen={this.state.openFlagAssociates}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openFlagAssociates'),this.handleClick('openGenAssociate'))}
                        classes={classes}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'flag'}
                        optionList={
                            [
                                {
                                    show: 'flag all',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'flag multiple',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'flag selected',
                                    action: null,
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'unflag all',
                                    action: null,
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'hide',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unhide',
                                    action: null,
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'review flagged',
                                    action: null,
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openFlagAssociates')}
                    />
                    <PopUp
                        onOpen={this.state.openDeleteAssociates}
                        classes={classes}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openDeleteAssociates'),this.handleClick('openGenAssociate'))}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'delete'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: null,
                                    style: classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: null,
                                    style: classes.optionPrimary
                                }
                            ]
                        }
                        close={this.handleRequestClose('openDeleteAssociates')}
                    />

                    <PopUp
                        onOpen={this.state.openCreateAssociates}
                        classes={classes}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openCreateAssociates'),this.handleClick('openGenAssociate'))}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'create'}
                        optionList={this.state.createAssociates.map( assessee => {
                            for (let action of createMapAssociates) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                    close={this.handleRequestClose('openCreateAssociates')}
                    />

                    <PopUp
                        onOpen={this.state.openMoveAssociates}
                        classes={classes}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openMoveAssociates'),this.handleClick('openGenAssociate'))}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'move'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: null,
                                    style: classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: null,
                                    style: classes.optionPrimary
                                }
                            ]
                        }
                        close={this.handleRequestClose('openMoveAssociates')}
                    />

                    <PopUp
                        onOpen={this.state.openAssessees}
                        classes={classes}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openAssessees'), this.handleClick('openGen'))}
                        title={'assessees'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'review'}
                        optionList={this.state.assesseeOptions.map( assessee => {
                            for (let action of assesseeActionsMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleRequestClose('openAssessees')}
                    />

                    <PopUp
                        onOpen={this.state.openAssessment}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openAssessment'),this.handleClick('openGenAssessment'))}
                        classes={classes}
                        title={'assessments'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'review'}
                        optionList={this.state.assessmentOptions.map( assessee => {
                            for (let action of assessmentActionsMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;

                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleRequestClose('openAssessment')}
                    />

                    <PopUp
                        onOpen={this.state.openAssignment}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        actionType={(this.handleRequestClose('openAssignment'),this.handleClick('openGenAssignment'))}
                        classes={classes}
                        textOptions={true}
                        title={'assignments'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'review'}
                        optionList={this.state.assignmentOptions.map( assessee => {
                            for (let action of assignmentActionsMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleRequestClose('openAssignment')}
                    />

                    <PopUp
                        onOpen={this.state.openAssociate}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openAssociate'),this.handleClick('openGenAssociate'))}
                        classes={classes}
                        title={'associates'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'review'}
                        optionList={this.state.associateOptions.map( assessee => {
                            for (let action of associateActionsMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleRequestClose('openAssociate')}
                    />
                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openFlag}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openFlag')}
                        classes={classes}
                        title={'flag'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleClick('openFlag'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action:this.handleRequestClose('openFlag'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleRequestClose('openFlag')}
                    />
                    <PopUp
                        onOpen={this.state.openFlag}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openFlag'),this.handleClick('openGen'))}
                        classes={classes}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        title={'assessees'}
                        badgeText={'flag'}
                        passOptions={true}
                        optionList={
                            [
                                {
                                    show: 'flag all',
                                    action:this.handleFlag(this.handleRequestClose('openFlag'),this.props.updateFlag, scrolledList, true,this.props.currentFlagMode,'flagAll'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'flag multiple',
                                    action: this.handelCurrentFlag(this.handleRequestClose('openFlag'),this.props.currentFlagMode,'flagMultiple'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'flag selected',
                                    action: this.handelCurrentFlag(this.handleRequestClose('openFlag'),this.props.currentFlagMode,'flagSelected'),
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'unflag all',
                                    action: this.handleFlag(this.handleRequestClose('openFlag'),this.props.updateFlag, scrolledList, false,this.props.currentFlagMode,'unflagAll'),
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'hide',
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unhide',
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'review flagged',
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openFlag')}
                    />
                    <PopUp
                        onOpen={this.state.openDelete}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openDelete')}
                        classes={classes}
                        title={'delete'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action:this.handleRequestClose('openDelete'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: this.handleRequestClose('openDelete'),
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openDelete')}
                    />
                    <PopUp
                        onOpen={this.state.openMove}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={this.handleRequestClose('openMove')}
                        classes={classes}
                        title={'move'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action:this.handleRequestClose('openMove'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action: this.handleRequestClose('openMove'),
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openMove')}
                    />
                    <PopUp
                        onOpen={this.state.openSelect}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleRequestClose('openSelect'), this.handleClick('openGen'))}
                        classes={classes}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        title={'assessees'}
                        badgeText={'select'}
                        passOptions={true}
                        optionList={
                            [
                                {
                                    show: 'select all',
                                    action:this.handleFlag(this.handleRequestClose('openSelect'),this.props.updateSelect, scrolledList, true,this.props.currentFlagMode,'selectAll'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'select flagged',
                                    action: this.handelCurrentFlag(this.handleRequestClose('openSelect'),this.props.currentFlagMode,'selectFlagged'),
                                    style:classes.optionPrimaryDisabled
                                },
                                {
                                    show: 'select multiple',
                                    action: this.handelCurrentFlag(this.handleRequestClose('openSelect'),this.props.currentFlagMode,'selectMultiple'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unselect all',
                                    action:this.handleFlag(this.handleRequestClose('openSelect'),this.props.updateSelect, scrolledList, false,this.props.currentFlagMode,'unselectAll'),
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'hide',
                                    action:null,
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'unhide',
                                    action:null,
                                    style:classes.optionPrimary,
                                    divider:'dark'
                                },
                                {
                                    show: 'review selected',
                                    action:null,
                                    style:classes.optionPrimary
                                },
                            ]
                        }
                        close={this.handleRequestClose('openSelect')}
                    />
                </div>

            </div>
        )
    }
}

class MinIcon extends React.Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classNames(classes.iconBarNav, classes.stubNavHeight)}></div>
        )
    }
}

class AssesseeIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        openGen: false,
        openDelete: false,
        openFlag: false,
        openMove: false,
        openAssesseeReportsReview: false,
        openAssesseeNotificationReview: false,
        openAssesseeAssignReview: false,
        openSelect: false,
        anchorEl: null,
        reviewModeRight:'all',
        reviseModeRight:'all',
        reviewOptionsRight:[
            {
                show:'information',
                divider:'dark'
            },
            {
                show:'all',
                selected: true
            },
            {
                show:'key',
                selected: false
            },
        ],
        reviseOptionsRight:[
            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: true
            } ,
            {
                show:'key',
                selected: false
            } ,
        ],
        assignmentOptionsRight: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: false
            },

            {
                show:'active',
                selected: true
            } ,
            {
                show:'inactive',
                divider:'light',
                selected: false
            } ,
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'finished',
                selected: false
            } ,
            {
                show:'unfinished',
                divider:'light',
                selected: false
            } ,
            {
                show:'started',
                selected: false
            },
            {
                show:'unstarted',
                divider:'light',
                selected: false
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                selected: false
            },
        ],
        notificationOptions: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: true
            },
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'flagged',
                selected: false
            } ,
            {
                show:'unflagged',
                divider:'light',
                selected: false
            } ,
            {
                show:'read',
                selected: false
            } ,
            {
                show:'unread',
                selected: false
            }
        ],
        reportsOptionsRight: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: true
            },
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'flagged',
                selected: false
            } ,
            {
                show:'unflagged',
                divider:'light',
                selected: false
            } ,
            {
                show:'read',
                selected: false
            } ,
            {
                show:'unread',
                selected: false
            }
        ],

    };

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openGen',
            'openDelete',
            'openFlag',
            'openMove',
            'openSelect',
            'openAssesseeReportsReview',
           'openAssesseeNotificationReview',
            'openAssesseeAssignReview'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        temp.anchorEl = panel;
        return temp
    };

    handleClick = prop => event => {
        let {listCardsPanel} = this.props;
        this.setState(this.change(prop, listCardsPanel));
    };

    handleSelect = (group, show, actions) => () => {

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }

        this.setState({actions})
    }

    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);

    handleSelectReviewFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions) => actionList => {
        let type = Array.isArray(actionList) && actionList.length > 0 ?
            actionList.find(action => action.selected).show : null
        if (typeof f === 'function') this.handleUserSelect(f, user, (!type ? infoType : type === 'key' ?
            'basic' : type),
            mode);

        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
    }

    handleDiagClose = (prop, f, user, type, mode) => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
        if (typeof f === 'function') f(user, type, mode);
    };

    handleFlag = (close, f, user, show) => () => {
        if (user._id) f([user._id], show);
        close();
    };

    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleBack = (setTo, clearSelected, view) => () => {
        let previous = view && view.previousPanel ?
            view.previousPanel : 'left';
        setTo(previous);
        if (typeof  clearSelected === 'function') clearSelected();
    }

    setSelected = choices => Object.keys(choices).find( choice => choices[choice] === true )

    render() {
        let {classes, card} = this.props;

        const reviewInfoRight = ['all' , 'key'],
            assignmentFilters = [
                'review' ,'all','active','archived', 'inactive','finished','unfinished','started','unstarted','suspended' ,'terminated'
            ],
            notificationFilters = [
                'review', 'all','archived','flagged','unflagged','read','unread'
            ],
            reportFilters = [
                'review',  'all','archived','flagged','read','unread'
            ],
            reviseInfoRight = ['all', 'key'];

        let reviewMapRight=  [

                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openReview', this.props.selectUserAccount, card, this.state.reviewModeRight , this.props.toggleAssesseeMobile, 'review', reviseInfoRight, this.state.reviewModeRight, this.state.reviewOptionsRight),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviewInfoRight, 'all', this.state.reviewOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'key',
                    action:this.handleSelect(reviewInfoRight, 'key', this.state.reviewOptionsRight),
                    style: classes.optionSecondary
                }

            ],
            assesseeAssignmentMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelect(assignmentFilters, 'all', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'active',
                    action: this.handleSelect(assignmentFilters, 'active', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'inactive',
                    action: this.handleSelect(assignmentFilters, 'inactive', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(assignmentFilters, 'archived', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'finished',
                    action: this.handleSelect(assignmentFilters, 'finished', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'unfinished',
                    action: this.handleSelect(assignmentFilters, 'unfinished', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'started',
                    action: this.handleSelect(assignmentFilters, 'started', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'unstarted',
                    action: this.handleSelect(assignmentFilters,'unstarted', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'suspended',
                    action: this.handleSelect(assignmentFilters,'suspended', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'terminated',
                    action: this.handleSelect(assignmentFilters,'terminated', this.state.assignmentOptionsRight),
                    style: classes.optionSecondary
                },
            ],
            assesseeNotificationMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelect(notificationFilters, 'all', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(notificationFilters, 'archived', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'flagged',
                    action: this.handleSelect(notificationFilters, 'flagged', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unflagged',
                    action: this.handleSelect(notificationFilters, 'unflagged', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'read',
                    action: this.handleSelect(notificationFilters, 'read', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unread',
                    action: this.handleSelect(notificationFilters, 'unread', this.state.notificationOptions),
                    style: classes.optionSecondary
                }
            ],
            assesseeReportMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },

                {
                    show:'all',
                    action: this.handleSelect(reportFilters, 'all', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(reportFilters, 'archived', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'flagged',
                    action: this.handleSelect(reportFilters, 'flagged', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'unflagged',
                    action: this.handleSelect(reportFilters, 'unflagged', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'read',
                    action: this.handleSelect(reportFilters, 'read', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'unread',
                    action: this.handleSelect(reportFilters, 'unread', this.state.reportsOptionsRight),
                    style: classes.optionSecondary
                }
            ],
            reviseMapRight=  [

                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openRevise', this.props.selectUserAccount, card, this.state.reviseModeRight , this.props.toggleAssesseeMobile, 'revise', reviseInfoRight, this.state.reviseModeRight, this.state.reviseOptionsRight),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviseInfoRight, 'all', this.state.reviseOptionsRight),
                    style: classes.optionSecondary
                },
                {
                    show:'key',
                    action:this.handleSelect(reviseInfoRight, 'key', this.state.reviseOptionsRight),
                    style: classes.optionSecondary
                }

            ];



        return (
            <div className={classes.iconBarNavRight}>

                <div className={classes.iconBox}>

                </div>

                <div className={classes.iconBox}>
                    <IconButton><Clear
                        onClick={this.handleBack(this.props.toggleAssesseeMobile, this.props.unselectUserAccount, this.props.view)}
                        className={classes.iconsBarDefault}/></IconButton>
                </div>
                <div className={classes.iconBox}>
                    <IconButton onClick={this.handleClick('openGen')}><MoreVert
                        className={classes.iconsBarDefault}/></IconButton>
                </div>
                <PopUp
                    onOpen={this.state.openGen}
                    classes={classes}
                    textOptions={true}
                    previousIcon={classes.backArrow}
                    actionType={(this.handleRequestClose('openGen'))}
                    titleStyle={classes.titleSolidBlue}
                    title={'assessee'}
                    optionList={
                        [
                            {
                                show: 'alliance',
                                action:null,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'delete',
                                action:null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled
                            },
                            {
                                show: 'flag',
                                action:this.handleClick('openFlag'),
                                style:classes.optionPrimary,
                            },
                            {
                                show: 'move',
                                action:null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled,
                            },
                            {
                                show: 'reset',
                                action:this.handleClick('openReset'),
                                style:classes.optionPrimary,
                            },
                            {
                                show: 'review',
                                action:this.handleClick('openReview'),
                                style:classes.optionPrimary,
                            },
                            {
                                show: 'revise',
                                action:this.handleClick('openRevise'),
                                style:classes.optionPrimary,
                            },
                            {
                                show: 'select',
                                action:this.handleClick('openSelect'),
                                style:classes.optionPrimary,
                            },
                            {
                                show: 'suspend',
                                action:null,
                                ripple:true,
                                focus:true,
                                divider:'dark',
                                style:classes.optionPrimary
                            },
                            {
                                show: 'assignments',
                                action: this.handleClick('openAssesseeAssignReview'),
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimary,
                                notify:true
                            },
                            {
                                show: 'notifications',
                                action: this.handleClick('openAssesseeNotificationReview'),
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimary,
                                notify:true
                            },
                            {
                                show: 'reports',
                                action: this.handleClick('openAssesseeReportsReview'),
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimary,
                                notify:true
                            },
                        ]
                    }
                    close={this.handleRequestClose('openGen')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeAssignReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeAssignReview'),this.handleClick('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'assignments'}
                    optionList={this.state.assignmentOptionsRight.map( assessee => {
                        for (let action of assesseeAssignmentMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openAssesseeAssignReview')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeNotificationReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeNotificationReview'),this.handleClick('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'notifications'}
                    optionList={this.state.notificationOptions.map( assessee => {
                        for (let action of assesseeNotificationMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openAssesseeNotificationReview')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeReportsReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeReportsReview'),this.handleClick('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'reports'}
                    optionList={this.state.reportsOptionsRight.map( assessee => {
                        for (let action of assesseeReportMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openAssesseeReportsReview')}
                />
                <PopUp
                    onOpen={this.state.openFlag}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openFlag'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'flag'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleFlag(this.handleDiagClose('openFlag'), this.props.updateFlag, card, false),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleFlag(this.handleDiagClose('openFlag'), this.props.updateFlag, card, true),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openFlag')}
                />

                <PopUp
                    onOpen={this.state.openMove}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openMove'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'move'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleRequestClose('openMove'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleRequestClose('openMove'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openMove')}
                />

                <PopUp
                    onOpen={this.state.openSelect}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openSelect'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'select'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleRequestClose('openSelect'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleRequestClose('openSelect'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openSelect')}
                />
                <PopUp
                    onOpen={this.state.openLink}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openLink'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'link'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleRequestClose('openLink'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleRequestClose('openLink'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openLink')}
                />
                <PopUp
                    onOpen={this.state.openReset}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openReset'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'reset'}
                    optionList={
                        [
                            {
                                show: 'activation',
                                action: this.handleRequestClose('openReset'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'password',
                                action:this.handleRequestClose('openReset'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openReset')}
                />
                <PopUp
                    onOpen={this.state.openReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openReview'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'review'}
                    passOptions={true}
                    optionList={this.state.reviewOptionsRight.map( assessee => {
                        for (let action of reviewMapRight) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openReview')}
                />
                <PopUp
                    onOpen={this.state.openRevise}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openRevise'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'revise'}
                    passOptions={true}
                    optionList={this.state.reviseOptionsRight.map( assessee => {
                        for (let action of reviseMapRight) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openRevise')}
                />
                <PopUp
                    onOpen={this.state.openSuspend}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openSuspend'),this.handleClick('openGen'))}
                    classes={classes}
                    title={'suspend'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleRequestClose('openSuspend'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleRequestClose('openSuspend'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleRequestClose('openSuspend')}
                />

            </div>
        )
    }
}

class DashboardIcon extends React.Component {
    state = {
        more: false,
    };

    handleOpen = () => {
        this.setState({ more: true });
    };

    handleDiagClose = () => {
        this.setState({ more: false });
    };

    isClosable = val => [
        'calculator basic',
        'calculator business',
        'calculator financial',
        'calculator scientific',
        'assessment',
        'google spreadsheet',
        'google textsheet',
        'microsoft spreadsheet',
        'microsoft textsheet'
    ].findIndex( tag => tag === val) !== -1

    isSm = width => {
        return width !== 'lg' && width !== 'xl' && width !== 'md'
    };

    render() {
        let {classes, toggle, leftDisplay, width} = this.props;
        return (

            <div className={classes.iconBarNav}>
                <div className={classes.iconBox}></div>
                <div className={classes.iconBox}>
                    {this.isClosable(this.props.leftDisplay) ?
                    <IconButton><Clear className={classes.iconsBarDefault} onClick={this.props.handleLeftDisplay(leftDisplay, true)}/></IconButton> : this.isSm(width) ?
                            null : <IconButton><PreviousIcon className={classes.iconsBarDefault} onClick={toggle}/></IconButton>
                    }
                </div>
                <div className={classes.iconBox}>
                    <IconButton onClick={this.handleOpen}><MoreVert className={classes.iconsBarDefault}/></IconButton>
                </div>
                <PopUp
                    onOpen={this.state.more}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleDiagClose}
                    titleStyle={classes.titleSolidGreen}
                    title={'dashboard'}
                    optionList={
                        [
                            {
                                show: 'assent',
                                action: null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled
                            },
                            {
                                show: 'assistance',
                                action: null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled
                            },
                            {
                                show: 'assumption',
                                action: null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled
                            },
                            {
                                show: 'assurance',
                                action: null,
                                disabled:true,
                                ripple:true,
                                focus:true,
                                style:classes.optionPrimaryDisabled
                            }
                        ]
                    }
                    close={this.handleDiagClose}
                />
            </div>

        )
    }
}

class SearchSelected extends React.Component {
    render() {
        let {classes, action} = this.props;
        return (
            <div className={classes.iconBarNav}>
                <div className={classes.iconBox}>
                </div>
                <div className={classes.iconBox}>
                </div>
                <div className={classes.iconBox}>
                </div>
                <div className={classes.iconBox}>
                    <IconButton
                        onClick={this.props.action('all')}
                    ><Clear
                        className={classes.iconsBarDefault}/></IconButton>
                </div>
            </div>
        )
    }
}

class LabelHeader extends React.Component {

    state = {
        information: false,
        userNotFound: false,
        dashboardOpen:false
    };

    handleUserNotSelected = () => {
        this.setState({
            userNotFound : true
        });
    }

    handleInfoDiagOpen = prop => () => {
        this.setState({
            [prop]: !this.state['prop']
        });
    };

    handleDashboardOpen = prop => () => {
        this.setState({
            [prop]: !this.state['prop']
        });
    };

    handleUserSelect = (selectUser, user, type) => selectUser(user, type);

    handleDiagClose = ( prop, doesUserExist, user, f, infoType ) => () => {

        const isUser = user => user ? Object.keys(user).length === 0 : true;

        if (f) this.handleUserSelect(f, user, infoType);

        if (doesUserExist && isUser(user)) {
            this.handleUserNotSelected();
        }

        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(f) {
        return () => f()
    }

    handleDashboardToggle = (setLeftPane, container, close) => () => {
        if (typeof setLeftPane === 'function') setLeftPane(container)();
        if (typeof close === 'function') close();
    }

    setLabelType = (onlyDashboard, isExemptLabel, type, value, check) => onlyDashboard && (value ? !isExemptLabel(value) : true) ?
            type : !onlyDashboard ?
            type : ''

    isLabelEmpty = label => !label.value && !label.type && !label.type

    setSelected = choices => Object.keys(choices).find( choice => choices[choice] === true )
    handleBack = (setTo, clearSelected, view) => () => {
        let previous = view && view.previousPanel ?
            view.previousPanel : 'left';
        setTo(previous);
        if (typeof  clearSelected === 'function') clearSelected();
    }

    render() {
        const {
            classes,
            readyToPass,
            isSm,
            card,
            width,
            label,
            scrolledList,
            listCardsPanel,
            action,
            showSearch,
            showSift,
            userAll,
            onlyDashboard,
            handleLeftDisplay,
            leftDisplay,
            showSort,
            endSearch,
            setEntityRoles,
            setEntityGroups,
            toggleMiddlePane,
            currentEntity,
            showExpand,
            view,
            handlePanelToggle,
            detailType
        } = this.props;

        let isEntitySelected = Object.keys(this.props.selectedEntity).length > 0

        const isExemptLabel = label => label === 'calculator' || label === 'manuscript' || label === 'toolkit' || label === 'worksheet'

        return (
            <div className={classes.cardHeaderContainer}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.userCardHeaderContainer}>
                    <Paper className={showExpand ? classes.expandIconContainer : onlyDashboard ?
                        classes.assesseesContainer : classes.assesseesContainerGreen}>
                        {!showExpand ?
                            <div className={typeof label !== 'object' ?
                                classes.midPanelHeader : classes.moreTextPanelHeader}>
                                {typeof label === 'object' ?
                                    <div className={label.value === 'dashboard' ?
                                        null : classes.makeClickable}
                                    >
                                        <span>{label.value}</span>

                                        &nbsp;
                                        {  label.value === 'associates' && label.type === 'all' ?
                                            null
                                             : <span className={this.setLabelType(onlyDashboard, isExemptLabel, label.type, label.value) ?
                                            classes.headerBadge : null}>
                                            { onlyDashboard && !isExemptLabel(label.value) ?
                                            label.type : !onlyDashboard && label.type === 'all' ?
                                                'distinct' : !onlyDashboard ?
                                            label.type : ''} </span> }
                                        <span>{label.add}</span>
                                        &nbsp;
                                        { !onlyDashboard && label.type ? <span className={classes.headerBadge1_0}>{label.type}</span> : null}
                                    </div> : !(label==='information' && readyToPass(card)) && (view.right && view.right.associate )?
                                        <div className={classes.makeClickable}>
                                            {'associate'}
                                            &nbsp;
                                        </div> : label === 'information' && readyToPass(card) ?
                                        <div className={classes.makeClickable}>
                                            {'assessee'}
                                            &nbsp;
                                            <span className={classes.headerBadge}>
                                                {detailType && (detailType.detailType === 'basic' || detailType.detailType === 'primary') ?
                                                    'key' : detailType.detailType} </span>
                                        </div> : label === 'information' && !readyToPass(card) ?
                                            '' : label}
                            </div> : <div className={classes.midPanelHeader}>
                                <IconButton
                                    onClick={this.toggle(handlePanelToggle)}
                                >
                                    <NextIcon className={classes.iconsBarDefault}/>
                                </IconButton>
                            </div>}
                        { label==='information' && !readyToPass(card) && (view.right && view.right.associate ) ?
                            <div style={{flex: 2, float: 'right', display: 'flex'}}>
                                <div className={classes.iconBox}>
                                    <IconButton><Clear
                                        onClick={this.handleBack(this.props.toggleAssesseeMobile, this.props.unselectUserAccount, this.props.view)}
                                        className={classes.iconsBarDefault}/></IconButton>
                                </div>
                                <div className={classes.iconBox}>
                                    <IconButton><MoreVert
                                        className={classes.iconsBarDefault}/></IconButton>
                                </div>
                            </div> : null}
                        {label === 'information' && readyToPass(card) ?
                            <AssesseeIcon classes={classes}
                                          card={card}
                                          view={view}
                                          selectUserAccount={this.props.selectUserAccount}
                                          unselectUserAccount={this.props.unselectUserAccount}
                                          toggleMiddlePane={toggleMiddlePane}
                                          toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                          updateFlag={this.props.updateFlag}
                                          createAssesseePanel={this.props.createAssesseePanel}
                                          /> : null}
                        {typeof label === 'object' && onlyDashboard && !(showSearch || showSort || showSift) ?
                            <DashboardIcon
                                toggle={this.toggle(handlePanelToggle)}
                                leftDisplay={leftDisplay}
                                width={width}
                                handleLeftDisplay={this.props.handleLeftDisplay}
                                classes={classes}/> : typeof label === 'object' && !this.isLabelEmpty(label) && !(showSearch || showSort || showSift) ?
                            <AssesseesIcon
                                countries={this.props.countries}
                                isEntitySelected={isEntitySelected}
                                toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                view={this.props.view}
                                selectUserAccount={this.props.selectUserAccount}
                                setCreateMode={this.props.setCreateMode}
                                setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                createAssesseePanel={this.props.createAssesseePanel}
                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                toggleMiddlePane={toggleMiddlePane}
                                scrolledList={scrolledList}
                                updateFlag={this.props.updateFlag}
                                updateSelect = {this.props.updateSelect}
                                action={action}
                                endSearch={endSearch}
                                handleActions={this.handleActions}
                                setEntityRoles={setEntityRoles}
                                setEntityGroups={setEntityGroups}
                                currentEntity={currentEntity}
                                width={width}
                                currentFlagMode = {this.props.currentFlagMode}
                                listCardsPanel={listCardsPanel}
                                createAssesseesAccount={this.props.createAssesseesAccount}
                                classes={classes}/> : null}

                        {label === 'Side' ?
                            <MinIcon classes={classes}></MinIcon> : null
                        }
                    </Paper>
                </Grid>
                <Dialog
                    open={this.state.information}
                    keepMounted
                    onClose={this.handleDiagClose('information')}
                >
                    <DialogTitle className={classes.popupHeader}>
                        <Paper>
                            <div className={classes.popUpTitleContainerParent}>
                                <div className={classes.PopHeaderTitle}>information</div>

                                <IconButton><Clear className={classes.iconsPopupDefault}
                                                   onClick={this.handleDiagClose('information')}/></IconButton>
                            </div>
                        </Paper>
                    </DialogTitle>
                    <DialogContent className={classNames(classes.DiagContainer, classes.fixedDim)}>
                        <div className={classes.popCheckContent}>
                            <Button className={classNames(classes.setLowerCase, classes.setGrey)}
                                    disableRipple={true} disableFocusRipple={true}
                                    onClick={this.handleDiagClose('information', true, card, this.props.selectUserAccount, 'all')}
                                    color="primary">
                                <div>  all</div>
                            </Button>
                        </div>
                        <div className={classes.popCheckContent}>
                            <Button className={classNames(classes.setLowerCase, classes.setGrey)}
                                    disableRipple={true} disableFocusRipple={true}
                                    onClick={this.handleDiagClose('information', true, card, this.props.selectUserAccount, 'basic')}
                                    color="primary">
                                <div>basic</div>
                            </Button>
                        </div>
                        <div className={classes.popCheckContent}>
                            <Button className={classNames(classes.setLowerCase, classes.setGrey)}
                                    disableRipple={true} disableFocusRipple={true}
                                    onClick={this.handleDiagClose('information')} color="primary">
                                <div> select</div>
                            </Button>
                        </div>

                    </DialogContent>

                </Dialog>
                <Dialog
                    open={this.state.dashboardOpen}
                    keepMounted
                    onClose={this.handleDiagClose('dashboardOpen')}
                >
                    <DialogTitle className={classes.popupHeader}>
                        <Paper>
                            <div className={classes.popUpTitleContainerParent}>
                                <div className={classes.PopHeaderTitle}>dashboard</div>

                                <IconButton><Clear className={classes.iconsPopupDefault}
                                                   onClick={this.handleDiagClose('dashboardOpen')}/></IconButton>
                            </div>
                        </Paper>
                    </DialogTitle>
                    <DialogContent className={classNames(classes.DiagContainer, classes.fixedDim)}>
                        <div className={classes.popCheckContent}>
                            <Button className={classNames(classes.setLowerCase, classes.setGrey)}
                                    disableRipple={true} disableFocusRipple={true}
                                    color="primary">
                                <div
                                onClick={this.handleDashboardToggle(handleLeftDisplay, 'assessee', this.handleDiagClose('dashboardOpen'))}
                                >assessee</div>
                            </Button>
                        </div>
                        <div className={classes.popCheckContent}>
                            <Button className={classNames(classes.setLowerCase, classes.setGrey)}
                                    disableRipple={true} disableFocusRipple={true}
                                    color="primary">
                                <div
                                onClick={this.handleDashboardToggle(handleLeftDisplay, 'manager', this.handleDiagClose('dashboardOpen'))}
                                > manager</div>
                            </Button>
                        </div>

                    </DialogContent>

                </Dialog>
                <Dialog
                    open={this.state.userNotFound}
                    keepMounted
                    onClose={this.handleDiagClose('information')}
                >
                    <DialogTitle className={classes.popupHeader}>
                        <Paper>
                            <div className={classes.popUpTitleContainerMid}>
                                <div className={classes.PopHeaderTitle}>error</div>

                                <IconButton><Clear className={classes.iconsPopupDefault}
                                                   onClick={this.handleDiagClose('userNotFound')}/>
                                </IconButton>
                            </div>
                        </Paper>
                    </DialogTitle>
                    <DialogContent className={classNames(classes.DiagContainer, classes.fixedDim)}>
                        {'Please select user !'}
                    </DialogContent>

                </Dialog>
            </div>
        )
    }
}

class Assessee extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.cardMainContainerRight}>
                <span className={classes.midPanelHeader}>information</span>
                <div className={classes.labelOptions}>
                    <IconButton><NextIcon className={classes.iconsBarDefault}/></IconButton>
                    <IconButton><DoneIcon className={classes.iconsBarDefault}/></IconButton>
                    <IconButton><Clear className={classes.iconsBarDefault}/></IconButton>
                    <IconButton><MoreVert className={classes.iconsBarDefault}/></IconButton>
                </div>
            </div>
        )
    }
}

class PagerIcons extends React.Component {
    constructor(props){
        super(props)
    }
    handleBack = (setTo, openCreateAssesseloop) => () => {
        let panel = this.props.createAssesseePanel;
         setTo(panel);
        if (typeof  openCreateAssesseloop === 'function') openCreateAssesseloop();
    }
    render() {
        let {classes, isCreate} = this.props;
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {isCreate ?
                <div className={classNames(classes.measureBoxFooter, classes.borderBox)}>
                    <LabelIcon
                     classes={classes}
                     textColor={solidGrey}
                     iconLabelStyle={classes.iconsFooterLabelRight}
                     actions={this.handleBack(this.props.toggleAssesseeMobile,this.props.setCreateAssesseeMode)}
                     iconButtonStyle={classes.iconsFooterRight}
                     inputLabel='create'>
                        <Add />
                     </LabelIcon>
                </div>:
                    <div className={classNames(classes.measureBoxFooter, classes.borderBox)}>
                        <LabelIcon classes={classes} textColor={solidGrey} iconLabelStyle={classes.iconsFooterLabelRight} iconButtonStyle={classes.iconsFooterRight} inputLabel='first'><FirstPage /></LabelIcon>
                        <LabelIcon classes={classes} textColor={solidGrey} iconLabelStyle={classes.iconsFooterLabelRight} iconButtonStyle={classes.iconsFooterRight} inputLabel='previous'><KeyboardArrowLeft /></LabelIcon>
                        <LabelIcon classes={classes} textColor={solidGrey} iconLabelStyle={classes.iconsFooterLabelRight} iconButtonStyle={classes.iconsFooterRight} inputLabel='next'><KeyboardArrowRight /></LabelIcon>
                        <LabelIcon classes={classes} textColor={solidGrey} iconLabelStyle={classes.iconsFooterLabelRight} iconButtonStyle={classes.iconsFooterRight} inputLabel='last'><LastPage /></LabelIcon>
                    </div>
                }
            </Grid>
        )
    }
}

class Leftfooter extends React.Component {

    state = {
        value: 0,
        calcOpen:false,
        manuscriptOpen:false,
        toolkitOpen:false,
        worksheetOpen:false,
        basicCalcOpen:false,
        sciCalcOpen:false,
        alignOpen:false,
        expanded: false,
        gaugeOpen:false,
        internetexpanded: false,
        alignmentexpanded: false
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleDiagOpen = prop => event => {
        this.setState(this.afterChange(prop));
    };
    afterChange =(prop,panel) =>{
        let temp={};
        let openList=[
            'calcOpen',
            'manuscriptOpen',
            'toolkitOpen',
            'worksheetOpen',
            'basicCalcOpen',
            'sciCalcOpen',
            'alignOpen',
            'gaugeOpen'
        ];
        openList.forEach( val => temp[val] = false);
        temp[prop] = true;
        return temp
    };

    handleDiagClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
        if (this.props.view && this.props.view.dev) this.setState({ alignmentexpanded : false })
    };
    handleAlignOpenDiagClose = (closeWindow, closeDev) =>() => {
        closeWindow();
        closeDev();
    }

    handleCount = (f, count) => () => f(count);

    handleDashboardToggle = (setLeftPane, container, close) => () => {
        if (typeof setLeftPane === 'function') setLeftPane(container)();
        if (typeof close === 'function') close();
    }


    isCalc = leftTagged => [
            'calculator basic',
            'calculator business',
            'calculator financial',
            'calculator scientific',
        ].find( tag => leftTagged.calculator[tag] === 'active')

    isManuscript = leftTagged => [ 'assessment' ].find( tag => leftTagged.manuscript[tag] === 'active')

    isToolkit = leftTagged => [ 'template', 'gauge' ].find( tag => leftTagged.toolkit[tag] === 'active')

    isWorksheet = leftTagged => [
            'google spreadsheet',
            'google textsheet',
            'microsoft spreadsheet',
            'microsoft textsheet'
        ].find( tag => leftTagged.worksheet[tag] === 'active')

    handleExpandClick = (val) => {
        if(val == 'internetexpanded') {
            this.setState({ internetexpanded: !this.state.internetexpanded });
        }

        if(val == 'alignmentexpanded'){
            this.setState({ alignmentexpanded: !this.state.alignmentexpanded });
        }

    };

    render() {
        let {classes, handleLeftDisplay, handleActions, closeDeveloperMode, leftTaggedDisplay, leftTagged} = this.props;

        const { value } = this.state;

        let calc =  this.isCalc(leftTagged),
            manuscript = this.isManuscript(leftTagged),
            toolkit = this.isToolkit(leftTagged),
            worksheet = this.isWorksheet(leftTagged);

        if (toolkit === 'template') toolkit = this.props.view.dev ? '' : toolkit; // TODO: Need to differenciate alignment inside template

        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <BottomNavigation
                        value={value}
                        showLabels={true}
                        onChange={this.handleChange}
                        className={classes.MuiBottomNavigationCustom}
                    >
                    <LabelIcon
                        classes={classes}
                        actions={calc ?
                            this.handleDashboardToggle(handleLeftDisplay, calc) : handleActions(this.handleDiagOpen('calcOpen'))}
                        iconLabelStyle={classes.iconsFooterLabelLeft}
                        iconButtonStyle={calc ? classes.iconsFooterLeftSelected : classes.iconsFooterLeft}
                        inputLabel='calculator'>
                        <Keyboard />
                    </LabelIcon>
                    <LabelIcon
                        classes={classes}
                        actions={manuscript ?
                            this.handleDashboardToggle(handleLeftDisplay, manuscript) : handleActions(this.handleDiagOpen('manuscriptOpen'))}
                        iconLabelStyle={classes.iconsFooterLabelLeft}
                        iconButtonStyle={manuscript ? classes.iconsFooterLeftSelected : classes.iconsFooterLeft}
                        inputLabel='manuscript'>
                        <Manuscript />
                    </LabelIcon>
                    <LabelIcon
                        classes={classes}
                        actions={handleActions(this.handleDiagOpen('toolkitOpen'))}
                        iconLabelStyle={classes.iconsFooterLabelLeft}
                        iconButtonStyle={toolkit ? classes.iconsFooterLeftSelected : classes.iconsFooterLeft}
                        inputLabel='toolkit'>
                        <BusinessCenter />
                    </LabelIcon>
                    <LabelIcon
                        classes={classes}
                        actions={worksheet ?
                            this.handleDashboardToggle(handleLeftDisplay, worksheet) : handleActions(this.handleDiagOpen('worksheetOpen'))}
                        iconLabelStyle={classes.iconsFooterLabelLeft}
                        iconButtonStyle={worksheet ? classes.iconsFooterLeftSelected : classes.iconsFooterLeft}
                        inputLabel='worksheet'>
                        <InsertDriveFile />
                    </LabelIcon>
                    </BottomNavigation>

                <PopUp
                    onOpen={this.state.calcOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagClose('calcOpen')}
                    titleStyle={classes.titleSolidGreen}
                    title={'calculator'}
                    close={this.handleDiagClose('calcOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} actions={handleActions(this.handleDiagClose('calcOpen'), this.handleDashboardToggle(handleLeftDisplay, 'calculator basic'))} inputLabel='basic'><Keyboard /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} actions={handleActions(this.handleDiagClose('calcOpen'), this.handleDashboardToggle(handleLeftDisplay, 'calculator business'))} inputLabel='business'><Keyboard /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} actions={handleActions(this.handleDiagClose('calcOpen'), this.handleDashboardToggle(handleLeftDisplay, 'calculator financial'))} inputLabel='financial'><KeyboardHide /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} actions={handleActions(this.handleDiagClose('calcOpen'), this.handleDashboardToggle(handleLeftDisplay, 'calculator scientific'))} inputLabel='scientific'><KeyboardHide /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                    </div>
                </PopUp>
                <PopUp
                    onOpen={this.state.manuscriptOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagClose('manuscriptOpen')}
                    titleStyle={classes.titleSolidGreen}
                    title={'manuscript'}
                    close={this.handleDiagClose('manuscriptOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <LabelIcon classes={classes} actions={handleActions(this.handleDiagClose('manuscriptOpen'), this.handleDashboardToggle(handleLeftDisplay, 'assessment'))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='assessment'><Manuscript /></LabelIcon>
                    </div>
                </PopUp>
                <PopUp
                    onOpen={this.state.toolkitOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagClose('toolkitOpen')}
                    titleStyle={classes.titleSolidGreen}
                    title={'toolkit'}
                    close={this.handleDiagClose('toolkitOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagOpen('gaugeOpen'))} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classes.iconsFooterDefault} inputLabel='gauge'><DashIcon /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagOpen('alignOpen'))} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classes.iconsFooterDefault} inputLabel='template'><BorderClear /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                    </div>
                </PopUp>
                <PopUp
                    onOpen={this.state.gaugeOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagOpen('toolkitOpen')}
                    titleStyle={classes.titleLightGreen}
                    title={'gauge'}
                    close={this.handleDiagClose('gaugeOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagOpen('gaugeOpen'),()=>this.handleExpandClick('internetexpanded'))} expandedClass={(this.state.internetexpanded?classes.openExpandedClass:'')} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classes.iconsFooterDefault} inputLabel='internet'><DashIcon /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes}  iconLabelStyle={classes.iconsFooterLabelDefault} disabled="true" iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='dummy'><DashIcon /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                    </div>
                    <Divider/>
                    <Collapse in={this.state.internetexpanded} timeout="auto" unmountOnExit>
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon
                                    classes={classes}
                                    actions={
                                        handleActions(this.handleDashboardToggle(), this.handleCount())}
                                    iconLabelStyle={classes.iconsFooterLabelLeft}
                                    iconButtonStyle={classes.iconsFooterDefault}
                                    inputLabel='ookla speedtest'>
                                    <BorderClear/>
                                </LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                                <LabelIcon
                                    classes={classes}
                                    actions={
                                        handleActions(this.handleDashboardToggle(), this.handleCount())} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='gauge 2'>
                                    <BorderClear />
                                </LabelIcon>
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </Collapse>
                </PopUp>

                <PopUp
                    onOpen={this.state.alignOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagOpen('toolkitOpen')}
                    titleStyle={classes.titleLightGreen}
                    title={'template'}
                    close={this.handleDiagClose('alignOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagOpen('alignOpen'),()=>this.handleExpandClick('alignmentexpanded'))} expandedClass={(this.state.alignmentexpanded?classes.openExpandedClass:'')} iconLabelStyle={classes.iconsFooterLabelDefault} iconButtonStyle={classes.iconsFooterDefault} inputLabel='alignment'><BorderClear /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes}  iconLabelStyle={classes.iconsFooterLabelDefault} disabled="true" iconButtonStyle={classNames(classes.iconsFooterDefault, classes.unAvailable)} inputLabel='dummy'><DashIcon /></LabelIcon>
                            <div className={classes.iconBoxFooter}></div>

                        </div>
                    </div>
                    <Divider/>
                    <Collapse in={this.state.alignmentexpanded} timeout="auto" unmountOnExit>
                        <div className={classes.footerPopupIcons}>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>

                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 1 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            inputLabel='one column'
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={
                                                handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 1))}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            iconButtonStyle={classes.iconsFooterDefault}
                                            inputLabel='one column'>
                                            <BorderClear/>
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>

                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 2 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            inputLabel='two columns'
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={
                                                handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 2))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='two columns'>
                                            <BorderClear />
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>
                            </div>

                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 3 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            inputLabel='three columns'
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={
                                                handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 3))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='three columns'>
                                            <BorderClear />
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>
                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 4 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            inputLabel='four columns'
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={
                                                handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 4))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='four columns'>
                                            <BorderClear />
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                            <div className={classes.mbPager}>
                                <div className={classes.iconBoxFooter}></div>
                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 5 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            inputLabel='five columns'
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 5))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='five columns'>
                                            <BorderClear />
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>
                                {
                                    this.props.view && !this.props.view.dev && this.props.view.measure === 6 ?
                                        <LabelIcon
                                            classes={classes}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            inputLabel='six columns'
                                            iconButtonStyle={classNames(classes.iconsFooterDefault, classes.openExpandedClass)}
                                            actions={handleActions(closeDeveloperMode)}
                                        >
                                            <Clear/>
                                        </LabelIcon> :
                                        <LabelIcon
                                            classes={classes}
                                            actions={handleActions(this.handleDashboardToggle(handleLeftDisplay, 'template'), this.handleCount(this.props.setMeasureCardCount, 6))}
                                            iconLabelStyle={classes.iconsFooterLabelLeft}
                                            iconButtonStyle={classes.iconsFooterDefault} inputLabel='six columns'>
                                            <BorderClear/>
                                        </LabelIcon>
                                }
                                <div className={classes.iconBoxFooter}></div>
                            </div>
                        </div>
                    </Collapse>
                </PopUp>
                <PopUp
                    onOpen={this.state.worksheetOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.handleDiagClose('worksheetOpen')}
                    titleStyle={classes.titleSolidGreen}
                    title={'worksheet'}
                    close={this.handleDiagClose('worksheetOpen')}>
                    <div className={classes.footerPopupIcons}>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>

                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagClose('worksheetOpen'), this.handleDashboardToggle(handleLeftDisplay, 'google spreadsheet'))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='google spreadsheet'><InsertDriveFile /> </LabelIcon>
                            <div className={classes.iconBoxFooter}></div>

                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagClose('worksheetOpen'), this.handleDashboardToggle(handleLeftDisplay, 'google textsheet'))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='google textsheet'><InsertDriveFile /> </LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                        <div className={classes.mbPager}>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagClose('worksheetOpen'), this.handleDashboardToggle(handleLeftDisplay, 'microsoft spreadsheet'))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='microsoft spreadsheet'><InsertDriveFile /> </LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                            <LabelIcon classes={classes} actions={handleActions(this.handleDiagClose('worksheetOpen'), this.handleDashboardToggle(handleLeftDisplay, 'microsoft textsheet'))} iconLabelStyle={classes.iconsFooterLabelLeft} iconButtonStyle={classes.iconsFooterDefault} inputLabel='microsoft textsheet'><InsertDriveFile /> </LabelIcon>
                            <div className={classes.iconBoxFooter}></div>
                        </div>
                    </div>
                </PopUp>
            </Grid>
        )
    }
}

const images = [ '/resources/images/steve.jpg'];

class SectionA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            isSelected:false,
            isVerified:false
        };
    }

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

    handleSelect = (prop) => () => {
        let temp = {};
        temp[prop] = !this.state[prop];
        this.setState(temp);
    };
    handleVerified = (prop) => () => {
        let temp = {};
        temp[prop] = !this.state[prop];
        this.setState(temp);
    };
    handleFlag = (f, user, show,currentFlagMode,mode) => () => {
        if (user._id) f([user._id], show);
        currentFlagMode(mode);
    };

    handleNameChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }

    render() {
        const{photoIndex, isOpen} = this.state;
        const {title, classes, width, user, setName, setAlias} = this.props;
        const profileAvrtRght = true;

        return (
            <Paper className={classes.dossierPaper}>
                <div className={classNames(classes.dashboardProfileMid, classes.dashboardProfileMidRight)}>
                    <div className={classes.formContainer}>
                        <FormControl className={classes.inputGroup}>
                            <div className={classes.ediatableLabel}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={classes.labelInput}>
                                    name
                                </InputLabel>
                            </div>
                            <Input id="name-simple"
                                   className={classes.inputText}
                                   readOnly={true}
                                   disableUnderline={true}
                                   value={user ? setName(user, 'from right') : 'No Name'}/>
                        </FormControl>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                        <Badge className={classes.badgeBox} >
                            <IconButton><Notifications /></IconButton>
                        </Badge>
                    </div>

                    <div className={classes.dossierImage}>
                        { profileAvrtRght ?
                            <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={() => this.setState({ isOpen: true })}>
                                <Avatar
                                    alt="Anonymous"
                                    src="/resources/images/steve.jpg"

                                    className={classNames(classes.avatar, classes.profileAvatarRight)}
                                />
                                {/*<span className={classes.verifiedBadge}>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                    />
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                    />
                                </span>*/}
                            </Button> :
                            <Button variant="fab" disabled={true} mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable, classes.imageNA)}>
                                <Person />
                            </Button>
                        }

                        {isOpen && (
                            <div className={classes.lightBoxDiv}>
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
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
                <div className={classNames(classes.dashboard, classes.mT5)}>
                    <div className={classes.formContainer}>
                        <FormControl className={classes.inputGroup}>
                            <div className={classes.ediatableLabel}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    className={classes.labelInputAlias}>alias</InputLabel>
                            </div>

                            <Input id="name-simple"
                                   className={classes.inputText}
                                   readOnly={true}
                                   disableUnderline={true}
                                   value={user ? setAlias(user, false) : 'No Alias'}/>
                        </FormControl>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.unitFlexTop)}>
                    <div className={classNames(classes.unitFlex, classes.iconsBarDefaultFlag)}>
                        {(user.flag == true)?
                            <IconButton className={classes.selectedIconColor} onClick={this.handleFlag(this.props.updateFlag,user,false,this.props.currentFlagMode,"oneFlag")}>
                                <i className="fas fa-flag"></i>
                            </IconButton> : null }
                        {(user.flag == false || user.flag == undefined )?
                            <IconButton onClick={this.handleFlag(this.props.updateFlag,user,true,this.props.currentFlagMode,"oneFlag")}>
                                <i className="far fa-flag"></i>
                            </IconButton> : null }
                    </div>
                    <div className={classes.unitFlex} style={{alignItems:'flex-start'}}>
                        {(user.select == false || user.select == undefined)?
                            <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                <IconButton onClick={this.handleFlag(this.props.updateSelect,user,true,this.props.currentFlagMode,"oneSelect")}><CheckBoxOutlineBlank/></IconButton>
                            </div>:null}
                        {(user.select == true)?
                            <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                <IconButton onClick={this.handleFlag(this.props.updateSelect,user,false,this.props.currentFlagMode,"oneSelect")} className={classes.selectedIconColor}><CheckBox/></IconButton>
                            </div>:null}
                    </div>
                </div>
                    <div className={classNames(classes.unitFlex, classes.unitFlexTop)}>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser, classes.verifiedUserTop)}>
                            {(this.state.isVerified == true)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /></IconButton> :null }
                            {(this.state.isVerified == false)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /> </IconButton>: null }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser, classes.verifiedUserTop)} style={{alignItems:'flex-start'}}>
                            {(this.state.isVerified == false)?
                                <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/verified.svg"
                                    onClick={this.handleVerified('isVerified')}
                                    className={classes.verifiedImage}
                                /></IconButton> :null }
                            {(this.state.isVerified == true)?
                                <IconButton>
                                <img
                                    alt="Anonymous"
                                    src="/resources/images/unverified.svg"
                                    onClick={this.handleVerified('isVerified')}
                                    className={classes.verifiedImage}
                                /> </IconButton>: null }
                        </div>
                    </div>
                </div>
            </Paper>
        )
    }
}

class SectionARevise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            isSelected:false,
            isVerified:false
        };
    }

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

    handleSelect = (prop) => () => {
        let temp = {};
        temp[prop] = !this.state[prop];
        this.setState(temp);
    };
    handleVerified = (prop) => () => {
        let temp = {};
        temp[prop] = !this.state[prop];
        this.setState(temp);
    };
    handleFlag = (f, user, show,currentFlagMode,mode) => () => {
        if (user._id) f([user._id], show);
        currentFlagMode(mode);
    };

    handleNameChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    toggle = (prop, close) => () => {
        this.setState(this.change(prop, close ? false : !this.state[prop]))
    }

    render() {
        const{photoIndex, isOpen} = this.state;
        const {title, classes, width, user, setName, setAlias} = this.props;
        const profileAvrtRght = true;

        return (
            <Paper className={classes.dossierPaper}>
                <div className={classNames(classes.dashboardProfileMid, classes.dashboardProfileMidRight)}>
                    <div className={classes.formContainer}>
                        <FormControl className={classes.inputGroup}>
                            <div className={classes.ediatableLabel}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    onClick={this.toggle('nameReview')}
                                    className={classNames(classes.labelInput, classes.linkText)}>
                                    name
                                </InputLabel>
                            </div>
                            <Input id="name-simple"
                                   className={classes.inputText}
                                   readOnly={true}
                                   disableUnderline={true}
                                   value={user ? setName(user, 'from right') : 'No Name'}/>
                        </FormControl>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                        <Badge className={classes.badgeBox} >
                            <IconButton><Notifications /></IconButton>
                        </Badge>
                    </div>

                    <div className={classes.dossierImage}>
                        { profileAvrtRght ?
                            <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={() => this.setState({ isOpen: true })}>
                                <Avatar
                                    alt="Anonymous"
                                    src="/resources/images/steve.jpg"

                                    className={classNames(classes.avatar, classes.profileAvatarRight)}
                                />
                                {/*<span className={classes.verifiedBadge}>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                    />
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                    />
                                </span>*/}
                            </Button> :
                            <Button variant="fab" disabled={true} mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable, classes.imageNA)}>
                                <Person />
                            </Button>
                        }

                        {isOpen && (
                            <div className={classes.lightBoxDiv}>
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
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
                <div className={classNames(classes.dashboard, classes.mT5)}>
                    <div className={classes.formContainer}>
                        <FormControl className={classes.inputGroup}>
                            <div className={classes.ediatableLabel}>
                                <InputLabel
                                    htmlFor="name-simple"
                                    onClick={this.toggle('aliasReview')}
                                    className={classNames(classes.labelInputAlias, classes.linkText)}>alias</InputLabel>
                            </div>

                            <Input id="name-simple"
                                   className={classes.inputText}
                                   readOnly={true}
                                   disableUnderline={true}
                                   value={user ? setAlias(user, false) : 'No Alias'}/>
                        </FormControl>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.unitFlexTop)}>
                        <div className={classNames(classes.unitFlex, classes.iconsBarDefaultFlag)}>
                            {(user.flag == true)?
                                <IconButton className={classes.selectedIconColor} onClick={this.handleFlag(this.props.updateFlag,user,false,this.props.currentFlagMode,"oneFlag")}>
                                    <i className="fas fa-flag"></i>
                                </IconButton> : null }
                            {(user.flag == false || user.flag == undefined )?
                                <IconButton onClick={this.handleFlag(this.props.updateFlag,user,true,this.props.currentFlagMode,"oneFlag")}>
                                    <i className="far fa-flag"></i>
                                </IconButton> : null }
                        </div>
                        <div className={classes.unitFlex} style={{alignItems:'flex-start'}}>
                            {(user.select == false || user.select == undefined)?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateSelect,user,true,this.props.currentFlagMode,"oneSelect")}><CheckBoxOutlineBlank/></IconButton>
                                </div>:null}
                            {(user.select == true)?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateSelect,user,false,this.props.currentFlagMode,"oneSelect")} className={classes.selectedIconColor}><CheckBox/></IconButton>
                                </div>:null}
                        </div>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.unitFlexTop)}>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser, classes.verifiedUserTop)}>
                            {(this.state.isVerified == true)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /></IconButton> :null }
                            {(this.state.isVerified == false)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /> </IconButton>: null }
                        </div>
                        <div className={classNames(classes.unitFlex, classes.verifiedUser, classes.verifiedUserTop)} style={{alignItems:'flex-start'}}>
                            {(this.state.isVerified == false)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/verified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /></IconButton> :null }
                            {(this.state.isVerified == true)?
                                <IconButton>
                                    <img
                                        alt="Anonymous"
                                        src="/resources/images/unverified.svg"
                                        onClick={this.handleVerified('isVerified')}
                                        className={classes.verifiedImage}
                                    /> </IconButton>: null }
                        </div>
                    </div>
                </div>
                <PopUp
                    onOpen={this.state.nameReview}
                    classes={classes}
                    checkIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.toggle('nameReview')}
                    titleStyle={classes.titleSolidBlue}
                    title={'assessee'}
                    close={this.toggle('nameReview')}>
                    <DialogContent className={classNames(classes.dossierPopUpContent, classes.fixed10PadDim, classes.revisePopupContent)}>
                        <div className={classNames(classes.PopupFormBox, classes.labelPopupBox)}>
                            <InputLabel htmlFor="name-input" className={classes.textForLabelPopup}>name</InputLabel>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classNames(classes.formControlReviewAlias, classes.selectFields)}>
                                <IGSelect
                                    list={['', 'Dr', 'Dr (Mrs)', 'Mr', 'Mrs', 'Ms', 'Prof', 'Prof (Mrs)', 'Rev Fr', 'Rev Sr']}
                                    label="prefix"/>
                            </FormControl>
                            <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classes.inputFields}>
                                <TextField
                                    id="firstname"
                                    label="first name"
                                    className={classNames(classes.textForInput, classes.inputText)}
                                    margin="normal"
                                />
                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classes.inputFields}>
                                <TextField
                                    id="othernames"
                                    label="other names"
                                    className={classNames(classes.textForInput, classes.inputText)}
                                    margin="normal"
                                />
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classes.inputFields}>
                                <TextField
                                    id="lastnames"
                                    label="last name"
                                    className={classNames(classes.textForInput, classes.inputText)}
                                    margin="normal"
                                />
                                <FormHelperText className={classes.helperText}>This information is required.</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classes.selectFields}>
                                <IGSelect
                                    list={['', 'Jr', 'Sr']}
                                    label="suffix"/>
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </FormControl>
                        </div>
                    </DialogContent>
                </PopUp>
                <PopUp
                    onOpen={this.state.aliasReview}
                    classes={classes}
                    checkIcon={classes.backArrow}
                    iconOptions={true}
                    actionType={this.toggle('aliasReview')}
                    titleStyle={classes.titleSolidBlue}
                    title={'assessee'}
                    close={this.toggle('aliasReview')}>
                    <DialogContent className={classNames(classes.dossierPopUpContent, classes.fixed10PadDim, classes.revisePopupContent)}>
                        <div className={classes.PopupFormBox}>
                            <FormControl className={classes.inputFields}>
                                <TextField
                                    id="alias"
                                    label="alias"
                                    className={classNames(classes.textForInput, classes.inputText)}
                                    margin="normal"
                                />
                                <FormHelperText className={classNames(classes.helperText, classes.hide)}>hint/error-message</FormHelperText>
                            </FormControl>
                        </div>
                    </DialogContent>
                </PopUp>
            </Paper>
        )
    }
}

class DetailsCard extends React.Component {
    render() {
        const {classes, isHeight, view, setName, setAlias, userDetail, authenticate,selectedUserAccount} = this.props;



        let user = !view || !view.self ?
            this.props.user : !authenticate || !authenticate.currentUser ?
                this.props.user : authenticate.currentUser;

        return (
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
                <div className={classes.dossierContainerTop}>
                    {userDetail.mode === 'revise' ?
                        <SectionARevise classes={classes} updateFlag={this.props.updateFlag} updateSelect = {this.props.updateSelect} currentFlagMode={this.props.currentFlagMode} user={user} setName={setName} setAlias={setAlias}/>:
                        userDetail.mode === 'create' ?
                        <SectionARevise classes={classes} updateFlag={this.props.updateFlag} updateSelect = {this.props.updateSelect} currentFlagMode={this.props.currentFlagMode} user={user} setName={setName} setAlias={setAlias}/>:
                        userDetail.mode === 'review' ?
                        <SectionA classes={classes} updateFlag={this.props.updateFlag} updateSelect = {this.props.updateSelect} currentFlagMode={this.props.currentFlagMode} user={user} setName={setName} setAlias={setAlias}/> : null
                    }
                </div>

                <div className={classes.dossierContainerRightTabs}>
                    <DetailsSection classes={classes} user={user} userDetail={userDetail}/>
                    <div className={classes.cardExpand}></div>
                </div>

                {/*<div className={classes.dossierContainerRightTabs}>*/}
                    {/*<DetailsSection classes={classes} user={user} userDetail={userDetail}/>*/}

                    {/*<div className={classes.cardExpand}></div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

class DashboardCard extends React.Component {
    render() {
        const {classes, viewSelect} = this.props;

        switch( viewSelect ) {
            case 'calculator basic':
                return (
                 <div className={classes.comingSoonPane}> basic calculator</div>
                )
            case 'calculator business':
                return (
                 <div className={classes.comingSoonPane}> business calculator</div>
                )
            case 'calculator financial':
                return (
                    <div className={classes.comingSoonPane}> financial calculator</div>
                )
            case 'calculator scientific':
                return (
                    <div className={classes.comingSoonPane}> scientific calculator</div>
                )
            case 'assessment':
                return (
                    <div className={classes.comingSoonPane}> assessment manuscript </div>
                )
            case 'google spreadsheet':
                return (
                    <div className={classes.comingSoonPane}> google spreadsheet </div>
                )
            case 'google textsheet':
                return (
                    <div className={classes.comingSoonPane}> google textsheet </div>
                )
            case 'microsoft spreadsheet':
                return (
                    <div className={classes.comingSoonPane}> microsoft spreadsheet </div>
                )
            case 'microsoft textsheet':
                return (
                    <div className={classes.comingSoonPane}> microsoft textsheet </div>
                )
            case 'assessee':
                return (
                    <div style={{height: this.props.isHeight(this.props.view), overflow: 'overlay', marginTop: 10}}>
                        <div className={classes.dossierContainerProfile}>
                            <SearchSection
                                setSwitch={this.props.setSwitch}
                                view={this.props.view}
                                userDetail={this.props.detailType}
                                classes={classes}
                                unselectUserAccount={this.props.unselectUserAccount}
                                viewCurrentUser={this.props.viewCurrentUser}
                                selectUserAccount={this.props.selectUserAccount}
                                card={this.props.selectedUserAccount}
                                selectedEntity={this.props.selectedEntity}
                                closeMiddlePane={this.props.closeMiddlePane}
                                authenticate={this.props.authenticate}
                                toggleMiddlePane={this.props.toggleMiddlePane}
                                toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                            />
                        </div>
                        { this.props.authenticate && this.props.authenticate.selectedEntity && this.props.authenticate.selectedEntity.description ?
                        <div className={classes.menuLeft}>
                            <NavListItems
                                classes={classes}
                                countries={this.props.countries}
                                view={this.props.view}
                                endSearch={this.props.endSearch}
                                currentEntity={this.props.currentEntity}
                                setEntityRoles={this.props.setEntityRoles}
                                setEntityGroups={this.props.setEntityGroups}
                                toggleMiddlePane={this.props.toggleMiddlePane}
                                toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                toggleDeveloperMode={this.props.toggleDeveloperMode}
                                setCreateMode={this.props.setCreateMode}
                                setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                createAssesseePanel={this.props.createAssesseePanel}
                                selectUserAccount={this.props.selectUserAccount}
                                createAssesseesAccount={this.props.createAssesseesAccount}                                
                            />
                        </div> : null }
                    </div>
                )
            default:
                return (
                    <div style={{height: this.props.isHeight(this.props.view), overflow: 'overlay', marginTop: 10}}>
                        <div className={classes.dossierContainerProfile}>
                            <SearchSection
                                classes={classes}
                                view={this.props.view}
                                userDetail={this.props.detailType}
                                unselectUserAccount={this.props.unselectUserAccount}
                                viewCurrentUser={this.props.viewCurrentUser}
                                setSwitch={this.props.setSwitch}
                                selectUserAccount={this.props.selectUserAccount}
                                card={this.props.selectedUserAccount}
                                selectedEntity={this.props.selectedEntity}
                                authenticate={this.props.authenticate}
                                closeMiddlePane={this.props.closeMiddlePane}
                                toggleMiddlePane={this.props.toggleMiddlePane}
                                toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                            />
                        </div>
                        <div className={classes.menuLeft}>
                            <NavListItems
                                classes={classes}
                                countries={this.props.countries}
                                toggleMiddlePane={this.props.toggleMiddlePane}
                                endSearch={this.props.endSearch}
                                setEntityRoles={this.props.setEntityRoles}
                                currentEntity={this.props.currentEntity}
                                view={this.props.view}
                                setEntityGroups={this.props.setEntityGroups}
                                toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                toggleDeveloperMode={this.props.toggleDeveloperMode}
                                setCreateMode={this.props.setCreateMode}
                                setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                createAssesseePanel={this.props.createAssesseePanel}
                                selectUserAccount={this.props.selectUserAccount}
                                createAssesseesAccount={this.props.createAssesseesAccount}
                            />
                        </div>
                    </div>
                )
        }
    }
}

class SortCard extends React.Component {
    render() {
        let {classes, sortText} = this.props;

        const showSelect = () => {
            this.props.listType === 'group' ?
                this.props.setEntityGroupUsers(this.props.store['id'], this.props.store.name) : this.props.listType === 'role' ?
                this.props.setEntityRoleUsers(this.props.store['id'], this.props.store.roleName) : null;
        }

        return (
            <div className={classes.cardMainContainerMid}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.userCardContentContainer}>
                <Button
                    disableFocusRipple={true}
                    disableRipple={true}
                    className={classes.cardButton}
                    onClick={showSelect}
                >
                    <div className={classes.measureBox}>
                        <div className={classes.cardContent}>
                            <div>{sortText}</div>
                        </div>
                    </div>
                </Button>
            </Grid>
            </div>
        )
    }
}

class SelectionCard extends React.Component {
    render() {
        let {classes, card, search, width, attributes, setName, setAlias} = this.props,
            showType = '';

        showType = attributes.filtered && attributes.filtered.show ?
            'filtered' : card.type;

        let showList = () => {
            switch (showType) {
                case "scan":
                    return (
                        search.userAccounts.map((card, index) =>
                            <AccountCard key={index} index={index} classes={classes} title="information"
                                         width={width}
                                         setName={setName}
                                         viewCurrentUser={this.props.viewCurrentUser}
                                         selectedUserAccount={this.props.selectedUserAccount}
                                         updateFlag={this.props.updateFlag}
                                         setAlias={setAlias}
                                         selectUserAccount={this.props.selectUserAccount}
                                         card={card}/>
                        )
                    )
                case "groups":
                    if (attributes.groups.length > 0) {
                        return (
                            attributes.groups.map((group, index) =>
                                <SortCard key={index}
                                          listType={"group"}
                                          setEntityGroupUsers={this.props.setEntityGroupUsers}
                                          sortText={group.name}
                                          currentEntity={this.props.currentEntity}
                                          store={group}
                                          classes={classes}/>)
                        )
                    } else return (
                        <div className={classes.downloadInProgress} ><div>download in progress !</div></div>
                    )

                case "roles":
                    if (attributes.roles.length > 0) {
                        return (
                            attributes.roles.map((role, index) =>
                                <SortCard key={index}
                                          listType={"role"}
                                          setEntityRoleUsers={this.props.setEntityRoleUsers}
                                          sortText={role.roleName}
                                          currentEntity={this.props.currentEntity}
                                          store={role}
                                          classes={classes}/>)
                        )
                    } else return (
                        <div className={classes.downloadInProgress}><div>download in progress !</div></div>
                    )

                case "filtered":
                    if (attributes.filtered && attributes.filtered.list && attributes.filtered.list.length > 0) {
                        return (
                            <div>
                                <div className={classes.shadowEffect}>
                                <div
                                    className={classes.filterHeader}>{this.props.attributes && this.props.attributes.filtered ?
                                    this.props.attributes.filtered.label : 'Missing Label'
                                }</div>
                                </div>

                                {attributes.filtered.list.map((card, index) => {
                                    return (
                                        <AccountCard key={index} index={index} classes={classes} title="Dossier"
                                                     updateFlag={this.props.updateFlag}
                                                     viewCurrentUser={this.props.viewCurrentUser}
                                                     width={width}
                                                     setName={setName}
                                                     selectedUserAccount={this.props.selectedUserAccount}
                                                     setAlias={setAlias}
                                                     card={card}/>
                                    )
                                })}
                            </div>)
                    } else {
                        return (
                            <div className={classes.downloadInProgress}><div>download in progress !</div></div>
                        )
                    }

                default:
                    return (
                        <div>Failed to load {' ' + card.value + ' ' + card.type + ' list'}</div>
                    )
            }
        };
        return (
            <div className={classes.cardMainContainerMid}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.userCardContentContainer}>
                    {showList()}
                </Grid>
            </div>
        )
    }
}

class FlagMode extends React.Component{
    handleFlag = (f, user,show) => () => {
        if (user._id) f([user._id], show);
    };
    render() {
        let {classes, card,view} = this.props,
            mode = view && view.flag;
        let flagBlock = () => {
            switch (mode) {
                case "flagAll":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                <IconButton disableRipple={true} className={classes.selectedIconColor}><i className="fas fa-flag"></i></IconButton>
                            </div>
                        </div>
                    )
                case "flagMultiple":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.flag == false || card.flag == undefined )?
                                <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateFlag, card, true)}><i className="far fa-flag"></i></IconButton>
                                </div> : null }
                            {(card.flag == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateFlag, card, false)} className={classes.selectedIconColor}><i className="fas fa-flag"></i></IconButton>
                                </div> : null  }
                        </div>
                    )
                case "flagSelected":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.flag == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateFlag, card, false)} className={classes.selectedIconColor}><i className="fas fa-flag"></i></IconButton>
                                </div> : null  }
                        </div>
                    )
                case "unflagAll":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                {/* <IconButton><i className="far fa-flag"></i></IconButton> */}
                            </div>
                        </div>
                    )
                case "oneFlag":
                    return(
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.flag == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedFlag)}>
                                    <IconButton className={classes.selectedIconColor}><i className="fas fa-flag"></i></IconButton>
                                </div> :  null   }
                        </div>
                    )
                case "selectAll":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                <IconButton className={classes.selectedIconColor}><CheckBox/></IconButton>
                            </div>
                        </div>
                    )
                case "selectMultiple":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.select == false || card.select == undefined)?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateSelect, card, true)}><CheckBoxOutlineBlank/></IconButton>
                                </div> : null }
                            {(card.select == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateSelect, card, false)} className={classes.selectedIconColor}><CheckBox/></IconButton>
                                </div> : null  }
                        </div>
                    )
                case "selectFlagged":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.select == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton onClick={this.handleFlag(this.props.updateSelect, card, false)} className={classes.selectedIconColor}><CheckBox/></IconButton>
                                </div> : null  }
                        </div>
                    )
                case "unselectAll":
                    return (
                        <div className={classes.iconsBarDefaultFlag}>
                            <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                {/* <IconButton><CheckBoxOutlineBlank/></IconButton> */}
                            </div>
                        </div>
                    )
                case "oneSelect":
                    return(
                        <div className={classes.iconsBarDefaultFlag}>
                            {(card.select == true) ?
                                <div className={classNames(classes.unitFlex, classes.selectedOption)}>
                                    <IconButton className={classes.selectedIconColor}><CheckBox/></IconButton>
                                </div> :  null   }
                        </div>
                    )
                default:
                    return (
                        <div className={classes.iconsBarDefaultFlag}></div>
                    )
            }
        };
        return (
            flagBlock()
        )
    }
}

class AccountCard extends React.Component {
    state = {
        expanded: false,
        openGen: false,
        openDelete: false,
        openFlag: false,
        openMove: false,
        openSelect: false,
        openLink: false,
        openReset: false,
        openReview: false,
        openReviseL: false,
        openSuspend: false,
        openAssesseeAssignReview:false,
        openAssesseeNotificationReview:false,
        openAssesseeReportsReview:false,
        anchorEl: null,
        checkedCard:false,
        open:false,
        reviewMode:'all',
        reviseMode:'all',
        assignmentOptions: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: false
            },
            {
                show:'active',
                selected: true
            } ,
            {
                show:'inactive',
                divider:'light',
                selected: false
            } ,
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'finished',
                selected: false
            } ,
            {
                show:'unfinished',
                divider:'light',
                selected: false
            } ,
            {
                show:'started',
                selected: false
            },
            {
                show:'unstarted',
                divider:'light',
                selected: false
            },
            {
                show:'suspended',
                selected: false
            },
            {
                show:'terminated',
                selected: false
            },
        ],
        notificationOptions: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: true
            },
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'flagged',
                selected: false
            } ,
            {
                show:'unflagged',
                divider:'light',
                selected: false
            } ,
            {
                show:'read',
                selected: false
            } ,
            {
                show:'unread',
                selected: false
            }
        ],
        reportsOptions: [
            {
                show:'review',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                divider:'light',
                selected: true
            },
            {
                show:'archived',
                divider:'light',
                selected: false
            },
            {
                show:'flagged',
                selected: false
            } ,
            {
                show:'unflagged',
                divider:'light',
                selected: false
            } ,
            {
                show:'read',
                selected: false
            } ,
            {
                show:'unread',
                selected: false
            }
        ],
        reviewOptions:[
            {
                show:'information',
                divider:'dark'
            },
            {
                show:'all',
                selected: true
            },
            {
                show:'key',
                selected: false
            } ,
        ],
        reviseOptions:[
            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: true
            } ,
            {
                show:'key',
                selected: false
            } ,
        ],
    };

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openGen',
            'openDelete',
            'openFlag',
            'openMove',
            'openSelect',
            'openReview',
            'openRevise',
            'openReset',
            'openSuspend',
            'openAssesseeAssignReview',
            'openAssesseeNotificationReview',
            'openAssesseeReportsReview'



        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp
    };

    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);

    handleDiagOpen = prop => () => {
        this.setState(this.change(prop));
    };

    handleModeChnage = (value)=> () => {
       if(value) this.setState({reviewMode : 'all'})
        else (this.setState({reviewMode: 'basic'}));

    };

    handleFlag = (close, f, user, show,f1,mode) => () => {
        if (user._id) f([user._id], show);
        close();
        f1(mode);
    };

    handleDiagClose = (prop, f, user, infoType, setTo, mode) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleSelectReviewFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions, unselectUserAccount, setViewCurrentUser) => actionList => {
        if (typeof setViewCurrentUser === 'function') setViewCurrentUser(false)
        let type = Array.isArray(actionList) && actionList.length > 0 ?
            actionList.find(action => action.selected).show : null
        if (typeof f === 'function') this.handleUserSelect(f, user, (!type ? infoType : type === 'key' ?
            'basic' : type),
             mode);

        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
    }

    handleSelectFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }
        this.setState({actions})
    }


    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    isSm = width => {
        return width !== 'lg' && width !== 'xl' && width !== 'md'

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    isSelected = (selected, card) => selected && card ? selected['_id'] === card['_id'] : false;

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    handleSelect = (group, show, actions) => () => {

        actions = actions.filter( action => {
            for (let member of group) {
                if (member === action.show) return action
            }
            return false;
        })

        actions.forEach( action => { action.selected = false})

        for (let action of actions) {
            if (action.show === show) {
                action.selected = !action.selected
            }
        }

        this.setState({actions})
    }

    render() {

        const {index, title, classes, width, card, setName, setAlias, selectedUserAccount} = this.props,
            reviewInfo = [
                'all','key'
            ],
            assignmentFilters = [
                'review' ,'all','active', 'inactive','archived','finished','unfinished','started','unstarted','suspended' ,'terminated'
            ],
            notificationFilters = [
                'review', 'all','archived','flagged','unflagged','read','unread'
            ],
            reportFilters = [
                'review',  'all','archived','flagged','unflagged','read','unread'
            ],
            reviseInfo = [
                'all','key'
            ];

        let reviewMap=  [

                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openReview', this.props.selectUserAccount, card, this.state.reviewMode , this.props.toggleAssesseeMobile, 'review', reviewInfo, this.state.reviewMode, this.state.reviewOptions, this.props.unselectUserAccount, this.props.viewCurrentUser),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviewInfo, 'all', this.state.reviewOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'key',
                    action:this.handleSelect(reviewInfo, 'key', this.state.reviewOptions),
                    style: classes.optionSecondary
                }

            ],
            assesseeAssignmentMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelect(assignmentFilters, 'all', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'active',
                    action: this.handleSelect(assignmentFilters, 'active', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'inactive',
                    action: this.handleSelect(assignmentFilters, 'inactive', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(assignmentFilters, 'archived', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'finished',
                    action: this.handleSelect(assignmentFilters, 'finished', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unfinished',
                    action: this.handleSelect(assignmentFilters, 'unfinished', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'started',
                    action: this.handleSelect(assignmentFilters, 'started', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unstarted',
                    action: this.handleSelect(assignmentFilters,'unstarted', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'suspended',
                    action: this.handleSelect(assignmentFilters,'suspended', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'terminated',
                    action: this.handleSelect(assignmentFilters,'terminated', this.state.assignmentOptions),
                    style: classes.optionSecondary
                },
            ],
            assesseeNotificationMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelect(notificationFilters, 'all', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(notificationFilters, 'archived', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'flagged',
                    action: this.handleSelect(notificationFilters, 'flagged', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unflagged',
                    action: this.handleSelect(notificationFilters, 'unflagged', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'read',
                    action: this.handleSelect(notificationFilters, 'read', this.state.notificationOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unread',
                    action: this.handleSelect(notificationFilters, 'unread', this.state.notificationOptions),
                    style: classes.optionSecondary
                }
            ],
            assesseeReportMap= [
                {
                    show:'review',
                    action:null,
                    style: classes.optionPrimary
                },

                {
                    show:'all',
                    action: this.handleSelect(reportFilters, 'all', this.state.reportsOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'archived',
                    action: this.handleSelect(reportFilters, 'archived', this.state.reportsOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'flagged',
                    action: this.handleSelect(reportFilters, 'flagged', this.state.reportsOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unflagged',
                    action: this.handleSelect(reportFilters, 'unflagged', this.state.reportsOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'read',
                    action: this.handleSelect(reportFilters, 'read', this.state.reportsOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'unread',
                    action: this.handleSelect(reportFilters, 'unread', this.state.reportsOptions),
                    style: classes.optionSecondary
                }
            ],
            reviseMap=  [

                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openRevise', this.props.selectUserAccount, card, this.state.reviseMode , this.props.toggleAssesseeMobile, 'revise', reviseInfo, this.state.reviseMode, this.state.reviseOptions, this.props.unselectUserAccount, this.props.viewCurrentUser),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviseInfo, 'all', this.state.reviseOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action:this.handleSelect(reviseInfo, 'key', this.state.reviseOptions),
                    style: classes.optionSecondary
                }

            ];

        return (
            <div className={classes.cardMainContainerMid}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.userCardContentContainer}>
                    <Button disableFocusRipple={true} disableRipple={true} className={this.isSelected(selectedUserAccount, card) ? classes.cardButtonSelected : classes.cardButton}>
                        <div
                            className={classes.measureBox}>
                            <div className={classes.cardContentMidPanel} onClick={this.handleDiagOpen('openGen')}>
                                <div className={classNames(classes.textOverflow, classes.textDefault)}>
                                    {/*<span>{card ? setName(card) : 'No Name'}</span>*/}
                                    <Tooltip
                                        id="tooltip-controlled"
                                        title={card ? setName(card) : 'No Name'}
                                        onClose={this.handleTooltipClose}
                                        enterDelay={300}
                                        leaveDelay={300}
                                        onOpen={this.handleTooltipOpen}
                                        open={this.state.open}
                                        placement="bottom"
                                        className={classes.tooltip}
                                    >
                                        <span>{card ? setName(card) : 'No Name'}</span>
                                    </Tooltip>
                                </div>
                                <div
                                    className={classNames(classes.aliasName, classes.textOverflow)}>{card ?
                                    setAlias(card, true) : ''}
                                </div>
                            </div>
                            <div className={classes.cardExpandRight}>
                                <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                                    <Badge className={classes.badgeBox} >
                                        <IconButton><Notifications /></IconButton>
                                    </Badge>
                                </div>
                                <FlagMode
                                    classes = {classes}
                                    card = {card}
                                    view = {this.props.view}
                                    updateFlag = {this.props.updateFlag}
                                    updateSelect = {this.props.updateSelect}
                                />
                            </div>

                        </div>
                    </Button>
                </Grid>

                <PopUp
                onOpen={this.state.openGen}
                classes={classes}
                textOptions={true}
                previousIcon={classes.backArrow}
                actionType={(this.handleDiagClose('openGen'))}
                titleStyle={classes.titleSolidBlue}
                title={'assessee'}
                close={this.handleDiagClose('openGen')}
                    optionList={
                    [
                        {
                            show: 'alliance',
                            action: null,
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'delete',
                            action: null,
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'flag',
                            action:this.handleDiagOpen('openFlag'),
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'move',
                            action: null,
                            style:classes.optionPrimaryDisabled,

                        },
                        {
                            show: 'reset',
                            action:this.handleDiagOpen('openReset'),
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'review',
                            action: this.handleDiagOpen('openReview'),
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'revise',
                            action: this.handleDiagOpen('openRevise'),
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'select',
                            action: this.handleDiagOpen('openSelect'),
                            style:classes.optionPrimary,

                        },
                        {
                            show: 'suspend',
                            action: this.handleDiagOpen('openSelect'),
                            style:classes.optionPrimary,
                            divider:'light'

                        },
                        {
                            show: 'assignments',
                            action: this.handleDiagOpen('openAssesseeAssignReview'),
                            style:classes.optionPrimary,
                            notify:true

                        },
                        {
                            show: 'notifications',
                            action: this.handleDiagOpen('openAssesseeNotificationReview'),
                            style:classes.optionPrimary,
                            notify:true

                        },
                        {
                            show: 'reports',
                            action: this.handleDiagOpen('openAssesseeReportsReview'),
                            style:classes.optionPrimary,
                            notify:true

                        },


                    ]
                }/>
                <PopUp
                    onOpen={this.state.openAssesseeAssignReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openAssesseeAssignReview'),this.handleDiagOpen('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'assignments'}
                    optionList={this.state.assignmentOptions.map( assessee => {
                        for (let action of assesseeAssignmentMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openAssesseeAssignReview')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeNotificationReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openAssesseeNotificationReview'),this.handleDiagOpen('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'notifications'}
                    optionList={this.state.notificationOptions.map( assessee => {
                        for (let action of assesseeNotificationMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openAssesseeNotificationReview')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeReportsReview}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openAssesseeReportsReview'),this.handleDiagOpen('openGen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'reports'}
                    optionList={this.state.reportsOptions.map( assessee => {
                        for (let action of assesseeReportMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openAssesseeReportsReview')}
                />
                <PopUp
                    onOpen={this.state.openFlag}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openFlag'),this.handleDiagOpen('openGen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'flag'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: this.handleFlag(this.handleDiagClose('openFlag'), this.props.updateFlag, card, false,this.props.currentFlagMode,'oneFlag'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:this.handleFlag(this.handleDiagClose('openFlag'), this.props.updateFlag, card, true,this.props.currentFlagMode,'oneFlag'),
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openFlag')}
                />

                <div>
                    <Dialog
                        open={this.state.openDelete}
                        keepMounted
                        onClose={this.handleDiagClose('openDelete')}
                    >
                        <DialogTitle className={classes.popupHeader}>
                            <Paper>
                                <div className={classes.popUpTitleContainerMid}>
                                    <div className={classes.PopHeaderTitle}>delete</div>
                                    <IconButton>
                                        <Clear className={classes.iconsPopupDefault}
                                               onClick={this.handleDiagClose('openDelete')}/>
                                    </IconButton>
                                </div>
                            </Paper>
                        </DialogTitle>
                        <DialogContent className={classNames(classes.DiagContainer, classes.fixedDim)}>
                            <div className={classes.popCheckContent}>
                                <Button className={classNames(classes.setLowerCase, classes.setGrey, classes.assesseesMenuItems)}
                                        disableRipple={true} disableFocusRipple={true}
                                        onClick={this.handleDiagClose('openDelete')} color="primary">
                                    no
                                </Button>
                            </div>
                            <div className={classes.popCheckContent}>
                                <Button className={classNames(classes.setLowerCase, classes.setGrey, classes.assesseesMenuItems)}
                                        disableRipple={true} disableFocusRipple={true}
                                        onClick={this.handleDiagClose('openDelete')} color="primary">
                                    yes
                                </Button>
                            </div>
                        </DialogContent>

                    </Dialog>
                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openMove}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openMove'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'move'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleDiagClose('openMove'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action:this.handleDiagClose('openMove'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleDiagClose('openMove')}
                    />

                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openSelect}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openSelect'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'select'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleFlag(this.handleDiagClose('openSelect'), this.props.updateSelect, card, false,this.props.currentFlagMode,'oneSelect'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action:this.handleFlag(this.handleDiagClose('openSelect'), this.props.updateSelect, card, true,this.props.currentFlagMode,'oneSelect'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleDiagClose('openSelect')}
                    />

                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openLink}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openLink'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'link'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleDiagClose('openLink'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action:this.handleDiagClose('openLink'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleDiagClose('openLink')}
                    />
                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openReset}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openReset'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'reset'}
                        optionList={
                            [
                                {
                                    show: 'activation',
                                    action: this.handleDiagClose('openReset'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'password',
                                    action:this.handleDiagClose('openReset'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleDiagClose('openReset')}
                    />

                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openReview}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openReview'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'review'}
                        passOptions={true}
                        optionList={this.state.reviewOptions.map( assessee => {
                            for (let action of reviewMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleDiagClose('openReview')}
                    />

                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openRevise}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openRevise'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        passOptions={true}
                        title={'assessee'}
                        badge={true}
                        badgeStyle={classes.font1_0}
                        badgeText={'revise'}
                        optionList={this.state.reviseOptions.map( assessee => {
                            for (let action of reviseMap) {
                                if (action.show === assessee.show) {
                                    assessee.action = action.action;
                                    assessee.style = action.style;
                                }
                            }
                            return assessee;
                        })
                        }
                        close={this.handleDiagClose('openReview')}
                    />


                </div>
                <div>
                    <PopUp
                        onOpen={this.state.openSuspend}
                        titleStyle={classes.titleLightBlue}
                        previousIcon={classes.backArrow}
                        textOptions={true}
                        actionType={(this.handleDiagClose('openSuspend'),this.handleDiagOpen('openGen'))}
                        classes={classes}
                        title={'suspend'}
                        optionList={
                            [
                                {
                                    show: 'no',
                                    action: this.handleDiagClose('openSuspend'),
                                    style:classes.optionPrimary
                                },
                                {
                                    show: 'yes',
                                    action:this.handleDiagClose('openSuspend'),
                                    style:classes.optionPrimary
                                }

                            ]
                        }
                        close={this.handleDiagClose('openSuspend')}
                    />

                </div>
            </div>
        )
    }
}

class SiftMenu extends React.Component {
    render() {
        let {classes, option, index} = this.props;
        let count = 6;
        count -= 1;
        return (
            <div>
                <MenuItem value={option} className={classes.profileDropdown}>
                    {option}&nbsp;<sup className={classes.supSearch}>primary</sup>
                </MenuItem>
                <MenuItem value={option} className={classes.profileDropdown}>
                    {option}&nbsp;<sup className={classes.supSearch}>secondary</sup>
                </MenuItem>
                {index !== count ? <Divider light/> : null}
            </div>
        )
    }
}

class UserAccountCards extends React.Component {

    state = {
        detailsOpen: true,
        dashboardOpen: true,
        showDummy: false,
        details: null,
        height: '',
        showSearch: false,
        showSift: false,
        showSort: false,
        siftSelect: '',
        sortSelect: '',
        searchScan: '',
        hideLeft: false,
        hideRight: false,
        radio: 'first'
    };

    isSm = width => {
        return width !== 'lg' && width !== 'xl' && width !== 'md'
    };

    isHeight = (view) => {
        let w = window,
            subs = view && !view.dev ? 205 : 145,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            height = !isNaN(w.innerHeight) ?
                +w.innerHeight - subs : !isNaN(e.clientHeight) ?
                    +e.clientHeight - subs : g.clientHeight - subs;
        return ( height )
    };

    listCardsPanel = null;

    isLoadingSearch = false;

    createLabel = (value, type, add = '') => {
        return {value, type, add}
    };

    setTypeForLabel = (f, assessee) => {
        return (typeof f === 'function') ? f('assessees', assessee.all ?
            'all' : assessee.roles ?
            'roles' : assessee.groups ?
                'groups' : 'all') : f('assessees', 'all')
    }

    middleLabel = this.props.view && this.props.view.assessee ?
        this.setTypeForLabel(this.createLabel, this.props.view.assessee) : this.createLabel('assessees', 'all');

    constructor(props) {
        super(props);
        this.handleSearchBox = this.handleSearchBox.bind(this);
        this.handlePanelToggle = this.handlePanelToggle.bind(this);
        this.handleLabelToggle = this.handleLabelToggle.bind(this);
        this.readyToPass = this.readyToPass.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    handleLabelToggle = (label, search) => {
        let createLabel = this.createLabel;

        this.middleLabel = label === 'Assesseesgroups' ?
            createLabel('assessees', 'groups') : label === 'Assesseesroles' ?
                createLabel('assessees', 'roles') :
                label === 'Assignmentsgroups' ? createLabel('assignments', 'groups') : label === 'Assesseesnodes' ? createLabel('assessees', 'nodes') :
                    label === 'Assessesall' ? createLabel('assesses', 'all') : createLabel('assessees', 'all');

        this.middleLabel = search ?
            createLabel('assessees', 'select') : this.middleLabel;

        if (label === 'Assesseesall') this.props.endSearch();
        if (label === 'Assesseesroles') this.props.setEntityRoles(this.props.currentEntity);
        if (label === 'Assesseesgroups') this.props.setEntityGroups(this.props.currentEntity);
    };

    closeAll = () => {
        const list = [
            '',
            'showSearch',
            'showSift',
            'showSort'
        ];
        list.forEach(val => this.setState({[val]: false}))
    };

    handleSearchBox = prop => () => {
        if (prop === 'all') {
            this.closeAll();
            return;
        }
        this.setState({[prop]: !this.state[prop]});
    };

    handleNavAction = (togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity) => () => {
        if (type === 'all') endSearch();
        if (type === 'roles') setEntityRoles(currentEntity);
        if (type === 'groups') setEntityGroups(currentEntity);
        this.setState({
            showSift: false
        })
    };

    handleSelect = prop => event => {

        const setSearch = (value, f) => {
            this.handleLabelToggle(value, true);
            this.isLoadingSearch = true;
            f(value);
        };

        const unsetSearch = (value, f) => {
            this.props.endSearch();
            f(value);
        };

        prop === 'siftSelect' ?
            this.handleLabelToggle(event.target.value) : prop === 'searchScan' && event.target.value !== '' ?
            setSearch(event.target.value, this.props.doSearch) : unsetSearch(event.target.value, this.handleLabelToggle);
        this.setState({[prop]: event.target.value});
    };

    handlePanelToggle = () => {
        this.setState({hideLeft: !this.state.hideLeft});
    };

    setName = (account, msg) => {
        if (!account.informationBasic) return 'No Name';

        let name = account.informationBasic;
        let nameValue = '';
        nameValue += name.nameFirst && name.nameFirst !== null ? name.nameFirst : '';
        nameValue += name.nameOther && name.nameOther !== null ? ' ' + name.nameOther : '';
        nameValue += name.nameLast  && name.nameLast  !== null ? ' ' + name.nameLast : '';
        return nameValue;
    }

    setAlias = (account, hideAlias) => (account.name && account.name.alias) ?
        account.name.alias : hideAlias ? '' : 'No Alias';

    readyToPass = (val, self, authencticate) => {
        return self && authencticate && authencticate.currentUser ? authencticate.currentUser : ( val && Object.keys(val) ) ?
            Object.keys(val).length > 0 :false;

    }

    handleRequestClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleRadioChange = (event, value) => {
        this.setState({
            radio : value
        });
    };

    setMiddleLabel = (genLabel, view) => {

        if (!view || !view.middle) return genLabel;

        const list = [ 'assessment', 'assignment', 'associate', 'assessees' ];

        const isSelected = entity => Object.keys(entity).find( prop => entity[prop] === true ? entity[prop] : false );

        const inExceptionList = name => ['cryptospace' , 'workspace', 'marketspace' , 'storespace'].find(ignore => ignore === name);

        const returnPlur = name => !name || inExceptionList(name) ? name : name + 's';

        let pane = isSelected(view.middle);

        return this.createLabel(returnPlur(pane), (pane ? isSelected(view[pane]): ''))

    }

    handleActions = (...actions) => () => actions.forEach(action => action());

    setSelected = choices => Object.keys(choices).find( choice => choices[choice] === true )



    render() {

        const {classes, width, accounts, view, toggleAssesseeMobile, toggleMiddlePane} = this.props;

        const showSearch = entity => entity && entity.isLoading;

        this.middleLabel = this.props.view && this.props.view.assessee ?
            this.setTypeForLabel(this.createLabel, this.props.view.assessee) : this.middleLabel;

        const siftList = [
            {value: 'Assessees', type: 'all'},
            {value: 'Assessees', type: 'groups'},
            {value: 'Assessees', type: 'nodes'},
            {value: 'Assessees', type: 'roles'}
        ];

        const sortList = [
            '',
            'First Name, Other Names, Last Name',
            'Last Name, First Name, Other Names'
        ];

        let panelSelect = view && view.assessee ?
            view.assessee.panel : 'middle';


        return (
            <main className={classes.content}>
                <div>
                    {
                        !this.props.view || this.props.view.dev ?
                            null : <div className={classes.cardMainBox}>
                            <Hidden smDown>
                                {!this.state.hideLeft || panelSelect === 'left' ?
                                    <div className={classes.cardLeftBox}>
                                        <MeasureCard view={this.props.view} classes={classes}/>
                                    </div> : <div
                                        className={classNames(classes.minLeftPanel, classes.addDashed, classes.expandContainer)}>
                                        <MinMeasureCard view={this.props.view} classes={classes}/>
                                    </div>}
                            </Hidden>
                            <div className={classes.cardMiddleBox}>
                                <MeasureUserCard view={this.props.view} classes={classes} width={width}/>
                            </div>
                            <Hidden smDown>
                                {!this.state.hideRight ?
                                    <div className={classes.cardRightBox}>
                                        <MeasureDetailsCard view={this.props.view} classes={classes}/>
                                    </div> : null}
                            </Hidden>
                        </div>
                    }

                    <div className={classes.mainContainer}>
                        <Hidden smDown={panelSelect !== 'left'}>
                            {!this.state.hideLeft || (panelSelect === 'left' && width === 'sm') ?
                                <div className={classes.leftPanel}>
                                    <LabelHeader handlePanelToggle={this.handlePanelToggle}
                                                 countries={this.props.countries}
                                                 updateFlag={this.props.updateFlag}
                                                 label={this.createLabel('dashboard', '')}
                                                 view={this.props.view}
                                                 selectUserAccount={this.props.selectUserAccount}
                                                 classes={classes}
                                                 handleActions={this.handleActions}
                                                 onlyDashboard={true}
                                                 detailType={this.props.detailType}
                                                 toggleMiddlePane={toggleMiddlePane}
                                                 selectedEntity={this.props.selectedEntity}
                                                 endSearch={this.props.endSearch}
                                                 setEntityRoles={this.props.setEntityRoles}
                                                 setEntityGroups={this.props.setEntityGroups}
                                                 currentEntity={this.props.currentEntity}
                                                 handleLeftDisplay={this.props.handleLeftDisplay}
                                                 currentFlagMode = {this.props.currentFlagMode}
                                                 updateSelect = {this.props.updateSelect}
                                                 leftDisplay={this.props.leftDisplay}
                                                 isSm={this.isSm}
                                                 card={this.props.selectedUserAccount}
                                                 width={width}
                                                 setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                                createAssesseePanel={this.props.createAssesseePanel}
                                                setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                                createAssesseesAccount={this.props.createAssesseesAccount}
                                                />
                                    <div style={{height: this.isHeight(this.props.view), overflow: 'overlay'}}>
                                        <div
                                            style={
                                                {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: this.isHeight(this.props.view),
                                                    justifyContent: 'space-between'
                                                }
                                            }
                                        >
                                            {this.state.dashboardOpen ?
                                                <DashboardCard
                                                    countries={this.props.countries}
                                                    selectUserAccount={this.props.selectUserAccount}
                                                    viewCurrentUser={this.props.viewCurrentUser}
                                                    closeMiddlePane={this.props.closeMiddlePane}
                                                    setSwitch={this.props.setSwitch}
                                                    authenticate={this.props.authenticate}
                                                    endSearch={this.props.endSearch}
                                                    setEntityRoles={this.props.setEntityRoles}
                                                    setEntityGroups={this.props.setEntityGroups}
                                                    currentEntity={this.props.currentEntity}
                                                    toggleMiddlePane={this.props.toggleMiddlePane}
                                                    view={this.props.view}
                                                    selectedEntity={this.props.selectedEntity}
                                                    isHeight={this.isHeight}
                                                    toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                                    toggleDeveloperMode={this.props.toggleDeveloperMode}
                                                    viewSelect={this.props.leftDisplay} classes={classes}
                                                    setCreateMode={this.props.setCreateMode}
                                                    setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                                    closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                                    setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                                    isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                                    createAssesseePanel={this.props.createAssesseePanel}
                                                    createAssesseesAccount={this.props.createAssesseesAccount}
                                                    /> : null}
                                            <div className={this.isSm(width) ?
                                                classes.leftFooterM : classes.leftFooterD}>
                                                <div className={classes.footerInner}>
                                                <Leftfooter
                                                    view={this.props.view}
                                                    leftTaggedDisplay={this.props.leftTaggedDisplay}
                                                    handleActions={this.handleActions}
                                                    closeDeveloperMode={this.props.closeDeveloperMode}
                                                    setMeasureCardCount={this.props.setMeasureCardCount}
                                                    handleLeftDisplay={this.props.handleLeftDisplay}
                                                    leftTagged={this.props.leftTagged}
                                                    classes={classes}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        {this.state.showDummy ?
                                            <div style={{height: '40em', textAlign: 'center', padding: 10}}>To Be
                                                Added</div> : null}
                                    </div>
                                </div> : <div className={classes.minLeftPanel}>
                                    <LabelHeader handlePanelToggle={this.handlePanelToggle}
                                                 countries={this.props.countries}
                                                 view={this.props.view}
                                                 updateFlag={this.props.updateFlag}
                                                 detailType={this.props.detailType}
                                                 handleActions={this.handleActions}
                                                 endSearch={this.props.endSearch}
                                                 toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                                 selectedEntity={this.props.selectedEntity}
                                                 toggleMiddlePane={toggleMiddlePane}
                                                 setEntityRoles={this.props.setEntityRoles}
                                                 selectUserAccount={this.props.selectUserAccount}
                                                 setEntityGroups={this.props.setEntityGroups}
                                                 currentEntity={this.props.currentEntity}
                                                 currentFlagMode = {this.props.currentFlagMode}
                                                 updateSelect = {this.props.updateSelect}
                                                 showExpand={this.state.hideLeft} label="Side" classes={classes}
                                                 isSm={this.isSm} width={width}
                                                 card={this.props.selectedUserAccount}
                                                 setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                                createAssesseePanel={this.props.createAssesseePanel}
                                                setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                                createAssesseesAccount={this.props.createAssesseesAccount}
                                    />
                                </div>}
                        </Hidden>
                        <Hidden smDown={panelSelect !== 'middle'}>
                        <div
                            ref={node => {
                                this.listCardsPanel = node;
                            }}
                            className={classes.middlePanel}>
                            <LabelHeader showSearch={this.state.showSearch}
                                         countries={this.props.countries}
                                         view={this.props.view}
                                         showSift={this.state.showSift}
                                         handleActions={this.handleActions}
                                         updateFlag={this.props.updateFlag}
                                         selectedEntity={this.props.selectedEntity}
                                         selectUserAccount={this.props.selectUserAccount}
                                         detailType={this.props.detailType}
                                         toggleMiddlePane={toggleMiddlePane}
                                         showSort={this.state.showSort}
                                         endSearch={this.props.endSearch}
                                         setEntityRoles={this.props.setEntityRoles}
                                         setEntityGroups={this.props.setEntityGroups}
                                         currentEntity={this.props.currentEntity}
                                         setCreateMode={this.props.setCreateMode}
                                         toggleAssesseeMobile={toggleAssesseeMobile}
                                         listCardsPanel={this.listCardsPanel}
                                         action={this.handleSearchBox}
                                         scrolledList={accounts}
                                         label={this.setMiddleLabel(this.middleLabel, this.props.view)}
                                         classes={classes}
                                         currentFlagMode = {this.props.currentFlagMode}
                                         updateSelect = {this.props.updateSelect}
                                         isSm={this.isSm}
                                         width={width}
                                         card={this.props.selectedUserAccount}
                                         setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                         closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                         isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                         createAssesseePanel={this.props.createAssesseePanel}
                                         setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                         createAssesseesAccount={this.props.createAssesseesAccount}
                            />

                            <PopUp
                                onOpen={this.state.showSearch}
                                classes={classes}
                                previousIcon={classes.backArrow}
                                iconOptions={true}
                                actionType={this.handleSearchBox('all')}
                                titleStyle={classes.titleSolidBlue}
                                title={'assessees'}
                                // title={this.setSelected(this.props.view.middle)}
                                badge={true}
                                badgeText={'scan'}
                                close={this.handleSearchBox('all')}
                            >
                                <Paper className={classes.SMainContainer}>
                                    <FormControl className={classes.inputSearchPad}>
                                        <TextField
                                            id="searchTextDrawer"
                                            label="scan"
                                            className={classNames(classes.textForInput, classes.inputText)}
                                            margin="normal"
                                            value={this.state.searchScan}
                                            onChange={this.handleSelect('searchScan')}
                                        />
                                        <FormHelperText className={classes.aliasName}>name, alias, email address, mobile telephone, node, tag</FormHelperText>
                                    </FormControl>
                                </Paper>
                            </PopUp>
                            <Dialog
                                open={this.state.showSift}
                                keepMounted
                                onClose={this.handleRequestClose('showSift')}
                            >
                                <DialogTitle className={classes.popupHeader}>
                                    <Paper>
                                        <div className={classes.popUpTitleContainerParent}>
                                            <div className={classes.PopHeaderTitle}>assessees</div>
                                            <IconButton><Clear className={classes.iconsPopupDefault}
                                                               onClick={this.handleRequestClose('showSift')}/></IconButton>
                                        </div>
                                    </Paper>
                                </DialogTitle>
                                <DialogContent className={classNames(classes.assesseesMenu, classes.fixedDim)}>
                                    <div>
                                            {siftList.map((option, index) => (
                                                <div key={index}
                                                     className={this.assesseesMenu}
                                                     onClick={this.handleNavAction(this.props.toggleMiddlePane, 'assessee' , option.type , this.props.endSearch, this.props.setEntityRoles, this.props.setEntityGroups, this.props.currentEntity)}
                                                >
                                                    <Button className={classes.assesseesMenuItems}
                                                    ><div>
                                                        <span>{option.type}</span>
                                                    </div>
                                                    </Button>
                                                </div>
                                            ))}
                                            <Divider light/>
                                            <FormControl>
                                                <RadioGroup
                                                    value={this.state.radio}
                                                    onChange={this.handleRadioChange}
                                                >
                                                    <FormControlLabel
                                                        value="first"
                                                        control={<Radio />}
                                                        className={classes.assesseesMenuItemsRadio}
                                                        label="first-name other-names last-name" />
                                                    <FormControlLabel
                                                        value="last"
                                                        control={<Radio />}
                                                        className={classes.assesseesMenuItemsRadio}
                                                        label="last-name first-name other-names" />
                                                </RadioGroup>
                                            </FormControl>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            { this.props.view.middle &&  this.props.view.middle.marketspace ? <MarketSpace isHeight={this.isHeight} classes={classes} view={this.props.view} ></MarketSpace> :
                                this.props.view.middle &&  this.props.view.middle.cryptospace ? <CryptoSpace isHeight={this.isHeight} classes={classes} view={this.props.view} ></CryptoSpace> :
                                this.props.view.middle &&  this.props.view.middle.workspace ? <WorkSpace isHeight={this.isHeight} classes={classes} view={this.props.view} ></WorkSpace> :
                                    this.props.view.middle &&  this.props.view.middle.storespace ?  <StoreSpace isHeight={this.isHeight} classes={classes} view={this.props.view} ></StoreSpace> :
                                this.props.view.middle &&  this.props.view.middle.associate ?
                                <div><AssociateBlock
                                    toggleRightPane={this.props.toggleRightPane}
                                    setSwitch={this.props.setSwitch}
                                    selectedEntity={this.props.selectedEntity}
                                    closeMiddlePane={this.props.closeMiddlePane}
                                    toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                    setUserEntity={this.props.setUserEntity}
                                    authenticate={this.props.authenticate}
                                    isHeight={this.isHeight}
                                    classes={classes}
                                    view={this.props.view}/>
                                </div>
                                    :this.props.view.middle && this.props.view.middle.node ?
                                    <div><NodeBlock isHeight={this.isHeight} classes={classes} view={this.props.view}/></div>:
                                    this.props.view.middle && this.props.view.middle.assessment ?
                                <div><AssessmentBlock isHeight={this.isHeight} classes={classes} view={this.props.view}/></div> : this.props.view.middle && this.props.view.middle.assignment ?
                                <div><AssignmentBlock isHeight={this.isHeight} classes={classes} view={this.props.view}/></div> : this.props.view.middle && this.props.view.middle.assessee   ?

                            <div style={{height: this.isHeight(this.props.view), overflow: 'overlay' , marginTop:10, marginBottom: 10}}>
                                {typeof this.middleLabel === 'object' && this.middleLabel.type !== 'all' && showSearch(this.props.search) ?
                                    <div className={classes.downloadInProgress}><div>download in progress !</div></div> : this.props.view.middle && this.props.view.middle.assessee && this.props.view.assessee.managers ?
                                            <div className={classes.workInProgress}><div>development in progress !</div></div> :  this.props.view.middle && this.props.view.middle.assessee && this.props.view.assessee.nodes ?
                                            <div className={classes.workInProgress}><div>development in progress !</div></div> : this.props.view.middle && this.props.view.middle.assessee && this.props.view.assessee.exchange ?
                                                <div className={classes.workInProgress}><div>development in progress !</div></div> : typeof this.middleLabel === 'object' && this.middleLabel.type !== 'all' ?
                                        <div className={classes.cardMainContainerMidSelection}>
                                        <SelectionCard classes={classes}
                                                   viewCurrentUser={this.props.viewCurrentUser}
                                                   attributes={this.props.attributes}
                                                   setEntityGroupUsers={this.props.setEntityGroupUsers}
                                                   setEntityRoleUsers={this.props.setEntityRoleUsers}
                                                   updateFlag={this.props.updateFlag}
                                                   currentEntity={this.props.currentEntity}
                                                   selectUserAccount={this.props.selectUserAccount}
                                                   setName={this.setName}
                                                   setAlias={this.setAlias}
                                                   card={this.middleLabel}
                                                   search={this.props.search}
                                                   unselectUserAccount={this.props.unselectUserAccount}
                                                   width={width}/></div> : accounts ?
                                            accounts.map((card, index) =>
                                                <AccountCard key={index} index={index} classes={classes}
                                                     title="Information"
                                                     viewCurrentUser={this.props.viewCurrentUser}
                                                     selectedUserAccount={this.props.selectedUserAccount}
                                                     toggleAssesseeMobile={toggleAssesseeMobile}
                                                     updateFlag={this.props.updateFlag}
                                                     updateSelect = {this.props.updateSelect}
                                                     setName={this.setName}
                                                     unselectUserAccount={this.props.unselectUserAccount}
                                                     setAlias={this.setAlias}
                                                     selectUserAccount={this.props.selectUserAccount}
                                                     width={width}
                                                     view={this.props.view}
                                                     currentFlagMode = {this.props.currentFlagMode}
                                                     card={card}/>) :
                                            <div className={classes.downloadInProgress}><div>download in progress !</div></div>}
                            </div> : null }
                        </div>
                        </Hidden>
                        <Hidden smDown={panelSelect !== 'right'}>
                            {!this.state.hideRight ?
                                <div className={classes.rightPanel}>
                                    <LabelHeader
                                        countries={this.props.countries}
                                        readyToPass={this.readyToPass}
                                        detailType={this.props.detailType}
                                        selectUserAccount={this.props.selectUserAccount}
                                        selectedUserAccount={this.props.selectedUserAccount}
                                        view={this.props.view}
                                        userAll={this.props.selectedUser}
                                        toggleAssesseeMobile={toggleAssesseeMobile}
                                        selectedEntity={this.props.selectedEntity}
                                        label="information"
                                        updateFlag={this.props.updateFlag}
                                        updateSelect = {this.props.updateSelect}
                                        card={this.props.selectedUserAccount}
                                        classes={classes}
                                        isSm={this.isSm}
                                        currentFlagMode = {this.props.currentFlagMode}
                                        width={width}
                                        unselectUserAccount={this.props.unselectUserAccount}
                                        setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                        closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                        isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                        createAssesseePanel={this.props.createAssesseePanel}
                                        setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                    />

                                    <div style={
                                        {
                                            height: this.isHeight(this.props.view),
                                            overflow: 'overlay'}}>
                                        {(this.state.detailsOpen && this.readyToPass(this.props.selectedUserAccount) || (this.props.selectedUser && this.props.selectedUser.isCreate) || (this.props.view && this.props.view.self)) ?
                                            <div
                                            style={
                                                {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    height: this.isHeight(this.props.view),
                                                    justifyContent: 'space-between'
                                                }
                                            }
                                            >
                                                <DetailsCard
                                                classes={classes}
                                                authenticate={this.props.authenticate}
                                                viewCurrentUser={this.props.viewCurrentUser}
                                                user={this.props.selectedUserAccount}
                                                selectedUserAccount={this.props.selectedUserAccount}
                                                userDetail={this.props.detailType}
                                                setName={this.setName}
                                                setAlias={this.setAlias}
                                                view={this.props.view}
                                                isHeight={this.isHeight}
                                                isCreate = {this.props.isCreate}
                                                updateFlag={this.props.updateFlag}
                                                updateSelect = {this.props.updateSelect}
                                                currentFlagMode={this.props.currentFlagMode}
                                                setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                                closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                                isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                                />
                                                <div className={this.isSm(width) ?
                                                    classes.rightFooterM : classes.rightFooterD}>
                                                    <div className={classes.footerInner}>
                                                        <PagerIcons
                                                        classes={classes}
                                                        isCreate={this.props.isCreate}
                                                        setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                                        toggleAssesseeMobile={toggleAssesseeMobile}
                                                        user={this.props.selectedUserAccount}
                                                        createAssesseePanel={this.props.createAssesseePanel}
                                                        />
                                                    </div>
                                                </div>
                                            </div> :
                                            this.props.view.right &&  this.props.view.right.associate ?
                                                <div>
                                                    <Paper className={classes.dossierPaper} style={{margin:'5px'}}>
                                                        <div className={classNames(classes.dashboardProfileMid, classes.dashboardProfileMidRight)}>
                                                            <div className={classes.formContainer}>
                                                                <FormControl className={classes.inputGroup}>
                                                                    <div className={classes.ediatableLabel}>
                                                                        <InputLabel
                                                                            htmlFor="name-simple"
                                                                            className={classes.labelInput}>
                                                                           associate name
                                                                        </InputLabel>
                                                                    </div>
                                                                    <Input id="name-simple"
                                                                           className={classes.inputText}
                                                                           readOnly={true}
                                                                           disableUnderline={true}
                                                                           value='associate name'/>
                                                                </FormControl>
                                                            </div>
                                                            <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                                                                <Badge className={classes.badgeBox} >
                                                                    <IconButton><Notifications /></IconButton>
                                                                </Badge>
                                                            </div>

                                                            <div className={classes.dossierImage}>
                                                                    <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} >
                                                                        <Avatar
                                                                            alt="Anonymous"
                                                                            src="/resources/images/steve.jpg"

                                                                            className={classNames(classes.avatar, classes.profileAvatarRight)}
                                                                        />

                                                                    </Button>
                                                            </div>
                                                        </div>
                                                        <div className={classNames(classes.dashboardProfileMid, classes.dashboardProfileMidRight)}>
                                                            <div className={classes.formContainer}>
                                                                <FormControl className={classes.inputGroup}>
                                                                    <div className={classes.ediatableLabel}>
                                                                        <InputLabel
                                                                            htmlFor="name-simple"
                                                                            className={classes.labelInput}>
                                                                            associate brand
                                                                        </InputLabel>
                                                                    </div>
                                                                    <Input id="name-simple"
                                                                           className={classes.inputText}
                                                                           readOnly={true}
                                                                           disableUnderline={true}
                                                                           value='associate brand'/>
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                    </Paper>
                                                </div>:

                                            <div className={classes.StubHeader}></div>}
                                    </div>
                                </div> : null}
                        </Hidden>
                    </div>
                </div>
            </main>
        )
    }
}

export default compose(withWidth())(UserAccountCards);
