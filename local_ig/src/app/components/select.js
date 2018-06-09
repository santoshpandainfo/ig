import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Divider from 'material-ui/Divider';

const solidGrey = '#808080';
const styles = theme => ({
    FormBoxComponent:{
        width: '100%'
    },
    profileDropdown: {
        fontSize: '1.6rem'
    },
    topLabelFont: {
        fontSize:'1.4rem'
    },
    textField: {
        fontSize: '1.6rem'
    }
});

class IGSelect extends React.Component {
    state = {
        show: ''
    };

    handleChange = (select,onchange) => event => {
        this.setState({ [select]: event.target.value });
        if(typeof onchange === 'function') onchange(event);
    };
    render() {
        let { classes, list, label, id, onChange,defaultValue } = this.props;
        return (
            <form  autoComplete="off">
                <div >
                    <FormControl className={classes.FormBoxComponent}>
                        <InputLabel   htmlFor={(id)?id:'ig-select-' + label.toLowerCase()} >{label}</InputLabel>
                        <Select
                            id={(id)?id:'ig-select-' + label.toLowerCase()}
                            className={classes.textField}
                            value={(defaultValue)?defaultValue:this.state.show}
                            onChange={this.handleChange('show',onChange)}
                            fullWidth
                            InputProps={{
                                classes: {
                                    underline: classes.inputFloatingLabelUnderline,
                                    },
                                }}
                                InputLabelProps={{
                                FormLabelClasses:{
                                    root: classes.inputFloatingLabel,
                                    focused: classes.inputFloatingLabelFocused,
                                }
                                }}  
                        >
                            {list.map((option, index) => (
                                (option === 'divider')?
                                <Divider light />   : 
                                <MenuItem key={index} value={(option === 'none')?null:option} className={classes.profileDropdown}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </form>
        );
    }
}

IGSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IGSelect);