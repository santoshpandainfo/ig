import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    root: {
        width: '100%',
        color: '#0073A6',
        backgroundColor: '#F7F7F7'
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logoImg: {
        // padding: '8px'
    }
});

function MainHeader(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        <img className={classes.logoImg} src="resources/images/iguru-logo.png"/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

MainHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainHeader);