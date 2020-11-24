import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {setViewerToken} from '../ViewerReducer';
import API from "../../../utils/API";
// The Field components job is to render out input html
// and pass down functions for updating the state
// as well as check to see if the values being passed are valid
// and it will do this by passing down props to the component they render
// nombre de usuario
// gebruiksnaam
// const TextFieldInput = ({ input, meta, label }) => {
//   console.log(meta);
//   // console.log('FIELD COMPONENT PROPS', props);
//   return <TextField
//     {...input}
//     label={ language === 'Dutch' ? 'gebruiksnaam':'nombre de usuario'}
//     // label={label}
//   />;
// };

const TextFieldInput = ({input, meta, label}) => {
    // console.log('FIELD COMPONENT PROPS', props);
    return <TextField
        {...input}
z        label={label}
    />;
};

const PasswordFieldInput = ({input, meta, label}) => {
    // console.log('FIELD COMPONENT PROPS', props);
    return <TextField
        {...input}
        type='password'
        label={label}
    />;
};

// What Redux form does for us
// It will write the functions for updating form state
// It will also write state to determine the current state of each field
// It also gives us a function for getting the values out of the input
// and then putting it in out submit function

//what handleSubmit will do is pass the forms Values as the first parameter
// handleSubmit also preventsDefault for us right away
// to the function that it's calling
class SignUp extends Component {
    handleSignUp = async (formValues) => {
        console.log(formValues);
        //{ username: 'Your enterereduseRName', password: 'your password' }
        const res = await API.doSignUp(formValues);
        try {
            console.log('I AM THE SIGNUP USERS TOKEN', res.data);
            localStorage.setItem('token', res.data);
            this.props.setViewerToken(res.data);
            this.props.history.push('/');
            // sessionStorage.setItem('token', res.data);
        } catch (e) {
            throw new Error(e);
        }
    };

    render() {
        console.log(this.props);
        const {handleSubmit} = this.props;
        return (
            <div


                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                <form noValidate autoComplete="off">
                    <Field
                        name='username'
                        label='Username'
                        component={TextFieldInput}
                    />
                    <Field
                        name='password'
                        label='Password'
                        component={PasswordFieldInput}
                    />
                    <Button
                        onClick={handleSubmit(this.handleSignUp)}
                        variant="contained"
                        style={{backgroundColor: '#4f3558', color: '#fff'}}>
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {superman: state.viewer};
}

export const WrappedSignUp = compose(
    reduxForm({form: 'signUpForm'}),
    connect(mapStateToProps, {setViewerToken})
)(SignUp);
