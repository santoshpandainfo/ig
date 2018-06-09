import React from 'react';
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip';

//TODO: Samples are temp from requirements. To be service integrated

const setSampleCount = item => +item < 9 ? ('0' + (+item + 1)) : +item + 1

const genSampleAssessment = classes => (Array.from(Array(50).keys()).map( item => {
    let title = "Assessment-" + setSampleCount(item) + " Sample-" + setSampleCount(item);
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
                            Sample Assessment {setSampleCount(item)}
                        </div>
                    </div>
                    <div className={classes.cardContentMidPanelIcon}></div>
                </div>
            </Button>
        </div>
    )
}))

class AssessmentBlock extends React.Component{
    render(){
        let {classes, view, isHeight}= this.props;
        return(
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
            <div className={classes.associateContainer}>
                {
                    view.assessment && view.assessment.all ?
                        genSampleAssessment(classes) : <div className={classes.workInProgress}>
                            <div>development in progress !</div>
                        </div>
                }
            </div>
            </div>
        )
    }
};

export default AssessmentBlock;