import React from 'react';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Lightbox from 'react-image-lightbox';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Clear from 'material-ui-icons/Clear';
import AppBar from 'material-ui/AppBar';
import PopUp from '../components/popup';
import Person from 'material-ui-icons/Person';
import Camera from 'material-ui-icons/Camera';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ChevronRight from 'material-ui-icons/ChevronRight';
import Notifications from 'material-ui-icons/NotificationsActive';
import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';

import {selectUserAccount} from "../igactions/actions";

class ProfileImage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Avatar
                alt="Anonymous"
                src="/resources/images/steve.jpg"
                className={classes.dashboardImage}
            />
        )
    }
}

class SearchSection extends React.Component {

    state={
        openNodesAssociate:false,
        openRolesAssociate:false,
        openManagersAssociate:false,
        openGroupsAssociate:false,
        openAssesseeAssignReview:false,
        openAssesseeNotificationReview:false,
        openAssesseeReportsReview:false,
        photoIndex: 0,
        isAssesseeViewerOpen: false,
        isAssociateViewerOpen: false,
        reviewOpen:false,
        reviseOpen:false,
        anchorEl:null,
        associateOpen:false,
        openNameReview:false,
        openNameRevise:false,
        openGenAssociate: false,
        openAssociateReviseNew: false,
        openAssociateReviewNew:false,
        openAssociateSetting:false,
        assignmentsOpen:false,
        openReviewAssociate:false,
        openReviseAssociate:false,
        reviewModeLeft:'all',
        reviseModeLeft:'all',
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
                selected:false
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
                selected: false
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
                selected: false
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
        reviewLeftOptions:[

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
        reviseLeftOptions:[

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
        reviewAssociateOptions:[

            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: false
            } ,
            {
                show:'key',
                selected: false
            }

        ],
        reviseAssociateOptions:[

            {
                show:'information',
                divider:'dark',
                selected: false
            },
            {
                show:'all',
                selected: false
            } ,
            {
                show:'key',
                selected: false
            }

        ]
    };

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openGenAssociate',
            'openAssociateReviseNew',
            'openAssociateReviewNew',
            'openAssociateSetting',
            'openNameReview',
            'openNameRevise',
            'openReviewAssociate',
            'openReviseAssociate',
            'openAssesseeAssignReview',
            'openAssesseeNotificationReview',
            'openAssesseeReportsReview'
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

    afterChange =(prop,panel) =>{
        let temp={};
        let openList=[
            'assignmentsOpen' ,
            'notificationsOpen' ,
            'reportsOpen' ,
            'reviewOpen' ,
            'reviseOpen' ,
            'settingsOpen',
            'openNameReview',
            'openNameRevise',
            'associateReview',
            'associateRevise',
            'openAssociateReviewNew',
            'openAssesseeAssignReview',
            'openAssesseeNotificationReview',
            'openAssesseeReportsReview'
        ];
        openList.forEach( val => temp[val] = false);
        temp[prop] = true;
        return temp
    };

    handleDiagOpen = prop => event => {
        this.setState(this.afterChange(prop));
    };

    handleDiagClose = prop => () => {
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    setEntityName = authenticate => authenticate && authenticate.selectedEntity ?
            authenticate.selectedEntity.description : 'associate-name'

    setEntityAlias = authenticate => authenticate && !authenticate.selectedEntity ?
        'associate-brand' : authenticate.selectedEntity.brand ?
            authenticate.selectedEntity.brand : 'associate-brand'

    getAssesseeName = account => {
        if (!account.informationBasic) return 'No Name';

        let name = account.informationBasic;
        let nameValue = '';
        nameValue += name.nameFirst && name.nameFirst !== null ? name.nameFirst : '';
        nameValue += name.nameOther && name.nameOther !== null ? ' ' + name.nameOther : '';
        nameValue += name.nameLast  && name.nameLast  !== null ? ' ' + name.nameLast : '';

        return nameValue;
    }

    getAssesseeAlias = account => account && !account.informationBasic ?
            'assessee-alias' : account.informationBasic.nameAlias ?
                account.name.nameAlias : 'assessee-alias'

    handleAssociateToggle = (toggle, setTo) => () => {
        toggle('associate', 'all')
        setTo('middle')
    }
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
        if(show === 'all' || show=== 'key'){
            show = (show === 'key')?'basic':show;
            this.setState({'reviseModeLeft':show});
        }

    }

    readyToPass = val => {
        return val && Object.keys(val) ?
            Object.keys(val).length > 0 : false;

    }

    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);

