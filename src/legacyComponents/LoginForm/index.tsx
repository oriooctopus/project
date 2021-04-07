import React, { useState, Fragment } from 'react';
import { useMutation } from '@apollo/client';

import SubmitBox from 'components/molecules/SubmitBox';
import TextInput from 'components/atoms/Inputs/Text';

import { LOGIN } from '../../gql/mutations/auth';

type LoginFormProps = {
  activateAuth: (token: string) => void;
};

export const LoginForm = ({ activateAuth }: LoginFormProps) => {
  const [disabled, setDisabled] = useState(false);
  const [authUser] = useMutation(LOGIN);
  const [error, setError] = useState('');
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    setDisabled(true);

    const variables = {
      usernameOrEmail,
      password,
    };

    authUser({ variables })
      .then(({ data }) => {
        const { accessToken } = data.login.tokens;
        activateAuth(accessToken);
      })
      .catch(() => setError('Invalid Credentials'));
  };

  return (
    <Fragment>
      <SubmitBox
        canSubmit={!disabled}
        errorMessage={error}
        onSubmit={handleSubmit}
      >
        <TextInput
          name="Username Or Email"
          handleChange={setUsernameOrEmail}
          required
          placeholder="Username or Email Here"
          value={usernameOrEmail}
          withLabel
        />
        <TextInput
          name="Password"
          handleChange={setPassword}
          required
          placeholder="Password Here"
          type="password"
          value={password}
          withLabel
        />
      </SubmitBox>
    </Fragment>
  );
};
