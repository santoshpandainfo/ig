import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ReportIcon from 'material-ui-icons/Report';
import Assesses from 'material-ui-icons/PersonOutline';
import Associate from 'material-ui-icons/PeopleOutline';
import Assessment from 'material-ui-icons/Assessment';
import Assignment from 'material-ui-icons/Assignment';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IGSelect from '../components/select';
import classNames from 'classnames';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui-icons/Clear';
import Divider from 'material-ui/Divider';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import Slide from 'material-ui/transitions/Slide';
import Check from 'material-ui-icons/Check';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';
import {toggleAssesseeMobile, toggleMiddlePane} from "../igactions/actions";
import PopupComponent from '../components/popup';
import ChevronRight from 'material-ui-icons/ChevronRight';
import CreateAssessee from '../components/createAssessee';
import Input, {InputLabel} from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import LabelIcon from '../components/labelIcon';
import Upload from 'material-ui-icons/FileUpload';
import Download from 'material-ui-icons/FileDownload';





function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BlankCard extends React.Component{
    render(){
        let {classes} =this.props;
        return(
        <div>
            <div className={classes.blankCardContainer}>
                <Paper className={classes.blankCardPaper} >

                </Paper>
            </div>
        </div>
        )
    }
};

class NavListItems extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        openAssociateCreate:false,
        openExchange:false,
        openAssessees: false,
        openAssessment: false,
        openAssessmentPrimary:false,
        openAssignmentPrimary:false,
        openAssociatePrimary:false,
        openAssesseesPrimary:false,
        openAssignment: false,
        openAssociate: false,
        openSelect: false,
        anchorEl: null,
        radio:'first',
        checkedA: false,
        checkedB: false,
        checkedC:false,
        checkedD:false,
        active:false,
        inactive:false,
        authenticated:false,
        unauthenticated:false,
        suspended:false,
        terminated:false,
        started:false,
        unstarted:false,
        finished:false,
        unfinished:false,
        progress:false,
        templateTick:true,
        worksheetTick:false,
        openAssociateDemo:false,
        openAssesseesCreate:false,
        openSuites:false,
        openAssociateSecondary:false,
        openAssignmentCreate:false,
        createMode:'all',
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

        createAssociateOptions:[
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
            }
        ],
        assessmentOptions: [
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
                selected: false,
                divider:'dark'
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
                selected: false,
                divider: 'dark',
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
        associateOptions: [
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
                divider: 'light',
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
        informationOptions:[
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
        }

    ],
        informationAssiCreate:[
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
            }

        ],

        tab:false
    };
    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openAssociateCreate',
            'openAssessees',
            'openAssessment',
            'openAssessmentPrimary',
            'openAssociatePrimary',
            'openAssesseesPrimary',
            'openAssignmentPrimary',
            'openAssignment',
            'openAssociate',
            'openSelect',
            'openSuites',
            'openAssociateDemo',
            'openAssociateSecondary',
            'openAssesseesCreate',
            'openExchange',
            'openAssignmentCreate'
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

    actionAssessee = (type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile) => {
        if (type === 'all') endSearch();
        if (type === 'roles') setEntityRoles(currentEntity);
        if (type === 'groups') setEntityGroups(currentEntity);
        if (typeof toggleMobile === 'function') toggleMobile('middle');
    }

    handleNavAction = (close, togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile,setCreateAssesseeMode) => () => {
        close();
        if (typeof togglePane === 'function') togglePane(pane, type);
        if (pane === 'assessee') this.actionAssessee(type, endSearch, setEntityRoles, setEntityGroups, currentEntity,toggleMobile);
        if (typeof toggleMobile === 'function') toggleMobile('middle');

    }

    handleOpenCreateAssesseeAction = (close, togglePane, pane, type, endSearch, setEntityRoles, setEntityGroups, currentEntity, toggleMobile,setCreateAssesseeMode) => () => {
        close();
        if(typeof setCreateAssesseeMode === 'function'){
            this.handelsetCreateAssesseeMode(setCreateAssesseeMode,'left');
        }
        if( typeof this.props.setCreateAssesseeLeftPanel == 'function'){
            this.handelcreateAssesseePanel(this.props.setCreateAssesseeLeftPanel,'left',this.state.createMode);
        }
    }

    handleActions = (...actions) => () => actions.forEach(action => action());

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleSwap = (tab) => {
        this.setState({ tab: !this.state.tab });
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
        this.setState({actions});
        if(show == 'all' || show== 'key'){
            this.setState({'createMode':show});
        }

    }

    handelcreateAssesseePanel =  (setCreateAssesseeLeftPanel,panel,type) =>{
        setCreateAssesseeLeftPanel(panel,type);
    }

    handelsetCreateAssesseeMode = (setCreateAssesseeMode,panel) => {
        setCreateAssesseeMode(panel);
    }

    isSelected = (view, navItem) => view.middle[navItem]

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

    render() {
        let {classes,width,currentEntity, toggleMiddlePane, toggleRightPane,endSearch,handleActions, setEntityRoles, setEntityGroups , toggleMobile, view} = this.props;

        const handleToggle = setTo => () => setTo('middle'),
            filterOptions = [
              'all','active', 'inactive','archived', 'suspended' ,'terminated','unverified','verified'
            ],
            filterAssessment = [
                'all','active', 'inactive','archived', 'finished', 'unfinished', 'suspended' ,'terminated',
            ],
            filterAssignment = [
                'all','active', 'inactive', 'finished', 'unfinished','progress','started','unstarted', 'suspended' ,'terminated',
            ],
            filterAssociate = [
                'all','active', 'inactive','suspended' ,'terminated','unverified','verified'
            ],
            filterInfo = [
                'all','key'
            ],
            AssCreateInfo = [
                'all','key'
            ],
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
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','all', endSearch, setEntityRoles, setEntityGroups, this.props.currentEntity, this.props.toggleAssesseeMobile),
                style: classes.optionPrimary
            },
            {
                show:'groups',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','groups', null, null, setEntityGroups,this.props.currentEntity, this.props.toggleAssesseeMobile),
                style: classes.optionPrimary
            },
            {
                show:'managers',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleRightPane, 'assessee','managers', null, null, null,null, null),
                style: classes.optionPrimary
            },
            {
                show:'nodes',
                action:this.handleNavAction(this.handleRequestClose('openAssessees') ,toggleMiddlePane, 'assessee','nodes', null, null, setEntityGroups,null, this.props.toggleAssesseeMobile),
                style: classes.optionPrimary
            },
            {
                show:'roles',
                action:this.handleNavAction(this.handleRequestClose('openAssessees'), toggleMiddlePane, 'assessee', 'roles', endSearch, setEntityRoles, null, this.props.currentEntity, this.props.toggleAssesseeMobile),
                style: classes.optionPrimary
            },
            {
                show:'all',
                action: this.handleSelect(filterOptions, 'all', this.state.assesseeOptions),
                style: classes.optionSecondary
            },
            {
                show:'active',
                action: this.handleSelect(filterOptions,'active', this.state.assesseeOptions),
                style: classes.optionSecondary
            },
                {
                    show:'archived',
                    action: this.handleSelect(filterOptions,'archived', this.state.assesseeOptions),
                    style: classes.optionSecondary
                },
            {
                show:'inactive',
                action: this.handleSelect(filterOptions,'inactive', this.state.assesseeOptions),
                style: classes.optionSecondary
            },

            {
                show:'suspended',
                action: this.handleSelect(filterOptions,'suspended', this.state.assesseeOptions),
                style: classes.optionSecondary
            },
            {
                show:'terminated',
                action: this.handleSelect(filterOptions,'terminated', this.state.assesseeOptions),
                style: classes.optionSecondary
            },
                {
                    show:'unverified',
                    action: this.handleSelect(filterOptions,'unverified', this.state.assesseeOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'verified',
                    action: this.handleSelect(filterOptions,'verified', this.state.assesseeOptions),
                    style: classes.optionSecondary
                },
            {
                show:'first-name other-names last-name',
                action: this.handleSelect(sortOptions,'first-name other-names last-name', this.state.assesseeOptions),
                style: classes.optionSecondary,

            },
            {
                show:'last-name first-name other-names',
                action: this.handleSelect(sortOptions,'last-name first-name other-names', this.state.assesseeOptions),
                style: classes.optionSecondary,

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
            infoActionsMap=  [

                {
                    show:'information',
                    action:this.handleOpenCreateAssesseeAction(this.handleRequestClose('openAssesseesCreate') ,toggleMiddlePane, 'assessees','all', endSearch, setEntityRoles, setEntityGroups, this.props.currentEntity, this.props.toggleAssesseeMobile,this.props.setCreateAssesseeMode),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(filterInfo, 'all', this.state.informationOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action:this.handleSelect(filterInfo, 'key', this.state.informationOptions),
                    style: classes.optionSecondary
                }

            ],
            infoActionCreate=  [

                {
                    show:'information',
                    action:this.handleNavAction(this.handleRequestClose('openAssignmentCreate') ,toggleMiddlePane, 'assignments','all', endSearch, setEntityRoles, setEntityGroups, null, this.props.toggleAssesseeMobile, null),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(AssCreateInfo, 'all', this.state.informationAssiCreate),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action:this.handleSelect(AssCreateInfo, 'key', this.state.informationAssiCreate),
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
                },



            ],

            createAssociatesMap=  [

                {
                    show:'information',
                    //  action: this.handleClick('createName'),
                    action: null,
                    // action: this.handleSelectReviewFilter('openCreate', this.props.selectUserAccount, card, this.state.createMode , this.props.toggleAssesseeMobile, 'review', createInfo, this.state.createMode, this.state.createOptions),
                    style: classes.optionPrimary
                },
                {

                    show:'all',
                    action:this.handleSelect(filterInfo, 'all', this.state.createAssociateOptions),
                    style: classes.optionSecondary
                },
                {
                    show:'key',
                    action:this.handleSelect(filterInfo, 'key', this.state.createAssociateOptions),
                    style: classes.optionSecondary
                }

            ];


        return (
            <div>

                <div className={classes.middleTabLabel}>
                    <div className={classes.middleTabInner} >
                        <div className={classes.middleTabItem} >
                            <div> </div>
                        </div>
                        <div className={classNames(classes.middleTabItem,(this.state.tab === false ? classes.activeTabItem : null))} onClick={()=> {if(this.state.tab) this.handleSwap(false)}} >
                            <Button> </Button>
                        </div>
                        <div className={classes.middleTabItem} >
                            <div> </div>
                        </div>
                        <div className={classNames(classes.middleTabItem,(this.state.tab === true ? classes.activeTabItem : null))} onClick={()=> {if(!this.state.tab) this.handleSwap(true)}} >
                            <Button> </Button>
                        </div>
                        <div className={classes.middleTabItem} >
                            <div> </div>
                        </div>
                    </div>
                </div>

                { !this.state.tab ? <div>
                <div className={classes.leftNavMenu} onClick={this.handleClick('openAssesseesPrimary')}>
                    <Paper className={this.isSelected(view, 'assessee') ?
                        classNames(classes.leftMenuPaper, classes.selectedCard) : classes.leftMenuPaper} >
                <ListItem className={classes.leftNavButton} >
                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="assessees"/>
                    <ListItemIcon className={classes.leftIcon}>
                        <ChevronRight/>
                    </ListItemIcon>
                </ListItem>
                    </Paper>
                </div>
               <div className={classes.leftNavMenu} onClick={this.handleClick('openAssessmentPrimary')}>
                   <Paper className={this.isSelected(view, 'assessment') ? classNames(classes.leftMenuPaper, classes.selectedCard) : classes.leftMenuPaper}>
                <ListItem className={classes.leftNavButton}>
                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="assessments"/>
                    <ListItemIcon className={classes.leftIcon}>
                        <ChevronRight/>
                    </ListItemIcon>
                </ListItem>
                   </Paper>
                </div>
               <div className={classes.leftNavMenu} onClick={this.handleClick('openAssignmentPrimary')}>
                  <Paper className={this.isSelected(view, 'assignment') ? classNames(classes.leftMenuPaper, classes.selectedCard) : classes.leftMenuPaper}>
                <ListItem className={classes.leftNavButton}>
                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="assignments"/>
                    <ListItemIcon className={classes.leftIcon}>
                        <ChevronRight/>
                    </ListItemIcon>
                </ListItem>
                   </Paper>
                </div>
               <div className={classes.leftNavMenu} onClick={this.handleClick('openAssociatePrimary')}>
                   <Paper className={this.isSelected(view, 'associate') ? classNames(classes.leftMenuPaper, classes.selectedCard) : classes.leftMenuPaper}>
                <ListItem className={classes.leftNavButton}>
                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="associates"/>
                    <ListItemIcon className={classes.leftIcon}>
                        <ChevronRight/>
                    </ListItemIcon>
                </ListItem>
                   </Paper>
                </div>
                </div> :
                    <div>
                        <div className={classes.leftNavMenu} onClick={this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'cryptospace',null , null, null,null,null, this.props.toggleAssesseeMobile)}>
                            <Paper className={classes.leftMenuPaper} >
                                <ListItem className={classes.leftNavButton} >
                                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="cryptospace"/>
                                    <ListItemIcon className={classes.leftIcon}>
                                        <ChevronRight/>
                                    </ListItemIcon>
                                </ListItem>
                            </Paper>
                        </div>
                        <div className={classes.leftNavMenu} onClick={this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'marketspace',null , null, null,null,null, this.props.toggleAssesseeMobile)}>
                            <Paper className={this.isSelected(view, 'marketspace') ? classNames(classes.leftMenuPaper, classes.selectedCard) : classes.leftMenuPaper}>
                                <ListItem className={classes.leftNavButton}>
                                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="marketspace"/>
                                    <ListItemIcon className={classes.leftIcon}>
                                        <ChevronRight/>
                                    </ListItemIcon>
                                </ListItem>
                            </Paper>
                        </div>
                        <div className={classes.leftNavMenu} onClick={this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'storespace',null , null, null,null,null, this.props.toggleAssesseeMobile)}>
                            <Paper className={classes.leftMenuPaper}>
                                <ListItem className={classes.leftNavButton}>
                                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="storespace"/>
                                    <ListItemIcon className={classes.leftIcon}>
                                        <ChevronRight/>
                                    </ListItemIcon>
                                </ListItem>
                            </Paper>
                        </div>
                        <div className={classes.leftNavMenu} onClick={this.handleNavAction(this.handleRequestClose('openAssociate') ,toggleMiddlePane, 'workspace',null , null, null,null,null, this.props.toggleAssesseeMobile)}>
                            <Paper className={classes.leftMenuPaper}>
                                <ListItem className={classes.leftNavButton}>
                                    <ListItemText className={classes.leftMenuText} disableTypography={true} primary="workspace"/>
                                    <ListItemIcon className={classes.leftIcon}>
                                        <ChevronRight/>
                                    </ListItemIcon>
                                </ListItem>
                            </Paper>
                        </div>
                </div> }

                <PopupComponent
                    onOpen={this.state.openAssesseesPrimary}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleRequestClose('openAssesseesPrimary')}
                    titleStyle={classes.titleSolidGreen}
                    title={'assessees'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: this.handleActions(this.handleRequestClose('openAssesseesPrimary'),
                                    this.handleClick('openAssesseesCreate')),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: this.handleActions(this.handleRequestClose('openAssesseesPrimary'),
                                    this.handleClick('openAssessees')),
                                style:classes.optionPrimary,
                                divider:'dark'
                            },
                            {
                                show: 'exchange',
                                action:this.handleClick('openExchange'),
                                style:classes.optionPrimary
                            },
                        ]
                    }
                    close={this.handleRequestClose('openAssesseesPrimary')}
                />

                <PopupComponent
                    onOpen={this.state.openExchange}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    tickOption={true}
                    iconOptions={true}
                    actionType={this.handleRequestClose('openExchange')}
                    titleStyle={classes.titleLightGreen}
                    title={'assessees'}
                    badgeText={'exchange'}
                    badge={true}
                    badgeStyle={classes.font1_0}
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
                </PopupComponent>

                <PopupComponent
                    onOpen={this.state.openAssesseesCreate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleClick('openAssesseesPrimary')}
                    classes={classes}
                    title={'assessees'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'create'}
                    optionList={this.state.informationOptions.map( assessee => {
                        for (let action of infoActionsMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openAssesseesCreate')}
                />
                <PopupComponent
                    onOpen={this.state.openAssessees}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssessees'),this.handleClick('openAssesseesPrimary'))}
                    classes={classes}
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
                <PopupComponent
                    onOpen={this.state.openAssessmentPrimary}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssessmentPrimary'))}
                    titleStyle={classes.titleSolidGreen}
                    title={'assessments'}
                    badgeStyle={classes.assessmentSuitesBadge}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: this.handleActions(this.handleRequestClose('openAssessmentPrimary'),
                                    this.handleClick('openAssessment')),
                                style:classes.optionPrimary,
                                divider: 'dark',

                            },
                            {
                                show: 'suites',
                                action: this.handleActions(this.handleRequestClose('openAssessmentPrimary'),
                                    this.handleClick('openSuites')),
                                style:classes.optionPrimary
                            }
                        ]
                    }
                    close={this.handleRequestClose('openAssessmentPrimary')}
                />
                <PopupComponent
                    onOpen={this.state.openSuites}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openSuites'),this.handleClick('openAssessmentPrimary'))}
                    titleStyle={classes.titleLightGreen}
                    title={'assessments'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'suites'}
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
                <PopupComponent
                    onOpen={this.state.openAssessment}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssessment'),this.handleClick('openAssessmentPrimary'))}
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
                <PopupComponent
                    onOpen={this.state.openAssignmentPrimary}
                    classes={classes}
                    textOptions={true}
                    previousIcon={classes.backArrow}
                    actionType={(this.handleRequestClose('openAssignmentPrimary'))}
                    titleStyle={classes.titleSolidGreen}
                    title={'assignments'}
                    badgeStyle={classes.assignmentReportBadge}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: this.handleActions(this.handleRequestClose('openAssignmentPrimary'),
                                    this.handleClick('openAssignmentCreate')),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: this.handleActions(this.handleRequestClose('openAssignmentPrimary'),
                                    this.handleClick('openAssignment')),
                                style:classes.optionPrimary,
                                divider: 'dark',

                            },
                            {
                                show: 'reports',
                                action: null,
                                style:classes.optionPrimary
                            }
                        ]
                    }
                    close={this.handleRequestClose('openAssignmentPrimary')}
                />
                <PopupComponent
                    onOpen={this.state.openAssignmentCreate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleClick('openAssesseesPrimary')}
                    classes={classes}
                    title={'assignments'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'create'}
                    optionList={this.state.informationAssiCreate.map( assessee => {
                        for (let action of infoActionCreate) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openAssignmentCreate')}
                />
                <PopupComponent
                    onOpen={this.state.openAssignment}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssignment'),this.handleClick('openAssignmentPrimary'))}
                    classes={classes}
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
                <PopupComponent
                    onOpen={this.state.openAssociatePrimary}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssociatePrimary'))}
                    titleStyle={classes.titleSolidGreen}
                    title={'associates'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: this.handleActions(this.handleRequestClose('openAssociatePrimary'),
                                    this.handleClick('openAssociateCreate')),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: this.handleActions(this.handleRequestClose('openAssociatePrimary'),
                                    this.handleClick('openAssociate')),
                                style:classes.optionPrimary,
                                divider: 'dark',

                            }
                        ]
                    }
                    close={this.handleRequestClose('openAssociatePrimary')}
                />
                <PopupComponent
                    onOpen={this.state.openAssociateCreate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    actionType={(this.handleRequestClose('openAssociateCreate'),this.handleClick('openAssociatePrimary'))}
                    classes={classes}
                    textOptions={true}
                    title={'associates'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'create'}
                    optionList={this.state.createAssociateOptions.map( assessee => {
                        for (let action of createAssociatesMap) {
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
                <PopupComponent
                    onOpen={this.state.openAssociate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    actionType={(this.handleRequestClose('openAssociate'),this.handleClick('openAssociatePrimary'))}
                    classes={classes}
                    textOptions={true}
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
                {(this.props.createAssesseePanel === 'left')?
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
            </div>
        )
    }
};

export default NavListItems;
