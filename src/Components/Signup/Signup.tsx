// Signup.tsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../authSlice';
import { RootState } from '../../store';
import styles from "./Signup.module.css";
import { Helmet } from "react-helmet";

import HeaderLogo from "../../Assets/linkedin_header_logo.svg";
import GoogleLogo from "../../Assets/google_logo.svg"; 

import { useNavigate } from 'react-router-dom';
import AtomicFooterList from '../../Atoms/AtomicFooterList';




const Signup: React.FC = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
//   const error = useSelector((state: RootState) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
   
    dispatch(signup(email, password) as any).then(() => {
        // Successful signup, redirect to a different page
        navigate('/dashboard'); // Replace '/dashboard' with the desired page URL
      });
  };

  return (


<div className={styles.signup}>
            {/* Helmet is used for changing the title */}
            <Helmet>
                <title>Sign Up | LinkedIn</title>
            </Helmet>
            {/* Content div */}
            <div className={styles.signup__content}>
                <img src={HeaderLogo} alt="header logo"  className={styles.signup_header_logo}/>
                <form onSubmit={handleSignup}>
                <div className={styles.signup__center_content}>
                    <div className="font-sans font-bold text-xs sm:text-base md:text-lg lg:text-3xl xl:text-3xl" > Make the most of your professional life</div>
                    <div className={styles.signup__box_content}>
                        <label className={styles.input__label} htmlFor="email-or-phone">Email or 
                        phone number</label>
                        <input className={styles.input__input} required id="email-or-phone" 
                        type="text" name="email-or-phone"  value={email} onChange={handleEmailChange}/>
                        
                        <label className={styles.input__label} htmlFor="password">Password (6 or 
                        more characters)</label>
                    
                        <input className={styles.input__input} autoComplete="new-password" 
                        required id="password" type="password" name="password" placeholder="" 
                        value={password} onChange={handlePasswordChange}/>

                        <span className={styles.signup__agreement_span}>By clicking Agree &amp; 
                        Join, you agree to the LinkedIn <a target="_blank" rel="noopener 
                        noreferrer" href="https://www.linkedin.com/legal/user-agreement?
                        trk=registration-frontend_join-form-user-agreement"  >User Agreement</a>, 
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.
                        com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"  >Privacy Policy</a>,
                         and  <a href="https://www.linkedin.com/legal/cookie-policy?
                         trk=registration-frontend_join-form-cookie-policy" target="_blank" 
                         rel="noopener noreferrer" >Cookie Policy</a>. </span>

                        <button type="submit" id="join-form-submit" 
                        className={styles.form__form_body_submit_button} 
                        value="Agree &amp; Join" disabled={loading}>Agree &amp; Join</button>

                        <h2 className={styles.content__or_h2}><span 
                        className={styles.content__or_span}>or</span></h2>

                        <div className={styles.continue__google}>
                            <img src={GoogleLogo} alt="google logo"/>
                            <span>Continue with google</span>
                        </div>
                        
                        <div className={styles.main__sign_in_container}>Already on LinkedIn?&nbsp;

                        <a href="/login" className={styles.main__sign_in_link}> Sign in</a>
                        </div>
                    </div>
                    <p className={styles.page_help_link__text}>Looking to create a page for a 
                    business? <a href="https://www.linkedin.com/help/linkedin/answer/710?
                    trk=registration-frontend_join-form-page-help-link" 
                    className={styles.page_help_link__link} target="_blank" rel="noopener 
                    noreferrer">Get help</a></p>
                </div>
                </form>
            </div>   {/* End of content */}
              <div className='absolute bottom-0 bg-white w-screen h-[900px]'>
            <AtomicFooterList/>
              </div>
        </div>
  );
};

export default Signup;
