import React, { Fragment, useContext } from 'react';

import { AuthContext } from '../AuthContext';

import { PageTitle } from '../legacyComponents/PageTitle';
import { RegisterForm } from '../legacyComponents/RegisterForm';

export const Registration = () => {
  const { activateAuth } = useContext(AuthContext);

  return (
    <Fragment>
      <PageTitle text="Create an account" />
      <RegisterForm activateAuth={activateAuth} />
    </Fragment>
  );
};
