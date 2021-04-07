import React, { useEffect, useState } from 'react';
import { useNavigate } from '@reach/router';

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
  const navigate = useNavigate();
  const [canSubmit, setCanSubmit] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string | null>(null);
  const {
    loading: userQueryLoading,
    error: userQueryError,
    data: userQuery,
  } = useEditUserPageQuery({
    fetchPolicy: 'no-cache',
    variables: { id: Number(userId) },
  });
  const handlePasswordChange = (password: string) => {
    if (!!password) {
      setPassword(password);
    }
  };
  const [
    editUserMutation,
    { called: submitCalled },
  ] = useEditUserMutation({
    variables: {
      email,
      password,
      username,
      id: userId,
    },
  });
  const onSubmit = () => {
    editUserMutation()
      .then(() => {
        navigate('/users');
      })
      .catch((e) => setErrorMessage(JSON.stringify(e)));
  };
  useEffect(() => {
    setCanSubmit(!submitCalled);
  }, [submitCalled]);
  useEffect(() => {
    setEmail(userQuery?.user?.user?.email || '');
    setUsername(userQuery?.user?.user?.username || '');
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
      username={username}
      password={password || undefined}
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={handlePasswordChange}
    />
  );
};

export default EditUser;
