import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { close } from './loginFormSlice';

function LoginForm() {

  const dispatch = useDispatch();

  const [showPwd, setShowPwd] = useState(false);
  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const openEye = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 442.04 442.04">
    <path d="M221.02 341.304c-49.708 0-103.206-19.44-154.71-56.22-38.502-27.494-62.266-54.733-63.259-55.881a12.5 12.5 0 0 1 0-16.367c.993-1.146 24.756-28.387 63.259-55.881 51.505-36.777 105.003-56.219 154.71-56.219 49.708 0 103.207 19.441 154.71 56.219 38.502 27.494 62.266 54.734 63.259 55.881a12.5 12.5 0 0 1 0 16.367c-.993 1.146-24.756 28.387-63.259 55.881-51.503 36.779-105.001 56.22-154.71 56.22zM29.638 221.021c9.61 9.799 27.747 27.03 51.694 44.071 32.83 23.361 83.714 51.212 139.688 51.212s106.859-27.851 139.688-51.212c23.944-17.038 42.082-34.271 51.694-44.071-9.609-9.799-27.747-27.03-51.694-44.071-32.829-23.362-83.714-51.212-139.688-51.212s-106.858 27.85-139.688 51.212c-23.944 17.038-42.082 34.269-51.694 44.071z"/>
    <path d="M221.02 298.521c-42.734 0-77.5-34.767-77.5-77.5s34.766-77.5 77.5-77.5a77.436 77.436 0 0 1 51.048 19.188c5.193 4.549 5.715 12.446 1.166 17.639-4.549 5.193-12.447 5.714-17.639 1.166a52.448 52.448 0 0 0-34.576-12.993c-28.949 0-52.5 23.552-52.5 52.5s23.551 52.5 52.5 52.5c28.95 0 52.5-23.552 52.5-52.5 0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5c.002 42.733-34.765 77.5-77.499 77.5z"/>
    <path d="M221.02 246.021c-13.785 0-25-11.215-25-25s11.215-25 25-25c13.786 0 25 11.215 25 25s-11.214 25-25 25z"/>
  </svg>
  const closedEye = <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 122.88 53.37">
    <path d="M1.05 7.37a4.49 4.49 0 1 1 6.88-5.76 114.61 114.61 0 0 0 14.88 15C35.48 27 48.63 32.25 61.67 32.24s26.12-5.24 38.7-15.75a112.38 112.38 0 0 0 14.57-14.85 4.48 4.48 0 0 1 6.92 5.69 129.09 129.09 0 0 1-10 10.85l5.91 5.42a4.47 4.47 0 1 1-6 6.6l-6.59-6a86.1 86.1 0 0 1-13.43 9.06l3.73 8A4.48 4.48 0 0 1 87.35 45l-3.74-8a61.24 61.24 0 0 1-17.56 4v7.9a4.48 4.48 0 0 1-8.95 0V41a61.75 61.75 0 0 1-17.52-4l-3.76 8a4.48 4.48 0 1 1-8.11-3.79l3.74-8A88.78 88.78 0 0 1 18 24.2l-6.55 6a4.47 4.47 0 1 1-6-6.6l5.83-5.34A130.63 130.63 0 0 1 1.05 7.37Z"/>
  </svg>

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Вход в систему</h1>
        <div className={styles.fields_wrapper}>
          <label className={styles.field_name} htmlFor='login'>
            Имя пользователя
            <input className={styles.field} type='text' id='login' name='login' value={login} onChange={(e) => {setLogin(e.target.value)}} />
            <p className={styles.errorMessage}>Пользователь не существует</p>
          </label>
          <label className={styles.field_name} htmlFor='pwd'>
            Пароль
            <input className={styles.field} type={showPwd ? 'text' : 'password'} id='pwd' name='pwd' value={pwd} onChange={(e) => {setPwd(e.target.value)}} />
            <button className={styles.showPasswordButton} onClick={(e) => {e.preventDefault(); setShowPwd(!showPwd)}}>
              {showPwd ? openEye : closedEye}
            </button>
            <p className={styles.errorMessage}>Неверный пароль</p>
          </label>
        </div>
        <div className={styles.buttons_wrapper}>
          <input className={styles.accept_button} type='submit' value='Войти' onClick={(e) => {e.preventDefault()}} />
          <button className={styles.reject_button} onClick={(e) => {e.preventDefault(); dispatch(close())}}>Отмена</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
