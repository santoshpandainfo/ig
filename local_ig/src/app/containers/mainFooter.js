import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import FirstPage from 'material-ui-icons/FirstPage';
import LastPage from 'material-ui-icons/LastPage';

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';


const styles = theme => ({

    footerContainer:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#d8d8d8',
        position:'fixed',
        bottom:'0px',
        width:'100%',
        height:'25px'
    },
    footerContent:{
        width:'100%',
        alignItems:'center',
        color:'#808080',
        textAlign:'center',
        fontSize:'1rem'
    },
    measureBoxDash: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        color: theme.palette.text.secondary
    },
});

class PagerIconsTwo extends React.Component {
    render() {
        let {classes} = this.props;
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classNames(classes.measureBoxDash, classes.borderBox)}>
                    <div className={classes.mbPager}></div>
                    <div className={classes.mbPager}>
                        <div className={classes.iconBox}>
                            <Button fab mini className={classes.iconsBarPager}><FirstPage/></Button>
                        </div>
                    </div>
                    <div className={classes.mbPager}>
                        <div className={classes.iconBox}>
                            <Button fab mini className={classes.iconsBarPager}><KeyboardArrowLeft/></Button>
                        </div>
                    </div>
                    <div className={classes.mbPager}>
                        <div className={classes.iconBox}>
                            <Button fab mini className={classes.iconsBarPager}><KeyboardArrowRight/></Button>
                        </div>
                    </div>
                    <div className={classes.mbPager}>
                        <div className={classes.iconBox}>
                            <Button fab mini className={classes.iconsBarPager}><LastPage/></Button>
                        </div>
                    </div>
                    <div className={classes.mbPager}></div>
                </div>
            </Grid>
        )
    }
}

class MainFooter extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.footerContainer}>
              <p className={classes.footerContent}>
                 <PagerIconsTwo classes={classes}/>
              </p>
            </div>
        );
    }
}

MainFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MainFooter);
