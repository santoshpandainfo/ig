import React from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';



const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    label: {
        color: '#0073A6',
        fontSize: '1em',
        marginBottom: '1em',
        paddingLeft: '1em'
    },
    dashboardIconProfile: {
        float: 'right',
        paddingLeft: '3em',
        position: 'absolute',
        top: '1em',
        right: '1em'
    },
    labelName: {
        float: 'right',
        paddingLeft: '0em',
        position: 'absolute',
        top: '1em',
        left: '6em'
    },
    labelAlias: {
        float: 'right',
        paddingLeft: '0em',
        position: 'absolute',
        top: '3em',
        left: '6em'
    }
});
const options = [
    'Mobinext Technology',
    'InsightGuru',
    'Educational Platform',
    'Lorem Ipsum',
];
class SimpleListMenu extends React.Component {
    state = {
        anchorEl: null,
        open: false,
        selectedIndex: 1,
    };

    button = undefined;

    handleClickListItem = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, open: false });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes}>
                <List>
                    <ListItem
                        button
                        // aria-haspopup="true"
                        // aria-controls="lock-menu"
                        aria-label="Assesse"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="Assesse"
                            secondary={options[this.state.selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    // id="lock-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

class ProfileImage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <Avatar
                    alt="Anonymous"
                    src="/resources/images/steve.jpg"
                    className={classNames(classes.avatar, classes.bigAvatar)}
                />
            </div>
        )
    }
}


class Profile extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ProfileImage classes={classes}/>
                <div className={classes.labelName}>Name</div>
                <div className={classes.labelAlias}>Alias</div>
            </div>
        )
    }
}


export default withStyles(styles)(Profile);
