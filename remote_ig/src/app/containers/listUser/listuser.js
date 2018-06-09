import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import MainHeader from '../mainHeader';
import MainFooter from '../mainFooter';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
        border: 'none',
        height: `calc(100% - 25px)`,
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: `calc(100% - 25px)`,
        },
    }
});

class ListUser extends React.Component {

    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                <MainHeader/>
                <main className={classes.content}>
                    <Typography type="body1" noWrap>
                        <div className={classes.root}>
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Grid item xs={6} sm={6}>
                                            <Paper className={classes.paper}>xs=12 sm=6</Paper>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </Typography>
                </main>
                <LeftPanel/>
                <RightPanel/>
                <MainFooter/>
            </div>
        );
    }
}

ListUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListUser);