import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../authSlice';
import { RootState } from '../../../store';
import styles from "./Signup.module.css";
import HeaderLogo from "../../../Assets/linkedin_header_logo.svg";
import GoogleLogo from "../../../Assets/google_logo.svg";
import { useNavigate } from 'react-router-dom';
import AtomicInput from "../../Atoms/AtomicInput";
import AtomicLabel from '../../Atoms/AtomLabel';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

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
    dispatch(signup(email, password) as any).then(() => {
      navigate('/feed');
    });
  };

  return (


    <div className={styles.signup}>
      <HelmetProvider>
        <Helmet>
          <title>Sign Up | LinkedIn</title>
        </Helmet>
      </HelmetProvider>
      <div className="bg-f3f2ee overflow-y-scroll h-screen relative flex flex-col">
        <img src={HeaderLogo} alt="header logo" className="h-8 mt-20 ml-20" />
        <form onSubmit={handleSignup}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-sans font-bold text-xs sm:text-base md:text-lg lg:text-3xl xl:text-3xl mt-5 mb-5" >
              Make the most of your professional life
            </div>
            <div className="bg-white h-auto rounded-10px flex flex-col pb-30px mt-50px w-full md:w-1/2 lg:w-1/3">
              <AtomicLabel
                className="font-bold mt-20px ml-20px mb-10px text-12px text-black-60 mt-5 ml-6"
                htmlFor="email-or-phone"
                id={'email-or-phone-label'}
                label='Email' />
              <AtomicInput
                value={email}
                id={"email-or-phone"}
                type={'email'}
                error={''}
                hideValue={false}
                onChange={handleEmailChange}
                isRequired={true}
                className='mt-2 h-10 rounded-5px border border-solid border-lightgray w-11/12 m-auto'
              />
              <AtomicLabel
                className="font-bold mb-10px text-12px text-black-60 mt-2 ml-6"
                htmlFor="password"
                id={'email-or-phone-label'}
                label='Password (6 or more characters)'
              />
              <AtomicInput
                value={password}
                id={"new-password"}
                type={'password'}
                error={''}
                hideValue={false}
                onChange={handlePasswordChange}
                isRequired={true}
                className='mt-2 h-30px h-10 rounded-5px border border-solid border-lightgray w-11/12 m-auto'
              />
              <span className={styles.signup__agreement_span}>By clicking Agree &amp;
                Join, you agree to the LinkedIn <a href='https://www.linkedin.com'>User Agreement</a>,
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.
                        com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"  >Privacy Policy</a>,
                and  <a href="https://www.linkedin.com/legal/cookie-policy?
                         trk=registration-frontend_join-form-cookie-policy" target="_blank"
                  rel="noopener noreferrer" >Cookie Policy</a>. </span>

              <button type="submit" id="join-form-submit"
                className={styles.form__form_body_submit_button}
                value="Agree &amp; Join" disabled={loading}>Agree &amp;Join</button>

              <h2 className={styles.content__or_h2}><span
                className={styles.content__or_span}>or</span></h2>

              <div className={styles.continue__google}>
                <img src={GoogleLogo} alt="google logo" />
                <span>Continue with google</span>
              </div>

              <div className={`${styles.main__sign_in_container}`} style={{ marginBottom: '15.9px' }}>Already on LinkedIn?&nbsp;

                <a href="/login" className={styles.main__sign_in_link}> Sign in</a>
              </div>
            </div>
            <p className={styles.page_help_link__text}>Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/710?trk=registration-frontend_join-form-page-help-link"
              className={styles.page_help_link__link} target="_blank" rel="noopener noreferrer">Get help</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
