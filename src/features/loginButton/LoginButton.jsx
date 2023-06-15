import React from 'react';
import styles from './LoginButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../loginForm/LoginForm';
import { open } from '../loginForm/loginFormSlice';

function LoginButton() {
  const dispatch = useDispatch();
  const loginFormIsOpen = useSelector(state => state.loginForm.isOpen);
  return (
    <>
      <div className={styles.loginButton}>
        <button className={styles.button} onClick={(e) => {e.preventDefault(); dispatch(open());}}>
          <svg width="30" height="30" viewBox="0 0 24 24" 
              fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.217 19.332A6.982 6.982 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" className={styles.svg} />
          </svg>
        </button>
        <p className={styles.tip}>Войти</p>
      </div>
      {
        loginFormIsOpen && <LoginForm />
      }
    </>
  );
}

export default LoginButton;
