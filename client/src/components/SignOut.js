import React from 'react';
import { Navigate } from 'react-router-dom';

const SignOut = props => {
  if (localStorage.getItem('userTokenTime')) {
    localStorage.removeItem('userTokenTime');
  }
  return <Navigate to="/signin" />;
}

export default SignOut;