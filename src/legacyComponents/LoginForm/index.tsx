import React, { useState, Fragment } from 'react';
import SubmitBox from 'components/molecules/SubmitBox';
import TextInput from 'components/atoms/Inputs/Text';
import { useLoginMutation } from 'generated/graphql';

type LoginFormProps = {
  activateAuth: (token: string | null | undefined) => void;
};

export const LoginForm = ({ activateAuth }: LoginFormProps) => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation({
    variables: {
      password,
      usernameOrEmail,
    },
  });
  const handleSubmit = () => {
    setDisabled(true);

    login()
      .then(({ data }) => {
        const accessToken = data?.login?.tokens?.accessToken;
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
