import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../AuthContext';

import { SubmitButton } from '../legacyComponents/SubmitButton';

export const Logout = () => {
  const { removeAuth } = useContext(AuthContext);
  return (
    <main className="simple-page">
      <h1>Log out</h1>
      <div className="mt-5">
        <SubmitButton onClick={removeAuth}>
          Close session
        </SubmitButton>
      </div>
    </main>
  );
};
