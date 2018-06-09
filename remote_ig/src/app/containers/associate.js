import React from 'react';
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip';
import PopUp from '../components/popup'

//TODO: Samples are temp from requirements. To be service integrated

const setSampleCount = item => +item < 9 ? ('0' + (+item + 1)) : +item + 1

const genSampleAssessment = (classes, clickAction) => (Array.from(Array(50).keys()).map( item => {
    let title = "Associate-" + setSampleCount(item)+" Sample-" + setSampleCount(item);
    return (
        <div key={item} className={classes.cardMainContainerMid}>
            <Button disableFocusRipple={true} disableRipple={true} className={classes.cardButton} onClick={clickAction}>
                <div className={classes.measureBox}>
                    <div className={classes.cardContentMidPanel}  >
                        <div style={{ color: '#000000de'}}>
                            <Tooltip id="tooltip-icon" title={title} className={classes.tooltip}>
                                <span>{title}</span>
                            </Tooltip>
                        </div>
                        <div style={{fontSize:'1.2rem'}}>
                            Sample Associate {setSampleCount(item)}
                        </div>
                    </div>
                    <div className={classes.cardContentMidPanelIcon}></div>
                </div>
            </Button>
        </div>
    )
}))

class AssociateCard extends React.Component{


    state={
        associateCardPopup:false
    }

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'associateCardPopup',
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp
    };

    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);

    handleDiagOpen = prop => () => {
        this.setState(this.change(prop));
    };

    handleDiagClose = (prop, f, user, infoType, setTo, mode) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleAssociateSelect = (select, associate, setTo, closeMiddlePane, selectedEntity, setSwitch, openPopup) => () => {
        select(associate);
        setTo('left');
        if (Object.keys(selectedEntity).length === 0) closeMiddlePane();
        if (typeof  setSwitch === 'function') setSwitch(true)
        openPopup()


    }


    render(){

        let {classes, associate, setUserEntity, toggleAssesseeMobile, closeMiddlePane, selectedEntity, setSwitch, actionSelect}=this.props;

        return(
            <div>
                <div className={classes.cardMainContainerMid} onClick={typeof actionSelect === 'function' ?
                    actionSelect : null}
                     // onClick={this.handleAssociateSelect(setUserEntity, associate, toggleAssesseeMobile, closeMiddlePane, selectedEntity, setSwitch, this.handleDiagOpen('associateCardPopup'))}
                >

                    <Button disableFocusRipple={true} disableRipple={true} className={classes.cardButton}>
                        <div className={classes.measureBox}>
                            <div className={classes.cardContentMidPanel}>
                                <div style={{ color: '#000000de'}}>
                                    <Tooltip id="tooltip-icon" title={associate.description ? associate.description : 'associate-name'} className={classes.tooltip}>
                                        <span>{associate.description ? associate.description : 'associate-name'}</span>
                                    </Tooltip>
                                </div>
                                <div style={{fontSize:'1.2rem'}}>
                                    {associate.brand ? associate.brand : 'associate-brand' }
                                </div>
                            </div>
                            <div className={classes.cardContentMidPanelIcon}></div>
                        </div>
                    </Button>
                </div>
                <PopUp
                    onOpen={this.state.associateCardPopup}
                    classes={classes}
                    textOptions={true}
                    previousIcon={classes.backArrow}
                    titleStyle={classes.titleSolidBlue}
                    title={'assessee'}
                    close={this.handleDiagClose('associateCardPopup')}
                    optionList={
                        [
                            {
                                show: 'alliance',
                                action: null,
                                style:classes.optionPrimary,

                            }

                        ]
                    }/>
            </div>
        )
    }
};
class AssociateBlock extends React.Component {

