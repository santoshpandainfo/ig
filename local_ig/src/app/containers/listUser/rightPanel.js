import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({

});

class RightPanel extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <div>
Right Panel
            </div>
        )
    }
}

export default withStyles(styles)(RightPanel);
