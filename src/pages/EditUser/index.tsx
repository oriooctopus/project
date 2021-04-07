import React, { useEffect, useState } from 'react';

import { Spinner } from 'legacyComponents/Spinner';
import { ErrorAlert } from 'legacyComponents/ErrorAlert';
import UserTemplate from 'templates/User';

import {
  useEditUserPageQuery,
  useEditUserMutation,
} from 'generated/graphql';

type EditUserProps = {
  userId: string;
};

const EditUser = ({ userId: userIdString }: EditUserProps) => {
  const userId = Number(userIdString);
  const {
    loading: userQueryLoading,
    error: userQueryError,
    data: userQuery,
  } = useEditUserPageQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(userId) },
  });

  const previousRole = userQuery?.user?.user?.role || '';
  const previousUsername = userQuery?.user?.user?.username || '';
  const previousEmail = userQuery?.user?.user?.email || '';

  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  const [
    editUserMutation,
    { called: submitCalled },
  ] = useEditUserMutation({
    variables: {
      email,
      username,
      role,
      id: userId,
    },
  });

  const onSubmit = () => {
    editUserMutation()
      .then(() => {
        window.location.href = `/users`;
      })
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };

  useEffect(() => {
    setCanSubmit(!submitCalled);
  }, [submitCalled]);

  useEffect(() => {
    setEmail(previousEmail);
    setRole(previousRole);
    setUsername(previousUsername);
  }, [userQuery]);

  if (userQueryLoading) return <Spinner />;
  if (userQueryError)
    return <ErrorAlert errorMessage={userQueryError.message} />;
  if (!userQuery?.user) return <span>query unsucessful</span>;

  return (
    <UserTemplate
      canSubmit={canSubmit}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      email={email}
      id={userId}
      role={role}
      username={username}
      setEmail={setEmail}
      setRole={setRole}
      setUsername={setUsername}
    />
  );
};

export default EditUser;
