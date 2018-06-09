import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({

});

class LeftPanel extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <div>
    LeftPanel
            </div>
        )
    }
}

export default withStyles(styles)(LeftPanel);
