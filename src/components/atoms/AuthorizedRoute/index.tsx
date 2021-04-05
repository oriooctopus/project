import React, { useContext } from 'react';
import { AuthContext } from 'AuthContext';

import { roles as rolesEnum } from '../../../@types/customTypes';

type AuthorizedRouteProps = {
  roles: rolesEnum[];
  children: React.ReactNode;
};

const AuthorizedRoute = ({
  roles,
  children,
}: AuthorizedRouteProps) => {
  const {
    userData: { role },
  } = useContext(AuthContext);

  const isAuthorized = roles.includes(role);

  return isAuthorized ? children : null;
};

export default AuthorizedRoute;
