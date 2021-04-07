import React from 'react';

import { UserProfileCardFragment } from 'generated/graphql';

const UserCard = ({ fullName }: UserProfileCardFragment) => {
  return <div>{fullName}</div>;
};

export default UserCard;
