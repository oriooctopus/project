import React, { Fragment } from 'react';

import { ErrorAlert } from '../legacyComponents/ErrorAlert';

export const Page404 = () => {
  return (
    <Fragment>
      <ErrorAlert errorMessage="404" />
    </Fragment>
  );
};
