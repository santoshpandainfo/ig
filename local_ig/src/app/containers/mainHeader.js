import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import {connect} from 'react-redux'

import NavListItems from './navListItems'
import IGMenu from '../components/menu'
import HeaderCards from '../components/headerNav'
import UserAccountCards from '../components/userCards'
import GlobalStyles from './globalStyles'
import SearchSection from '../components/userSearchSection'
import {currentUser} from '../constants/defaultConfigs'
import Login from '../containers/login'
import ForgotCredential from '../containers/forgotCredentials'
import {
    getEntities,
    searchUserAccounts,
    endSearchListing,
    setEntityGroups,
    setEntityRoles,
    showEntityGroups,
    showEntityRoles,
    setEntityGroupUsers,
    setEntityRoleUsers,
    selectUserAccount,
    updateFlag,
    setCreateMode,
    unselectUserAccount,
    setMeasureCardCount,
    toggleDeveloperMode,
    toggleAssesseeMobile,
    toggleMiddlePane,
    viewCurrentUser,
    closeDeveloperMode,
    setUserAuthenticated,
    setUserEntity,
    manageForgotPassword,
    currentFlagMode,
    updateSelect,
    closeMiddlePane,
    setSwitch,
    setCreateAssesseeMode,
    closeCreateAssesseeMode,
    setCreateAssesseeLeftPanel,
    signOutUser,
    resetAssesseePasswordAuth,
    tagLoginSuccessful,
    toggleRightPane,
    createAssesseesAccount
} from "../igactions/actions"
import {
    getUser,
    getSearch,
    getAttributes,
    getView,
    getAuthenticate
} from '../igreducers/igreducer'

class LeftPanelHeader extends React.Component {
    render() {

        const {classes} = this.props;

        return (
            <div>

            </div>
        )
    }
}

class MainHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleLeftDisplay = this.handleLeftDisplay.bind(this);
    }

    state = {
        open: false,
        top: false,
        leftDisplay: 'assessee',
        leftTaggedDisplay: '',
        leftTagged: {
            calculator: {
                'calculator basic': 'inactive',
                'calculator business': 'inactive',
                'calculator financial': 'inactive',
                'calculator scientific': 'inactive',
            },
            manuscript: {
                'assessment': 'inactive'
            },
            toolkit: {
                'template': 'inactive',
                'gauge': 'inactive'
            },
            worksheet: {
                'google spreadsheet': 'inactive',
                'google textsheet': 'inactive',
                'microsoft spreadsheet': 'inactive',
                'microsoft textsheet': 'inactive'
            }
        }
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    getName(account) {
        if (!account.informationBasic) return 'No Name';

        let name = account.informationBasic;
        let nameValue = '';
        nameValue += name.nameFirst && name.nameFirst !== null ? name.nameFirst : '';
        nameValue += name.nameOther && name.nameOther !== null ? ' ' + name.nameOther : '';
        nameValue += name.nameLast  && name.nameLast  !== null ? ' ' + name.nameLast : '';
        return nameValue;
    }

    getEmail(account) {
        if (!account) return 'Downloading';

        const getPrimaryEmail = emailList => emailList.find(email => email.assign === 'email1').email

        return account.email ?
            account.email : account.ContactInformation && account.ContactInformation.email ?
            getPrimaryEmail(account.ContactInformation.email) : 'Downloading'
    }

    setToLeft = f => () => {
        f('left');
        this.handleLeftDisplay('assessee')();
        this.props.unselectUserAccount();
    }

    setLeftTag = (map, tag, close) => {
        for (let key of Object.keys(map)) {
            if (map[key] && map[key][tag]) map[key][tag] = close ? 'inactive': 'active';
        }
        return map
    }

    handleLeftDisplay = (val, close) => () => {
        const tagList = [
            'calculator basic',
            'calculator business',
            'calculator financial',
            'calculator scientific',
            'assessment',
            'google spreadsheet',
            'google textsheet',
            'microsoft spreadsheet',
            'microsoft textsheet'
        ]
        this.setState({'leftDisplay': close ? 'assessee' : val})
        this.setState({'leftTaggedDisplay': tagList.findIndex( tag => tag === val) !== -1 ?
            val : this.state.leftTaggedDisplay})
        this.setState({'leftTagged': this.setLeftTag(this.state.leftTagged, val, close)})
        if (close) this.setState({'leftTaggedDisplay': 'assessee'})
    }

    render() {
        console.log("----MainHead-----");
        console.log(this.props);        
        const {classes, theme, search, accounts, entity, authenticate} = this.props;

        let currentList = search.showSearch ?
            search.userAccounts : this.props.accounts;

        let selectedUser = this.props && this.props.currentUser ?
            this.props.currentUser.selectedUser : {};

        let currentEntity = entity && entity.entityAccount ?
            entity.entityAccount._id : null;

        let detailType = {
            detailType: this.props.detailType,
            isCreate  : this.props.isCreate,
            mode: this.props.mode
        }

        return (
            <div style={{height:'100%'}}>
            {!authenticate ?
            <div>Loading...</div> : authenticate && !authenticate.loggedIn && authenticate.forgot ?
                 <ForgotCredential/> : authenticate && !authenticate.loggedIn ?
                 <Login
                     authenticate={authenticate}
                     tagLoginSuccessful={this.props.tagLoginSuccessful}
                     getEntities={this.props.getEntities}
                     forgotPassword={this.props.manageForgotPassword}
                     classes={classes}
                     setUserAuthenticated={this.props.setUserAuthenticated}/> : authenticate && authenticate.loggedIn ?
            <div className={classes.root}>
                <div className={classes.appFrame}>

                    <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open}>
                            <div className={classes.logoDiv}>
                                <Button disableRipple={true}
                                        className={classes.logoButton}
                                        onClick={this.setToLeft(this.props.toggleAssesseeMobile)}>
                                    <img className={classes.logoImg} src="resources/images/iglogo1.png"/>
                                </Button>

                            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                                <div
                                    className={classes.drawerInner}
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('left', false)}
                                    onKeyDown={this.toggleDrawer('left', false)}
                                >
                                    <LeftPanelHeader classes={classes}/>
                                </div>
                                <div className={classes.leftPanelProfile}>
                                <SearchSection
                                    view={this.props.view}
                                    unselectUserAccount={this.props.unselectUserAccount}
                                    userDetail={this.props.detailType}
                                    closeMiddlePane={this.props.closeMiddlePane}
                                    setSwitch={this.props.setSwitch}
                                    classes={classes}
                                    card={this.props.selectedUserAccount}
                                    selectUserAccount={this.props.selectUserAccount}
                                    selectedEntity={this.props.selectedEntity}
                                    toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                    authenticate={authenticate}
                                    toggleMiddlePane={this.props.toggleMiddlePane}
                                    viewCurrentUser={this.props.viewCurrentUser}
                                />
                                </div>
                                <div className={classes.NavlistMenu}>{
                                    <NavListItems
                                        classes={classes}
                                        countries={this.props.countries}
                                        endSearch={this.props.endSearch}
                                        view={this.props.view}
                                        setSwitch={this.props.setSwitch}
                                        setEntityRoles={this.props.setEntityRoles}
                                        currentEntity={this.props.currentEntity}
                                        setEntityGroups={this.props.setEntityGroups}
                                        toggleMiddlePane={this.props.toggleMiddlePane}
                                        viewCurrentUser={this.props.viewCurrentUser}
                                        toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                                        toggleDeveloperMode={this.props.toggleDeveloperMode}
                                        closeDeveloperMode={this.props.closeDeveloperMode}
                                        setCreateMode={this.props.setCreateMode}
                                        setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                                        closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                                        setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                                        isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                                        createAssesseePanel={this.props.createAssesseePanel}
                                        selectUserAccount={this.props.selectUserAccount}
                                        createAssesseesAccount={this.props.createAssesseesAccount}
                                />}</div>

                            </Drawer>
                            <Typography className={classes.header} type="title" color="inherit" noWrap>
                                <HeaderCards classes={classes}/>
                            </Typography>
                            </div>
                            <div className={classes.accountDiv}>
                                <IGMenu classes={classes}
                                    resetAssesseePasswordAuth = {this.props.resetAssesseePasswordAuth}
                                    signOutUser={this.props.signOutUser}
                                    currentEntity={this.props.selectedEntity}
                                    userName={this.getName(this.props.authenticate && this.props.authenticate.currentUser)}
                                    userEmail={this.getEmail(this.props.authenticate && this.props.authenticate.currentUser)}
                                />
                            </div>
                        </Toolbar>
                    </AppBar>

                    <UserAccountCards
                        classes={classes}
                        countries={this.props.countries}
                        accounts={currentList}
                        selectedUserAccount={this.props.selectedUser}
                        endSearch={this.props.endSearchListing}
                        doSearch={this.props.searchUserAccounts}
                        showEntityRoles={this.props.showEntityRoles}
                        setEntityRoles={this.props.setEntityRoles}
                        showEntityGroups={this.props.showEntityGroups}
                        setEntityGroups={this.props.setEntityGroups}
                        search={this.props.search}
                        attributes={this.props.attributes}
                        currentEntity={currentEntity}
                        selectedEntity={this.props.selectedEntity}
                        setEntityGroupUsers={this.props.setEntityGroupUsers}
                        setEntityRoleUsers={this.props.setEntityRoleUsers}
                        selectUserAccount={this.props.selectUserAccount}
                        selectedUser={this.props.currentUser}
                        detailType={detailType}
                        updateFlag={this.props.updateFlag}
                        isCreate={this.props.isCreate}
                        view={this.props.view}
                        toggleAssesseeMobile={this.props.toggleAssesseeMobile}
                        toggleDeveloperMode={this.props.toggleDeveloperMode}
                        toggleMiddlePane={this.props.toggleMiddlePane}
                        viewCurrentUser={this.props.viewCurrentUser}
                        setMeasureCardCount={this.props.setMeasureCardCount}
                        closeDeveloperMode={this.props.closeDeveloperMode}
                        leftDisplay={this.state.leftDisplay}
                        leftTaggedDisplay={this.state.leftTaggedDisplay}
                        leftTagged={this.state.leftTagged}
                        handleLeftDisplay={this.handleLeftDisplay}
                        unselectUserAccount={this.props.unselectUserAccount}
                        setUserAuthenticated={this.props.setUserAuthenticated}
                        authenticate={this.props.authenticate}
                        setUserEntity={this.props.setUserEntity}
                        currentFlagMode={this.props.currentFlagMode}
                        updateSelect = {this.props.updateSelect}
                        closeMiddlePane={this.props.closeMiddlePane}
                        setSwitch={this.props.setSwitch}
                        setCreateMode={this.props.setCreateMode}
                        setCreateAssesseeMode={this.props.setCreateAssesseeMode}
                        closeCreateAssesseeMode={this.props.closeCreateAssesseeMode}
                        setCreateAssesseeLeftPanel={this.props.setCreateAssesseeLeftPanel}
                        isCreateAssesseeMode={this.props.isCreateAssesseeMode}
                        createAssesseePanel={this.props.createAssesseePanel}
                        toggleRightPane={this.props.toggleRightPane}
                        createAssesseesAccount={this.props.createAssesseesAccount}
                   />
                </div>
            </div> : null }
            </div>
        );
    }
}

MainHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    getEntities: PropTypes.func.isRequired,
    searchUserAccounts: PropTypes.func.isRequired,
    endSearchListing: PropTypes.func.isRequired,
    setEntityGroups: PropTypes.func.isRequired,
    setEntityRoles: PropTypes.func.isRequired,
    showEntityGroups: PropTypes.func.isRequired,
    showEntityRoles: PropTypes.func.isRequired,
    setEntityRoleUsers: PropTypes.func.isRequired,
    setEntityGroupUsers: PropTypes.func.isRequired,
    selectUserAccount: PropTypes.func.isRequired,
    updateFlag: PropTypes.func.isRequired,
    setCreateMode: PropTypes.func.isRequired,
    toggleAssesseeMobile: PropTypes.func.isRequired,
    toggleDeveloperMode: PropTypes.func.isRequired,
    toggleMiddlePane: PropTypes.func.isRequired,
    viewCurrentUser: PropTypes.func.isRequired,
    setMeasureCardCount: PropTypes.func.isRequired,
    closeDeveloperMode: PropTypes.func.isRequired,
    unselectUserAccount: PropTypes.func.isRequired,
    setUserAuthenticated: PropTypes.func.isRequired,
    setUserEntity: PropTypes.func.isRequired,
    currentFlagMode:PropTypes.func.isRequired,
    updateSelect: PropTypes.func.isRequired,
    manageForgotPassword: PropTypes.func.isRequired,
    closeMiddlePane: PropTypes.func.isRequired,
    setSwitch: PropTypes.func.isRequired,
    signOutUser: PropTypes.func.isRequired,
    setCreateAssesseeMode:PropTypes.func.isRequired,
    closeCreateAssesseeMode:PropTypes.func.isRequired,
    setCreateAssesseeLeftPanel:PropTypes.func.isRequired,
    resetAssesseePasswordAuth:PropTypes.func.isRequired,
    tagLoginSuccessful: PropTypes.func.isRequired,
    toggleRightPane: PropTypes.func.isRequired,
    createAssesseesAccount: PropTypes.func.isRequired,    
};

const mapStateToProps = (state) => ({
    ...state,
    ...getUser(state),
    ...getSearch(state),
    ...getAttributes(state),
    ...getView(state),
    ...getAuthenticate(state)
});

export default withStyles(
    GlobalStyles, {withTheme: true})(
    connect(
        mapStateToProps,
        {
            getEntities,
            searchUserAccounts,
            endSearchListing,
            setEntityGroups,
            setEntityRoles,
            showEntityGroups,
            showEntityRoles,
            setEntityGroupUsers,
            setEntityRoleUsers,
            selectUserAccount,
            updateFlag,
            setCreateMode,
            toggleDeveloperMode,
            toggleAssesseeMobile,
            toggleMiddlePane,
            viewCurrentUser,
            setMeasureCardCount,
            closeDeveloperMode,
            unselectUserAccount,
            setUserAuthenticated,
            setUserEntity,
            currentFlagMode,
            updateSelect,
            manageForgotPassword,
            closeMiddlePane,
            setSwitch,
            signOutUser,
            setCreateAssesseeMode,
            closeCreateAssesseeMode,
            setCreateAssesseeLeftPanel,
            resetAssesseePasswordAuth,
            tagLoginSuccessful,
            toggleRightPane,
            createAssesseesAccount
        }
    )(MainHeader));