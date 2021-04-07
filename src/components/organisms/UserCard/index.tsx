import React from 'react';
import { Link } from '@reach/router';
import { UserFragment } from 'generated/graphql';
import Button from 'components/atoms/Button';
import useDeleteUser from 'hooks/useDeleteUser';
import styles from './index.module.scss';

const UserCard = ({ id, username }: UserFragment) => {
  const onClickUserDelete = useDeleteUser(id);
  const onClickUserEdit = () => {
    window.location.href = `/user/edit/${id}`;
  };

  return (
    <Link to={`/user/${id}`}>
      <div className={styles.root}>
        <span className="large-body">user id: {id}</span>
        <span>role: {username}</span>
        <div className={styles.buttonContainer}>
          <Button theme="danger" onClick={onClickUserDelete}>
            Delete
          </Button>
          <Button theme="primary" onClick={onClickUserEdit}>
            Edit
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
