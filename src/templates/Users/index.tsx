import React from 'react';
import { Link } from '@reach/router';
import Container from 'components/atoms/Container';
import Layout from 'components/atoms/Layout';
import Paginator from 'components/molecules/Paginator';

import { UsersQuery, UserEdges, User } from 'generated/graphql';

import UserCard from 'components/organisms/UserCard';

type UserProps = UsersQuery & {
  currentPageNumber: number;
  paginationUrlBuilder: (pageNumber: number) => string;
  usersPerPage: number;
};

const Users = ({
  currentPageNumber,
  paginationUrlBuilder,
  users,
  usersPerPage,
}: UserProps) => {
  if (!usersPerPage) {
    return <span />;
  }

  const totalUsers = users?.totalCount || 0;
  const totalPages =
    totalUsers === 0 ? 1 : Math.ceil(totalUsers / usersPerPage);

  const formattedUsers = (users?.edges || []).map(
    // @ts-ignore
    (edge: UserEdges) => edge?.node,
  ) as User[];

  return (
    <Layout>
      <Container>
        <section>
          <h1>Users</h1>
          <div className="row">
            {formattedUsers.map((user: User) => (
              <div className="col-md-6 spacing-medium-bottom">
                <UserCard {...user} />
              </div>
            ))}
          </div>
          <Paginator
            currentPage={currentPageNumber}
            paginationUrlBuilder={paginationUrlBuilder}
            totalPages={totalPages}
          />
        </section>
      </Container>
    </Layout>
  );
};

export default Users;
