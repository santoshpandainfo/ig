import React from 'react';
import PropTypes from 'prop-types';
import Hidden from 'material-ui/Hidden';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';


class HeaderCard extends React.Component {
    render() {
        const {title, classes, index} = this.props;
        return (
            <div key={index} className={classes.headerNav}>

            </div>
        )

    }
}

class HeaderCardNew extends React.Component {
    render() {
        const {title, classes, key} = this.props;
        return (
                    <Tab label={title}/>
        )

    }
}

class HeaderCards extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const {classes} = this.props;

        let headerList = [
            'assessees',
            'assessments',
            'assignments',
            'associates'
        ];

        return (
            <Hidden mdDown>
                <div className={classes.headerNavOuter}>
                    {headerList.map( (item, index) =>
                            <HeaderCard classes={classes}
                                        title={item} key={index} index={index}/>
                    )}
                </div>
            </Hidden>
        )
    }
}

HeaderCards.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string
};

export default compose(withWidth())(HeaderCards);