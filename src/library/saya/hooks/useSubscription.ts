import { useState, useContext } from 'react';
import axios from 'axios';
import useStateWithError from './useStateWithError';
import { isValidEmail } from '../../utils/validators';
import { SubscriptionContext } from '../contexts/subscriptionContext';

export type HandleSubmit = (email : string) => Promise<any>;

export default (handleSubmit : HandleSubmit) : SubscriptionContext =>  {
  const [email, setEmailRaw, emailError, setEmailError] = useStateWithError<string, string>('');
  const [checked, setCheckedRaw, checkedError, setCheckedError] = useStateWithError<boolean, string>(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setEmail = (email: string) => {
    setEmailRaw(email);
    setSuccessMessage('');
    setErrorMessage('');
  };
  const setChecked = (checked : boolean) => {
    setCheckedRaw(checked);
    setSuccessMessage('');
    setErrorMessage('');
  };

  console.log('successMessage, errorMessage :', successMessage, errorMessage);
  return {
    email,
    setEmail,
    checked,
    setChecked,
    successMessage,
    errorMessage,
    emailErrorMessage: emailError || '',
    checkErrorMessage: checkedError || '',
    onSubmit: () => {
      let errorOccurred = false;
      if (!isValidEmail(email)) {
        errorOccurred = true;
        setEmailError('Invalid e-mail address.');
      }

      if (!checked) {
        errorOccurred = true;
        setCheckedError('This field is required.');
      }

      if (errorOccurred) {
        return ;
      }

      handleSubmit(email)
      .then(() => {
        setEmail('');
        setSuccessMessage('Thanks for subscribing!');
      })
      .catch(() => {
        setErrorMessage('Service is currently unavailable, please try again later.');
      });
    },
  };
};
