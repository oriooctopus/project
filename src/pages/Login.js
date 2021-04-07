import React, { Fragment, useContext } from 'react';
import { Link } from '@reach/router';

import { AuthContext } from '../AuthContext';

import { LoginForm } from '../legacyComponents/LoginForm';

export const Login = () => {
  const { activateAuth } = useContext(AuthContext);

  return (
    <div className="simple-page">
      <h1>Log in</h1>
      <LoginForm activateAuth={activateAuth} />
      <Link className="mt-5 d-block" to="/register">
        Don't have an account? <br />
        <span className="button primary">Register</span>
      </Link>
    </div>
  );
};
