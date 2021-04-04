import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../AuthContext';

import { SubmitButton } from '../legacyComponents/SubmitButton';
import { PageTitle } from '../legacyComponents/PageTitle';

export const Logout = () => {
  const { removeAuth } = useContext(AuthContext);
  return (
    <Fragment>
      <PageTitle text="Log out" />
      <div className="mt-5">
        <SubmitButton onClick={() => {}}>
          {/* <SubmitButton onClick={thremoveAu}> */}
          Close session
        </SubmitButton>
      </div>
    </Fragment>
  );
};
