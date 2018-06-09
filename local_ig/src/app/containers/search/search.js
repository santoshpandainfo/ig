import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Card, {CardActions, CardContent} from 'material-ui/Card';

import {FormControl, FormHelperText} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
    card: {
        minWidth: 275,
        margin: '0.6em 0 0.6em 0.6em',
        color: '#0073A6'
    },
    title: {
        margin: '1em 1em 2em',
        fontSize: '1em',
        color: theme.palette.text.secondary,
    },
    sectiontitle: {
        textAlign: 'center',
        padding: '1em 0',
        fontSize: '1em',
        color: '#0073A6',
        fontWeight: 600
    },
    onlyblue: {
        color: '#0073A6',
    },
    onlyDividerGreen: {
        'background-color': '#89BF5C',
    },
    subSectiontitle: {
        paddingTop: '2em',
        fontSize: '2rem',
        color: '#89BF5C',
        'fontWeight': 600,
        position: 'relative',
        cursor: 'pointer'
    },
    formControl: {
        color: '#89BF5C',
        width: '100%',
        fontSize: '14px'
    },
    textField: {
        display: 'flex',
        marginRight: '0.5em',
        color: '#0073A6',
        width: '100%'
    },
    inputSearch: {
        width: '100%',
        padding: '5px'
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    menu: {
        width: 200,
    },
    label: {
        color: '#0073A6'
    },
    options: {
        color: '#0073A6'
    },
    paperContent: {
        margin: '0.5em',
        padding: '0.5em'
    },
    addIcon: {
        position: 'absolute',
        right: '0.5em',
        bottom: '0.2em'
    }
});

const siftSecondary = [
    {
        value: 'allMN',
        label: 'Across all management nodes'
    },
    {
        value: 'specifiedMN',
        label: 'Across specified management nodes'
    },
    {
        value: 'withinallMN',
        label: 'Within all management nodes'
    },
    {
        value: 'withinSpecifiedMN',
        label: 'Within specified management nodes'
    }
];

const sortPrimary = [
    {
        value: 'firstLastName',
        label: 'First Name/Last Name'
    },
    {
        value: 'lastFirstName',
        label: 'Last Name/First Name'
    }
];

const options = [
    {
        value: 'all',
        label: 'All'
    },
    {
        value: 'name',
        label: 'Name'
    },
    {
        value: 'emailAddress',
        label: 'Email Address'
    },
    {
        value: 'mobileTelephone',
        label: 'Mobile Telephone'
    },
    {
        value: 'city',
        label: 'City'
    },
    {
        value: 'node',
        label: 'Node'
    },
];

class SortOptions extends React.Component {
    state = {
        sortPrimary: '',
    };

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    render() {
        let {classes} = this.props;
        return (
            <div>
                <TextField
                    id="select-sort-primary"
                    select
                    className={classes.textField}
                    value={this.state.sortPrimary}
                    onChange={this.handleChange('sortPrimary')}
                    placeholder="Primary"
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Select primary sort"
                    margin="normal"
                >
                    {sortPrimary.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}

class SiftOptions extends React.Component {

    state = {
        siftPrimary: '',
        siftSecondary: ''
    }

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    render() {
        let {classes} = this.props;
        return (
            <div>
                <TextField
                    id="select-sift-primary"
                    select
                    className={classes.textField}
                    value={this.state.siftPrimary}
                    onChange={this.handleChange('siftPrimary')}
                    placeholder="Primary"
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Select primary sift"
                    margin="normal"
                >
                    {options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="select-sift-secondary"
                    select
                    className={classes.textField}
                    value={this.state.siftSecondary}
                    onChange={this.handleChange('siftSecondary')}
                    placeholder="Options"
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Select secondary sift"
                    margin="normal"
                >
                    {siftSecondary.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )

    }
}

class Search extends React.Component {

    state = {
        option: 'all',
        searchText: '',
        hideSift: true,
        hideSort: true
    };

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    toggleSift = (prop, val) => event => {
        this.setState({[prop]: !val});
    }

    render() {
        let {classes} = this.props;
        return (
            <div>
                <div className={classes.card}>
                    <Typography className={classes.sectiontitle}>
                        ASSESSEESS
                    </Typography>
                    <div>
                        <FormControl className={classes.formControl}>

                            <InputLabel htmlFor="searchText">Search</InputLabel>
                            <Input
                                id="searchText"
                                className={classes.textField}
                                value={this.state.searchText}
                                onChange={this.handleChange('searchText')}
                            />
                            <FormHelperText>Enter search text </FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="select-option"
                                select
                                className={classes.textField}
                                value={this.state.option}
                                onChange={this.handleChange('option')}
                                placeholder="Options"
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Select option"
                                margin="normal"
                            >
                                {options.map(option => (
                                    <MenuItem
                                        key={option.value}
                                        className={classes.options}
                                        value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div className={classes.subSectiontitle}
                                 onClick={this.toggleSift('hideSift', this.state.hideSift)}>
                                {this.state.hideSift ? <div className={classes.addIcon}>
                                    <AddIcon/>
                                </div> : null}
                                <span>SIFT</span>
                            </div>
                            {this.state.hideSift ? null : <SiftOptions classes={classes}/>}
                            <div className={classes.subSectiontitle}
                                 onClick={this.toggleSift('hideSort', this.state.hideSort)}>
                                {this.state.hideSort ? <div className={classes.addIcon}>
                                    <AddIcon/>
                                </div> : null}
                                <span>SORT</span>
                            </div>
                            {this.state.hideSort ? null : <SortOptions classes={classes}/>}
                        </FormControl>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Search);
