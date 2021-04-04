import React, { Fragment, useContext } from 'react';
import { Link } from '@reach/router';

import { AuthContext } from '../AuthContext';

import { PageTitle } from '../legacyComponents/PageTitle';
import { LoginForm } from '../legacyComponents/LoginForm';

export const Login = () => {
  const { activateAuth } = useContext(AuthContext);

  return (
    <Fragment>
      <PageTitle text="Log in" />
      <LoginForm activateAuth={activateAuth} />
      <Link className="text-light font-weight-light" to="/register">
        Don't have an account?{' '}
        <span role="img" aria-label="Winking Face">
          😉
        </span>
      </Link>
    </Fragment>
  );
};
