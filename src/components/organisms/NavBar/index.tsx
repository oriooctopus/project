import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { AuthContext } from '../../../AuthContext';

import clsx from 'clsx';
import styles from './index.module.scss';

const ICON_SIZE = '36px';

type NavLinkProps = {
  children: React.ReactNode;
  to: string;
};

const NavLink = ({ children, to }: NavLinkProps) => (
  <Link
    className={clsx(styles.navbarItem, 'navbar-item', 'text-light')}
    to={to}
  >
    {children}
  </Link>
);

const customerRoutes = [<NavLink to="/">Restaurants</NavLink>];

const ownerRoutes = [
  <NavLink to="/">Home</NavLink>,
  <NavLink to="/unanswered-reviews">Unanswered Reviews</NavLink>,
  <NavLink to="/restaurant/add">Add a restaurant</NavLink>,
];

const adminRoutes = [
  <NavLink to="/">Restaurants</NavLink>,
  <NavLink to="/users">Users</NavLink>,
];

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  const {
    userData: { role },
  } = useContext(AuthContext);

  return (
    <nav
      className={clsx(
        styles.navbar,
        'navbar navbar-expand-lg navbar-dark d-flex',
      )}
    >
      {role === 'owner' && ownerRoutes}
      {role === 'admin' && adminRoutes}

      {isAuth && (
        <NavLink to="/logout">
          <IoMdLogOut size={ICON_SIZE} title="Logout" />
        </NavLink>
      )}
      {!isAuth && (
        <NavLink to="/login">
          <IoMdLogIn size={ICON_SIZE} title="Login" />
        </NavLink>
      )}
    </nav>
  );
};