    handleSelectReviewFilter = ( prop, f, user, infoType, setTo, mode ,group, show, actions, readyToPass, viewCurrentUser, view) => actionList => {
        let type = Array.isArray(actionList) && actionList.length > 0 ?
            actionList.find(action => action.selected).show : null;


        if (typeof f === 'function') this.handleUserSelect(f, user, (!type ? infoType : type === 'key' ?
            'basic' : type),
            mode);
        if (typeof readyToPass === 'function') this.readyToPass(user);
        if (typeof viewCurrentUser === 'function') viewCurrentUser(true);
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

    handleNavAction = (close, togglePane, pane, type, toggleMobile, setSwitch) => () => {
        close();
        if (typeof togglePane === 'function') togglePane(pane, type);
        if (typeof toggleMobile === 'function') toggleMobile('middle');
        if (typeof setSwitch === 'function') setSwitch(true);
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

    getEmail(account) {
        if (!account) return 'Downloading';
        return account.email;
    }

    render() {


        let card = this.props.authenticate && this.props.authenticate.currentUser;


        const assesseeImg  = false,
            associateImg = false;

        const { photoIndex, isAssesseeViewerOpen, isAssociateViewerOpen } = this.state,
              { title, classes, width , userDetail} = this.props,
               assesseeImages =  ['/resources/images/steve.jpg'],
               associateImages = ['/resources/images/steve.jpg'],
            reviewLeftInfo = [
                'all','key'
            ],
            reviewAssociateInfo = [
                'all','key'
            ],
            reviseAssociateInfo = [
                'all','key'
            ],
            reviseLeftInfo = [
                'all','key'
            ],
            assignmentFilters = [
               'review' ,'all','active','archived', 'inactive','finished','unfinished','started','unstarted','suspended' ,'terminated'
            ],
            notificationFilters = [
                'review', 'all','archived','flagged','unflagged','read','unread'
            ],
            reportFilters = [
                'review',  'all','archived','flagged','unflagged','read','unread'
            ];

        let reviewLeftMap=  [
                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openNameReview',
                        this.props.selectUserAccount,
                        card,
                        this.state.reviewModeLeft ,
                        this.props.toggleAssesseeMobile,
                        'review',
                        reviewLeftInfo,
                        this.state.reviewModeLeft,
                        this.state.reviewLeftOptions,
                        this.readyToPass ,
                        this.props.viewCurrentUser,
                        this.props.view
                    ),
                    // action: this.handleNavAction(this.handleRequestClose('openReview'), this.props.toggleMiddlePane, 'node','node',this.props.toggleAssesseeMobile),

                    // action: this.handleSelectReviewFilter('openReview', this.props.selectUserAccount,card,this.props.toggleMiddlePane, this.props.toggleAssesseeMobile, this.state.reviewModeLeft , 'review', reviewLeftInfo, this.state.reviewModeLeft, this.state.reviewLeftOptions, this.readyToPass),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviewLeftInfo, 'all', this.state.reviewLeftOptions),
                    // action: this.handleSelectFilter('openNameReview', this.props.selectUserAccount, card, 'all', this.props.toggleAssesseeMobile, 'review', reviewLeftInfo, 'all', this.state.reviewLeftOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action:this.handleSelect(reviewLeftInfo, 'key', this.state.reviewLeftOptions),
                    // action: this.handleSelectFilter('openNameReview', this.props.selectUserAccount, card, 'basic', this.props.toggleAssesseeMobile, 'review', reviewLeftInfo, 'key', this.state.reviewLeftOptions),
                    style: classes.optionSecondary
                }

            ],
            reviseLeftMap=  [

                {
                    show:'information',
                    action: this.handleSelectReviewFilter('openNameRevise',
                        this.props.selectUserAccount,
                        card,
                        this.state.reviseModeLeft,
                        this.props.toggleAssesseeMobile,
                        'revise',
                        reviseLeftInfo,
                        this.state.reviseModeLeft,
                        this.state.reviseLeftOptions,
                        this.readyToPass ,
                        this.props.viewCurrentUser,
                        this.props.view
                        ),
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action:this.handleSelect(reviseLeftInfo, 'all', this.state.reviseLeftOptions),
                    // action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'all', this.props.toggleAssesseeMobile, 'revise', reviseLeftInfo, 'all', this.state.reviseLeftOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action:this.handleSelect(reviseLeftInfo, 'key', this.state.reviseLeftOptions),
                    // action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'basic', this.props.toggleAssesseeMobile, 'revise', reviseLeftInfo, 'key', this.state.reviseLeftOptions),
                    style: classes.optionSecondary
                }

            ],
            reviewAssociateMap=  [

                {
                    show:'information',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'all', this.props.toggleAssesseeMobile, 'revise', reviewAssociateInfo, 'all', this.state.reviewAssociateOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'basic', this.props.toggleAssesseeMobile, 'revise', reviewAssociateInfo, 'key', this.state.reviewAssociateOptions),
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
            reviseAssociateMap=  [

                {
                    show:'information',
                    action:null,
                    style: classes.optionPrimary
                },
                {
                    show:'all',
                    action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'all', this.props.toggleAssesseeMobile, 'revise', reviseAssociateInfo, 'all', this.state.reviseAssociateOptions),
                    style: classes.optionSecondary
                } ,
                {
                    show:'key',
                    action: this.handleSelectFilter('openNameRevise', this.props.selectUserAccount, card, 'basic', this.props.toggleAssesseeMobile, 'revise', reviseAssociateInfo, 'key', this.state.reviseAssociateOptions),
                    style: classes.optionSecondary
                }

            ];

        return (
            <div>
            <Paper className={classes.dashboardCardTop} style={{'cursor': _.isEmpty(this.props.selectedEntity)?"initial":null,'background-color': _.isEmpty(this.props.selectedEntity)?'#fff':null}}>

                <div className={classNames(classes.dashboard, classes.fillRight)}
                     onClick={_.isEmpty(this.props.selectedEntity)?null:this.handleDiagOpen('assignmentsOpen')}
                >
                    <div className={classes.dashboardlabelName}>
                        {Object.keys(this.props.selectedEntity).length > 0 ?
                            this.getAssesseeName(this.props.authenticate && this.props.authenticate.currentUser) : this.getEmail(this.props.authenticate && this.props.authenticate.currentUser)}
                    </div>
                    <div className={classNames(classes.aliasName, classes.textOverflow)}>
                        {Object.keys(this.props.selectedEntity).length > 0 ?
                            this.getAssesseeAlias(this.props.authenticate && this.props.authenticate.currentUser) : ''}
                    </div>
                </div>
                {Object.keys(this.props.selectedEntity).length > 0 ?
                <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                    <Badge className={classes.badgeBox}>
                        <IconButton><Notifications /></IconButton>
                    </Badge>
                </div> : null}
                { Object.keys(this.props.selectedEntity).length > 0 ?
                <div className={classes.dashboardImage}>

                    { assesseeImg ?
                        <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={() => this.setState({ isAssesseeViewerOpen: true })}>
                            <Avatar
                                alt="Anonymous"
                                src="/resources/images/steve.jpg"
                                className={classNames(classes.avatar, classes.profileAvatarLeft)}
                            />
                        </Button> :
                        <Button variant="fab" disabled={true} mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable, classes.imageNA)}>
                            <Person />
                        </Button>
                    }
                    {isAssesseeViewerOpen && (
                        <div className={classes.lightBoxDiv}>
                            <Lightbox
                                mainSrc={assesseeImages}
                                onCloseRequest={() => this.setState({ isAssesseeViewerOpen: false })}
                            />
                        </div>
                    )}
                </div> : null}
                <PopUp
                    onOpen={this.state.assignmentsOpen}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleDiagClose('assignmentsOpen')}
                    titleStyle={classes.titleSolidGreen}
                    title={'assessee'}
                    close={this.handleDiagClose('assignmentsOpen')}
                    optionList={
                        [
                            {
                                show: 'alliance',
                                action: null,
                                style:classes.optionPrimaryDisabled,

                            },

                            {
                                show: 'review',
                                action: this.handleDiagOpen('openNameReview'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'revise',
                                action: this.handleDiagOpen('openNameRevise'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'settings',
                                action:null,
                                style:classes.optionPrimary,
                                divider:'dark'

                            },
                            {
                                show: 'assignments',
                                action: this.handleDiagOpen('openAssesseeAssignReview'),
                                style:classes.optionPrimary,
                                notify:true

                            },
                            {
                                show: 'notifications',
                                action:this.handleDiagOpen('openAssesseeNotificationReview'),
                                style:classes.optionPrimary,
                                notify:true

                            },
                            {
                                show: 'reports',
                                action:this.handleDiagOpen('openAssesseeReportsReview'),
                                style:classes.optionPrimary,
                                notify:true

                            },
                        ]
                    }

                />


                <PopUp
                    onOpen={this.state.openAssesseeAssignReview}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeAssignReview'),this.handleClick('assignmentsOpen'))}
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
                    close={this.handleRequestClose('openAssesseeAssignReview')}
                />
                <PopUp
                    onOpen={this.state.openAssesseeNotificationReview}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeNotificationReview'),this.handleClick('assignmentsOpen'))}
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
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openAssesseeReportsReview'),this.handleClick('assignmentsOpen'))}
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
                    close={this.handleRequestClose('openAssesseeReportsReview')}
                />
                <PopUp
                    onOpen={this.state.openNameReview}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openNameReview'),this.handleClick('assignmentsOpen'))}
                    classes={classes}
                    passOptions={true}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'review'}
                    optionList={this.state.reviewLeftOptions.map( assessee => {
                        for (let action of reviewLeftMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openNameReview')}
                />
                <PopUp
                    onOpen={this.state.openNameRevise}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openNameRevise'),this.handleClick('assignmentsOpen'))}
                    classes={classes}
                    title={'assessee'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'revise'}
                    optionList={this.state.reviseLeftOptions.map( assessee => {
                        for (let action of reviseLeftMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openNameRevise')}
                />

            </Paper>
                { !this.props.authenticate || !this.props.authenticate.selectedEntity || !this.props.authenticate.selectedEntity.description ?
                    <div className={classes.leftNavAccount} onClick={this.handleAssociateToggle(this.props.toggleMiddlePane, this.props.toggleAssesseeMobile)}>
                        <Paper className={classes.leftMenuPaper}>
                            <ListItem className={classes.leftNavButton} >
                                <ListItemText className={classes.leftMenuText} disableTypography={true} primary="associate"/>
                                <ListItemIcon className={classes.leftIcon}>
                                    <ChevronRight/>
                                </ListItemIcon>
                            </ListItem>
                        </Paper>
                    </div> : <Paper className={classes.dashboardCardBottom}>
                    <div className={classNames(classes.dashboard, classes.fillRight)}
                         onClick={this.handleClick('openGenAssociate')}>
                        <div className={classes.dashboardlabelName}>
                            {this.setEntityName(this.props.authenticate)}
                        </div>
                        <div className={classNames(classes.aliasName, classes.textOverflow)}>
                            {this.setEntityAlias(this.props.authenticate)}
                        </div>
                    </div>
                    <div className={classNames(classes.unitFlex, classes.notificationIcon)}>
                        <Badge className={classes.badgeBox} >
                        <IconButton><Notifications /></IconButton>
                        </Badge>
                    </div>
                    <div className={classes.dashboardImage}>
                        { associateImg ?
                            <Button variant="fab" mini className={classNames(classes.button, classes.iconsImageDefault)} onClick={() => this.setState({ isAssociateViewerOpen: true })}>
                                <Avatar
                                    alt="Anonymous"
                                    src="/resources/images/steve.jpg"
                                    onClick={() => this.setState({ isAssociateViewerOpen: true })}
                                    className={classNames(classes.avatar, classes.profileAvatarLeft)}
                                />
                            </Button> :
                            <Button variant="fab" disabled={true} mini className={classNames(classes.button, classes.iconsFooterDefault, classes.unAvailable, classes.imageNA)}>
                                <Camera />
                            </Button> }
                        {isAssociateViewerOpen && (
                            <div className={classes.lightBoxDiv}>
                                <Lightbox
                                    mainSrc={associateImages}
                                    onCloseRequest={() => this.setState({ isAssociateViewerOpen: false })}
                                />
                            </div>
                        )}
                    </div>
                </Paper>
                }
                <PopUp
                    onOpen={this.state.openGenAssociate}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={this.handleRequestClose('openGenAssociate')}
                    titleStyle={classes.titleSolidGreen}
                    title={'associate'}
                    optionList={
                        [
                            {
                                show: 'groups',
                                action:this.handleClick('openGroupsAssociate'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'managers',
                                action:this.handleClick('openManagersAssociate'),
                                style:classes.optionPrimary
                            },

                            {
                                show: 'nodes',
                                //action: this.handleNavAction(this.handleRequestClose('openGenAssociate'), this.props.toggleMiddlePane, 'node','node',this.props.toggleAssesseeMobile),
                                action:this.handleClick('openNodesAssociate'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'roles',
                                action:this.handleClick('openRolesAssociate'),
                                style:classes.optionPrimary,
                                divider:'dark'
                            },
                            {
                                show: 'review',
                                action:this.handleClick('openReviewAssociate'),
                                style:classes.optionPrimary
                            },
                            {
                                show: 'revise',
                                action:this.handleClick('openReviseAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'settings',
                                action:null,
                                style:classes.optionPrimary,
                                divider:'dark'
                            },
                            {
                                show: 'switch',
                                action: this.handleNavAction(this.handleRequestClose('openGenAssociate'), this.props.toggleMiddlePane, 'associate','all', this.props.toggleAssesseeMobile, this.props.setSwitch),
                                style:classes.optionPrimary
                            }
                        ]
                    }
                    close={this.handleRequestClose('openGenAssociate')}
                />

                <PopUp
                    onOpen={this.state.openGroupsAssociate}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openGroupsAssociate'))}
                    titleStyle={classes.titleLightGreen}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'groups'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'revise',
                                action: null,
                                style:classes.optionPrimary
                            },
                        ]
                    }
                    close={this.handleRequestClose('openGroupsAssociate')}
                />
                <PopUp
                    onOpen={this.state.openManagersAssociate}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openManagersAssociate'))}
                    titleStyle={classes.titleLightGreen}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'managers'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'revise',
                                action: null,
                                style:classes.optionPrimary
                            },
                        ]
                    }
                    close={this.handleRequestClose('openManagersAssociate')}
                />
                <PopUp
                    onOpen={this.state.openNodesAssociate}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openNodesAssociate'))}
                    titleStyle={classes.titleLightGreen}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'nodes'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'revise',
                                action: null,
                                style:classes.optionPrimary
                            },
                        ]
                    }
                    close={this.handleRequestClose('openNodesAssociate')}
                />
                <PopUp
                    onOpen={this.state.openRolesAssociate}
                    classes={classes}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openRolesAssociate'))}
                    titleStyle={classes.titleLightGreen}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'roles'}
                    optionList={
                        [
                            {
                                show: 'create',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'review',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'revise',
                                action: null,
                                style:classes.optionPrimary
                            },
                        ]
                    }
                    close={this.handleRequestClose('openRolesAssociate')}
                />
                <PopUp
                    onOpen={this.state.openReviewAssociate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openReviewAssociate'),this.handleClick('openGenAssociate'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'review'}
                    optionList={this.state.reviewAssociateOptions.map( assessee => {
                        for (let action of reviewAssociateMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openReviewAssociate')}
                />
                <PopUp
                    onOpen={this.state.openReviseAssociate}
                    titleStyle={classes.titleLightGreen}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleRequestClose('openReviseAssociate'),this.handleClick('openGenAssociate'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'revise'}
                    optionList={this.state.reviseAssociateOptions.map( assessee => {
                        for (let action of reviseAssociateMap) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleRequestClose('openReviseAssociate')}
                />

                {/*<PopUp*/}
                    {/*onOpen={this.state.openReviseAssociate}*/}
                    {/*titleStyle={classes.titleLightGreen}*/}
                    {/*previousIcon={classes.backArrow}*/}
                    {/*textOptions={true}*/}
                    {/*actionType={(this.handleRequestClose('openReviseAssociate'),this.handleClick('openGenAssociate'))}*/}
                    {/*classes={classes}*/}
                    {/*title={'revise'}*/}
                    {/*optionList={*/}
                        {/*[*/}
                            {/*{*/}
                                {/*show: 'information',*/}
                                {/*action: null,*/}
                                {/*style:classes.optionPrimary,*/}
                                {/*divider:'dark'*/}
                            {/*},*/}
                            {/*{*/}
                                {/*show: 'all',*/}
                                {/*action:this.handleDiagClose('openReviseAssociate', this.props.selectUserAccount, card, 'all', this.props.toggleAssesseeMobile, 'revise'),*/}
                                {/*style:classes.optionSecondary*/}
                            {/*},*/}
                            {/*{*/}
                                {/*show: 'key',*/}
                                {/*action:this.handleDiagClose('openReviseAssociate', this.props.selectUserAccount, card, 'primary', this.props.toggleAssesseeMobile, 'revise'),*/}
                                {/*style:classes.optionSecondary*/}
                            {/*},*/}

                        {/*]*/}
                    {/*}*/}
                    {/*close={this.handleRequestClose('openReviseAssociate')}*/}
                {/*/>*/}




            </div>
        )
    }
}

class AssociateNames extends React.Component {


    render() {
        let {title, classes, width, card} = this.props;
        return (
            <div className={classes.dashboardCard}>

                <div className={classNames(classes.dashboard, classes.fillRight)}
                     onClick={this.handleDiagOpen('assignmentsOpen')}
                >
                    <div className={classes.dashboardlabelName}>Associate Name</div>
                    <div className={classNames(classes.aliasName, classes.textOverflow)}>Brand</div>
                </div>
                <div className={classes.dashboardImage}>
                    <Avatar
                        alt="Anonymous"
                        src="/resources/images/steve.jpg"
                        className={classNames(classes.avatar, classes.profileAvatarLeft)}
                    />
                </div>

            </div>

        )
    }
}

export default SearchSection;