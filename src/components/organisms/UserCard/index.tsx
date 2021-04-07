import React from 'react';
import { Link } from '@reach/router';
import { UserFragment } from 'generated/graphql';
import Button from 'components/atoms/Button';
import useDeleteUser from 'hooks/useDeleteUser';
import styles from './index.module.scss';

const UserCard = ({ email, id, username }: UserFragment) => {
  const onClickUserDelete = useDeleteUser(id);

  return (
    <div className={styles.root}>
      <span className="large-body">user id: {id}</span>
      <span>username: {username}</span>
      <span>email: {email}</span>
      <div className={styles.buttonContainer}>
        <Button theme="danger" onClick={onClickUserDelete}>
          Delete
        </Button>
        <Link to={`/user/edit/${id}`}>
          <span className="button primary">Edit</span>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
