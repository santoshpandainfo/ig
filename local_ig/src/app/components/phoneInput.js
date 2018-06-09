import React from 'react';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        fontSize: '1.6rem',
        padding: '0.5em 0em',
        margin:'8px 0'
    },
});

class TextMaskCustom extends React.Component {
    render() {
        return (
            <MaskedInput
                {...this.props}
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholderChar={'\u2000'}
                showMask
            />
        );
    }
}

class PhoneInput extends React.Component {
    state = {
        textmask: '(122) 234-4366    '
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, phone } = this.props;

        let phoneNumber = phone ? phone : 'Not found';

        return (
            <div className={classes.container}>
                <Input
                    value={phoneNumber}
                    disableUnderline={true}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />

            </div>
        );
    }
}

PhoneInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhoneInput);