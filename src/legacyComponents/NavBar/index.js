import React, { useContext } from 'react';
import { Link } from '@reach/router';

import { MdHome, MdPeopleOutline } from 'react-icons/md';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

import { AuthContext } from '../../AuthContext';

import clsx from 'clsx';
import styles from './index.module.scss';

const SIZE = '36px';

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  const { userData } = useContext(AuthContext);

  return (
    <nav
      className={clsx(
        styles.navbar,
        'navbar navbar-expand-lg navbar-dark justify-content-between d-flex',
      )}
    >
      <Link
        className="navbar-item text-light font-weight-bold pt-2"
        to="/restaurants"
      >
        <MdHome size={SIZE} title="Home" />
      </Link>
      {isAuth && userData.isAdmin && (
        <Link
          className="navbar-item text-light font-weight-bold pt-2"
          to="/user-administration"
        >
          <MdPeopleOutline size={SIZE} title="User administration" />
        </Link>
      )}
      <Link
        className="navbar-item text-light font-weight-bold pt-2"
        to="/logout"
      >
        {!isAuth && <IoMdLogIn size={SIZE} title="Login" />}
        {isAuth && <IoMdLogOut size={SIZE} title="Logout" />}
      </Link>
    </nav>
  );
};