    state={
        associateCardPopup:false,
        openDeleteAssociate:false,
        openFlagAssociate:false,
        openSelectAssociate:false,
        openMoveAssociate:false,
        ReviewAssociate:false,
        openReviseAssociate:false,
        openSuspendAssociate:false,
        reviewOptionsAssociate:[
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
        reviseOptionsAssociate:[
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
            'openFlagAssociate',
            'openSelectAssociate',
            'associateCardPopup',
            'openDeleteAssociate',
            'openMoveAssociate',
            'openReviseAssociate',
            'openSuspendAssociate',
            'openReviewAssociate',
            'ReviewAssociate'
        ];
        openList.forEach(val => temp[val] = false);
        temp[prop] = true;
        return temp
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

    handleClick = prop => event => {
        let {listCardsPanel} = this.props;
        this.setState(this.change(prop, listCardsPanel));
    };

    handleUserSelect = (selectUser, user, type, mode) => selectUser(user, type, mode);

    handleDiagOpen = prop => () => {
        this.setState(this.change(prop));
    };

    handleDiagClose = (prop, f, user, infoType, setTo, mode) => () => {
        if (typeof f === 'function') this.handleUserSelect(f, user, infoType, mode);
        if (typeof setTo === 'function') setTo('right');
        let temp = {};
        temp[prop] = false;
        this.setState(temp);
    };

    handleAssociateSelect = (select, associate, setTo, closeMiddlePane, selectedEntity, setSwitch, openPopup) => () => {
        select(associate);
        setTo('left');
        if (typeof closeMiddlePane === 'function') closeMiddlePane();
        if (typeof setSwitch === 'function') setSwitch(false)
        if (typeof openPopup==='function')openPopup()

    }

    handleAction = (close, toggleRightPane, pane, setTo, viewCurrentUser) => () => {
        if (typeof close === 'function') close();
        if (typeof toggleRightPane === 'function') toggleRightPane(pane);
        if (typeof setTo === 'function') setTo('right');
        if (typeof viewCurrentUser==='function') viewCurrentUser(false)
    }

    render() {
        let {classes, view, isHeight, authenticate, setUserEntity, closeMiddlePane, selectedEntity, toggleRightPane}= this.props;
        let reviewOptions = ['all' , 'key'],
            reviseOptions = ['all', 'key'];

        let associateList = authenticate && authenticate.entities;
        let reviseAssociate=  [

            {
                show:'information',
                action: null,
                style: classes.optionPrimary
            },
            {
                show:'all',
                action:this.handleSelect(reviseOptions, 'all', this.state.reviseOptionsAssociate),
                style: classes.optionSecondary
            },
            {
                show:'key',
                action:this.handleSelect(reviseOptions, 'key', this.state.reviseOptionsAssociate),
                style: classes.optionSecondary
            }

        ];
        let reviewAssociate=  [

            {
                show:'information',
                action:this.handleAction(this.handleDiagClose('ReviewAssociate'), toggleRightPane, 'associate', this.props.toggleAssesseeMobile, toggleRightPane,this.props.viewCurrentUser),
                style: classes.optionPrimary
            },
            {
                show:'all',
                action:this.handleSelect(reviewOptions, 'all', this.state.reviewOptionsAssociate),
                style: classes.optionSecondary
            },
            {
                show:'key',
                action:this.handleSelect(reviseOptions, 'key', this.state.reviewOptionsAssociate),
                style: classes.optionSecondary
            }

        ];

        return(
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
                <div className={classes.associateContainer}>
                    {
                        view.associate && view.associate.all && view.switch ?
                            associateList.map((associate, index) =>
                                <AssociateCard
                                    actionSelect={this.handleAssociateSelect(setUserEntity, associate, this.props.toggleAssesseeMobile, this.props.closeMiddlePane, this.props.selectedEntity, this.props.setSwitch,null)}
                                    setSwitch={this.props.setSwitch}
                                    selectedEntity={selectedEntity}
                                    closeMiddlePane={closeMiddlePane}
                                    toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                    setUserEntity={setUserEntity}
                                    key={index}
                                    classes={classes}
                                    associate={associate} />) :

                            view.associate && view.associate.all ?
                                  genSampleAssessment(classes, this.handleDiagOpen('associateCardPopup')) : <div className={classes.workInProgress}>
                        development in progress !
                        </div>

                    }
                </div>
                <PopUp
                    onOpen={this.state.associateCardPopup}
                    classes={classes}
                    textOptions={true}
                    previousIcon={classes.backArrow}
                    titleStyle={classes.titleSolidBlue}
                    title={'associate'}
                    actionType={this.handleDiagClose('associateCardPopup')}
                    close={this.handleDiagClose('associateCardPopup')}
                    optionList={
                        [
                            {
                                show: 'alliance',
                                action: null,
                                style:classes.optionPrimaryDisabled,

                            },
                            {
                                show: 'delete',
                                action:this.handleClick('openDeleteAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'flag',
                                action: this.handleClick('openFlagAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'move',
                                action: this.handleClick('openMoveAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'review',
                                action: this.handleClick('ReviewAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'revise',
                                action: this.handleClick('openReviseAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'select',
                                action: this.handleClick('openSelectAssociate'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'suspend',
                                action: this.handleClick('openSuspendAssociate'),
                                style:classes.optionPrimary,

                            }
                        ]
                    }/>

                <PopUp
                    onOpen={this.state.openSelectAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openSelectAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'select'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:null,
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openSelectAssociate')}
                />

                <PopUp
                    onOpen={this.state.openFlagAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openFlagAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'flag'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:null,
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openFlagAssociate')}
                />

                <PopUp
                    onOpen={this.state.openDeleteAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openDeleteAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'delete'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:null,
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openDeleteAssociate')}
                />
                <PopUp
                    onOpen={this.state.openMoveAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openMoveAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'move'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:null,
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openMoveAssociate')}
                />
                <PopUp
                    onOpen={this.state.openSuspendAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openSuspendAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'suspend'}
                    optionList={
                        [
                            {
                                show: 'no',
                                action: null,
                                style:classes.optionPrimary
                            },
                            {
                                show: 'yes',
                                action:null,
                                style:classes.optionPrimary
                            }

                        ]
                    }
                    close={this.handleDiagClose('openSuspendAssociate')}
                />
                <PopUp
                    onOpen={this.state.ReviewAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('ReviewAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'review'}
                    passOptions={true}
                    optionList={this.state.reviewOptionsAssociate.map( assessee => {
                        for (let action of reviewAssociate) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('ReviewAssociate')}
                />
                <PopUp
                    onOpen={this.state.openReviseAssociate}
                    titleStyle={classes.titleLightBlue}
                    previousIcon={classes.backArrow}
                    textOptions={true}
                    actionType={(this.handleDiagClose('openReviseAssociate'),this.handleDiagOpen('associateCardPopup'))}
                    classes={classes}
                    title={'associate'}
                    badge={true}
                    badgeStyle={classes.font1_0}
                    badgeText={'revise'}
                    passOptions={true}
                    optionList={this.state.reviseOptionsAssociate.map( assessee => {
                        for (let action of reviseAssociate) {
                            if (action.show === assessee.show) {
                                assessee.action = action.action;
                                assessee.style = action.style;
                            }
                        }
                        return assessee;
                    })
                    }
                    close={this.handleDiagClose('openReviseAssociate')}
                />
            </div>
        )
    }
};

export default AssociateBlock;