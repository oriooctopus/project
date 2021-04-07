import React from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import UsersTemplate from 'templates/Users';

import { useUsersQuery } from 'generated/graphql';

const USERS_PER_PAGE = 10;

type UsersProps = {
  pageNumber?: string;
};

const Users = ({ pageNumber }: UsersProps) => {
  const currentPageNumber = pageNumber ? Number(pageNumber) : 1;

  const paginationUrlBuilder = (page: number) => `/users/${page}`;

  const after = (currentPageNumber - 1) * USERS_PER_PAGE;

  const { loading, error, data } = useUsersQuery({
    fetchPolicy: 'no-cache',
    variables: {
      after,
      limit: USERS_PER_PAGE,
    },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert errorMessage={error?.message} />;
  if (!data?.users) return <span>query unsuccessful</span>;

  return (
    <UsersTemplate
      {...data}
      currentPageNumber={currentPageNumber}
      usersPerPage={USERS_PER_PAGE}
      paginationUrlBuilder={paginationUrlBuilder}
    />
  );
};

export default Users;
