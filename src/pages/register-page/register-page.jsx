import React, { useState } from 'react';
import './register-page.style.scss';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FormInput from '../../components/form-input/form-input.somponent';

function RegisterPage() {
    const defaultFormFields = {
        email: '',
        name: '',
        password: '',
        gender: '',
    };

    const defaultFormErrors = {
        emailError: '',
        nameError: '',
        passwordError: '',
        genderError: '',
    };

    const [formInputs, setFormInputs] = useState(defaultFormFields);
    const [formErrors, setFormErrors] = useState(defaultFormErrors);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }

    const submitHandler = async (e) => {}

    return (
        <div className='register-page'>
            <div className="register-page-main">
                <div className="login-options">
                    <h1>Sign up for free to start listening.</h1>

                    <button type='button' className='signup-button facebook'>
                        <div className="button-icon">
                            <FacebookRoundedIcon />
                        </div>
                        <p>Sign up with Facebook</p>
                    </button>

                    <button type='button' className='signup-button google'>
                        <div className="button-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="logo" />
                        </div>
                        <p>Sign up with Google</p>
                    </button>

                    <div className='divider'>
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                </div>

                <form action="" className="signup-form">
                    <FormInput 
                        labelText="What's your email?" 
                        inputType='text' 
                        errorText={formErrors.emailError} 
                        inputOptions={{
                            placeholder: 'Enter your email.',
                            type: 'email',
                            id: 'email',
                            name: 'email',
                            onChange: changeHandler,
                            value: formInputs.email,
                        }}
                    />

                    <FormInput 
                        labelText='Create a password' 
                        inputType='text' 
                        errorText={formErrors.passwordError} 
                        inputOptions={{
                            placeholder: 'Create a password.',
                            type: 'password',
                            id: 'password',
                            name: 'password',
                            onChange: changeHandler,
                            value: formInputs.password
                        }}
                    />

                    <FormInput 
                        labelText='What should we call you?' 
                        inputType='text' 
                        errorText={formErrors.nameError} 
                        inputOptions={{
                            placeholder: 'Enter a profile name.',
                            type: 'text',
                            id: 'name',
                            name: 'name',
                            onChange: changeHandler,
                            value: formInputs.name
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;
