import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { setViewerToken } from '../ViewerReducer';
import API from "../../../utils/API";

const TextFieldInput = ({ input, meta, label }) => {
    // console.log('FIELD COMPONENT PROPS', props);
    return <TextField
        {...input}
        z label={label}
    />;
};

const PasswordFieldInput = ({ input, meta, label }) => {
    // console.log('FIELD COMPONENT PROPS', props);
    return <TextField
        {...input}
        type='password'
        label={label}
    />;
};

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
        const { handleSubmit } = this.props;
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
                        style={{ backgroundColor: '#4f3558', color: '#fff' }}>
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { superman: state.viewer };
}

export const WrappedSignUp = compose(
    reduxForm({ form: 'signUpForm' }),
    connect(mapStateToProps, { setViewerToken })
)(SignUp);
