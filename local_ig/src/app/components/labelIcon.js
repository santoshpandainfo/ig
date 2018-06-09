import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import {InputLabel} from 'material-ui/Input';
import Button from 'material-ui/Button';

class LabelIcon extends React.Component {
    render() {
        const {
            classes,
            inputLabel,
            actions,
            children,
            iconMainStyle,
            iconButtonStyle,
            iconLabelStyle,
            expandedClass,
            disabled
        } = this.props

        return (
            <div className={classes.mbPager}>
                <div className={iconMainStyle ? iconMainStyle : classes.iconBoxFooter} onClick={typeof actions === 'function' ?
                    actions : null}>
                    <Button variant="fab" mini color="#fff" disabled={disabled} className={classNames((iconButtonStyle ?
                        iconButtonStyle : classes.iconsFooterDefault),expandedClass)}> {children}</Button>
                    <InputLabel className={iconLabelStyle ?
                        iconLabelStyle : classes.iconsFooterLabelDefault}>{inputLabel}</InputLabel>
                </div>
            </div>
        );
    }
}

export default (LabelIcon);