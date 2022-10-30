import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import validator from 'validator';
import { removeError, setError } from '../../action/ui'
import { startRegisterWithEmailPasswordName } from '../../action/auth';



export const RegisterScreen = () => {

  const [ formValues, handleImputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui )

  const { email, password, name, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if ( isFormValid() ){
      dispatch( startRegisterWithEmailPasswordName( email, password, name) );
    }
  }

  const isFormValid = () => {

    if ( name.trim().length === 0 ){
      dispatch( setError('Name is required'));
      return false;
    } else if( !validator.isEmail(email)){
      dispatch( setError('Email is not valid'));
      return false;
    }else if( password !== password2 || password.length < 5 ){
      dispatch( setError('Password should be at least 6 characters and match'));
      return false;
    }else{
      dispatch( removeError() );

    }

  
    return true;

  }
  
  return (
      <div className='animate__animated animate__pulse'>
            <p className='auth__title'>Create your Free Account</p>
            <form onSubmit={ handleRegister }>

              {
                msgError && (
                  <div className='auth__alert-error'>
                  <span>
                  <i className="fas fa-exclamation-triangle"></i>
                  </span>
                  {msgError}
                  </div>
                )
              }
              
            <input
                type="text"
                placeholder='Name'
                name="name"
                className='auth__input'
                autoComplete='off'

                value={ name }
                onChange={ handleImputChange }
              />

              <input
                type="text"
                placeholder='Email'
                name="email"
                className='auth__input'
                autoComplete='off'
                
                value={ email }
                onChange={ handleImputChange }
              />

              <input
                type="password"
                placeholder='Password'
                name="password"
                className='auth__input password'

                value={ password }
                onChange={ handleImputChange }
              />
              <input
                type="password"
                placeholder='Confirm password'
                name="password2"
                className='auth__input password'

                value={ password2 }
                onChange={ handleImputChange }
              />

              <button
                className='btn-primary'
                type='submit'
                onClick={ handleRegister }

                
              >Continue
              </button>
            </form>

            

            <Link 
              className='link auth__link'
              to="/auth/login"
            > Already registered? </Link>

        </div>
    ) 
};
