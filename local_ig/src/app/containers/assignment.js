import React from 'react';
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip';
import PopUp from '../components/popup';

//TODO: Samples are temp from requirements. To be service integrated

const setSampleCount = item => +item < 9 ? ('0' + (+item + 1)) : +item + 1

const genSampleAssessment = classes => (Array.from(Array(50).keys()).map( item => {
    let title = "Assignment-" + setSampleCount(item)+" Sample-" + setSampleCount(item);
    return (
        <div key={item} className={classes.cardMainContainerMid}>
            <Button disableFocusRipple={true} disableRipple={true} className={classes.cardButton}>
                <div className={classes.measureBox}>
                    <div className={classes.cardContentMidPanel}>
                        <div style={{ color: '#000000de'}}>
                            <Tooltip id="tooltip-icon" title={title} className={classes.tooltip}>
                                <span>{title}</span>
                            </Tooltip>
                        </div>
                        <div style={{fontSize:'1.2rem'}}>
                            Sample Assignment {setSampleCount(item)}
                        </div>
                    </div>
                    <div className={classes.cardContentMidPanelIcon}></div>
                </div>
            </Button>
        </div>
    )
}))

class AssessmentBlock extends React.Component{
state={
    assignmentCardPopup:false
}

    change = (prop, panel) => {
        let temp = {};
        let openList = [
            'openFlagAssignment',
            'openSelectAssignment',
            'assignmentCardPopup',
            'openDeleteAssignment',
            'openMoveAssignment',
            'openReviseAssignment',
            'openSuspendAssignment',
            'openReviewAssignment',
            'ReviewAssignment'
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

    render(){
        let {classes, view, isHeight}= this.props;
        return(
            <div>
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
                <div className={classes.associateContainer} onClick={this.handleClick('assignmentCardPopup')}>
                    {
                        view.assignment && view.assignment.all ?
                            genSampleAssessment(classes) : <div className={classes.workInProgress}>
                                <div>development in progress !</div>
                            </div>
                    }
                </div>
            </div>
                <PopUp
                    onOpen={this.state.assignmentCardPopup}
                    classes={classes}
                    textOptions={true}
                    previousIcon={classes.backArrow}
                    titleStyle={classes.titleSolidBlue}
                    title={'assignment'}
                    actionType={this.handleDiagClose('assignmentCardPopup')}
                    close={this.handleDiagClose('assignmentCardPopup')}
                    optionList={
                        [

                            {
                                show: 'delete',
                                action:this.handleClick('openDeleteAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'flag',
                                action: this.handleClick('openFlagAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'move',
                                action: this.handleClick('openMoveAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'review',
                                action: this.handleClick('ReviewAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'revise',
                                action: this.handleClick('ReviseAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'select',
                                action: this.handleClick('openSelectAssignment'),
                                style:classes.optionPrimary,

                            },
                            {
                                show: 'suspend',
                                action: this.handleClick('openSuspendAssignment'),
                                style:classes.optionPrimary,

                            }
                        ]
                    }/>
            </div>
        )
    }
};

export default AssessmentBlock;