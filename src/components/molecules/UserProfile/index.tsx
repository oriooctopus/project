import React from 'react';
import { UserProfileCardFragment } from 'generated/graphql';
import styles from './index.module.scss';

const UserProfileCard = ({ fullName }: UserProfileCardFragment) => {
  return <div className={styles.root}>{fullName}</div>;
};

export default UserProfileCard;
