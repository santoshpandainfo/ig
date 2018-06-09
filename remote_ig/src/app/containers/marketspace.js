import React from 'react';
import Button from 'material-ui/Button'


class MarketSpace extends React.Component{
    render(){
        let {classes, view, isHeight}= this.props;
        return(
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
            <div className={classes.associateContainer}>
                    <div className={classes.workInProgress}>
                            <div>development in progress !</div>
                        </div>
            </div>
            </div>
        )
    }
};

export default MarketSpace;