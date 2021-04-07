import React, { useContext } from 'react';
import { Link } from '@reach/router';

import { MdHome, MdPeopleOutline } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

import { AuthContext } from '../../../AuthContext';

import clsx from 'clsx';
import styles from './index.module.scss';

const SIZE = '36px';

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

const ownerRoutes = [
  <NavLink to="/unanswered-reviews">Unanswered Reviews</NavLink>,
];

const adminRoutes = [<NavLink to="/users">Users</NavLink>];

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  const {
    userData: { role },
  } = useContext(AuthContext);

  console.log('styles', styles);

  return (
    <nav
      className={clsx(
        styles.navbar,
        'navbar navbar-expand-lg navbar-dark d-flex',
      )}
    >
      {isAuth && <NavLink to="/">Restaurants</NavLink>}

      {role === 'owner' && ownerRoutes}
      {role === 'admin' && adminRoutes}

      {isAuth && (
        <NavLink to="/logout">
          <IoMdLogOut size={SIZE} title="Logout" />
        </NavLink>
      )}
      {!isAuth && (
        <NavLink to="/login">
          <IoMdLogIn size={SIZE} title="Login" />
        </NavLink>
      )}
    </nav>
  );
};
