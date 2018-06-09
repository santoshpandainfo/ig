import React from 'react';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog'
import Paper from 'material-ui/Paper';
import Clear from 'material-ui-icons/Clear';

class Details extends React.Component {

    render () {
        let {classes, label, children , show, handleDetailClose, flag} = this.props;
        return (
            <div className={classes.detailsContactContainer}>
                    <div>
                        <Dialog
                            open={show}
                            keepMounted
                            onClose={handleDetailClose(flag)}
                        >
                            <DialogTitle className={classes.popupHeader}>
                                <Paper>
                                    <div className={classes.popUpTitleContainerMid}>
                                        <div className={classes.PopHeaderTitle}>{label}</div>
                                        <IconButton><Clear className={classes.iconsPopupDefault}
                                                           onClick={handleDetailClose(flag)}/></IconButton>
                                    </div>
                                </Paper>
                            </DialogTitle>
                            <DialogContent className={classNames(classes.DiagContainer, classes.fixedDim)}>
                                <div className={classes.detailsContent}>
                                    {children}
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
            </div>
        )
    }
}

export default Details;