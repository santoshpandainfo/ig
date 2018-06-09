import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Clear from 'material-ui-icons/Clear';
import Divider from 'material-ui/Divider';
import Check from 'material-ui-icons/Check';
import Previous from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward'
import Badge from 'material-ui/Badge'
import Notifications from 'material-ui-icons/NotificationsActive'

class PopupComponent extends React.Component {

    handleClick = (action, optionList, passOptions, list, and) => () => passOptions ? action(this.props && this.props.optionList) : action()

    render() {
        const {
            classes,
            title,
            actionType,
            titleStyle,
            previousIcon,
            checkIcon,
            nextIcon,
            textOptions,
            iconOptions,
            optionList,
            onOpen,
            children,
            close,
            badge,
            badgeText,
            whiteIcons,
            whiteHeader,
            badgeStyle,
            passOptions,
            formCheckIcon,
            onSubmitForm,
            disableCheckIcon,
            noCloseIcon
        } = this.props

        return (

            <div>
            <Dialog
                open={onOpen}
                onClose={close}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                className={classes.parentDialogue}
            >
                <DialogTitle id="dialog-title" className={classes.popupHeaderTitle}>
                    <Paper>
                    <div className={classNames(classes.popupMainHeader, titleStyle ? titleStyle : classes.titleSolidBlue)}>
                        {badge ? <div className={classes.titleBox}><span className={classes.popupMainTitle}>{title}</span> <span className={classNames(classes.headerBadge, badgeStyle ? badgeStyle : "")}>{badgeText}</span></div>:
                            <div className={whiteHeader ? classes.whiteTitle : classes.titleBox}>{title}</div>
                        }
                        { previousIcon ? <div className={previousIcon} onClick={typeof actionType === 'function' ?
                            actionType : null}>
                            <IconButton>
                                <Previous className={whiteIcons ? classes.darkTitle: classes.popupClose} />
                            </IconButton>
                        </div>: checkIcon ? <div className={previousIcon} onClick={typeof actionType === 'function' ?
                            actionType : null}>
                            <IconButton>
                                <Check className={whiteIcons ? classes.darkTitle: classes.popupClose} />
                            </IconButton>
                        </div>:  nextIcon ? <div className={nextIcon} onClick={typeof actionType === 'function' ?
                            actionType : null}>
                            <IconButton>
                                <ArrowForward className={ classes.popupClose} />
                            </IconButton>
                        </div> :null}
                        {
                            formCheckIcon? <div className={previousIcon} disabled={disableCheckIcon?true:false} onClick={typeof onSubmitForm === 'function' ?
                            onSubmitForm : null}>
                            {(disableCheckIcon)?
                            <IconButton disabled={true} >                                
                                <Check  className={whiteIcons ? classes.darkTitle: classes.popupClose} />
                            </IconButton>:
                            <IconButton >                                
                                <Check  className={whiteIcons ? classes.darkTitle: classes.popupClose} />
                            </IconButton>
                            }
                        </div>:null
                        }
                        {
                            (noCloseIcon == true)?null:
                        <div className={classes.unitFlex}>
                            <IconButton onClick={close}>
                                <Clear
                                    className={whiteIcons ? classes.darkTitle : classes.popupClose}
                                />
                            </IconButton>
                        </div>
                        }
                    </div>
                    </Paper>
                </DialogTitle>
                <DialogContent className={classes.popupContent}>
                    <div id="dialog-description" className={classes.popupContent}>
                        {textOptions ?
                        <div className={textOptions}>
                            <div className={classes.tickOption}>
                            {optionList.map((option, index)=> (
                                <div key={index}>
                                <Button
                                        value={option.show}
                                        className={option.style}
                                        disabled={option.disabled}
                                        disableRipple={option.ripple}
                                        disableFocusRipple={option.focus}
                                        onClick={typeof option.action === 'function' ?
                                            this.handleClick(option.action, optionList, passOptions, optionList, this.state) : null}>
                                        {typeof option.show === 'object' ?
                                            <div>
                                                {option.show.value} &nbsp;
                                                <span className={badgeStyle}>
                                                    {option.show.type}
                                                </span></div> : option.show }
                                        {option.selected ?

                                        <IconButton className={classes.tick}>
                                            <Check className={classes.selectionIcon}/>
                                        </IconButton>
                                        : option.notify ?
                                                <Badge className={classes.badgeBox} style={{position:'inherit'}} badgeContent={99}>
                                                    <IconButton className={classes.notifyIcon}><Notifications className={classes.selectionIcon} /></IconButton>
                                                </Badge>:null
                                        }
                                </Button>
                                    {option.divider === 'light' ?
                                        <Divider light/> : option.divider === 'dark' ?
                                            <Divider/> : null
                                    }
                                </div>
                                ))}
                            </div>
                        </div> :
                            <div className={iconOptions}>
                                {children}
                            </div> }
                    </div>
                </DialogContent>
            </Dialog>
            </div>

        );
    }
}

export default (PopupComponent);