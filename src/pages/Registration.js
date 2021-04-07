import React, { Fragment, useContext } from 'react';

import { AuthContext } from '../AuthContext';

import { RegisterForm } from '../legacyComponents/RegisterForm';

export const Registration = () => {
  const { activateAuth } = useContext(AuthContext);

  return (
    <Fragment>
      <h1>Create an account</h1>
      <RegisterForm activateAuth={activateAuth} />
    </Fragment>
  );
};
